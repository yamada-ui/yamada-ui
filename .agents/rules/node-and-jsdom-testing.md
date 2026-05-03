# Node and JSDOM Testing Rules

Follow these rules when writing Vitest tests that run in `node` (`packages/cli`) or `jsdom` (`packages/utils`, `packages/react` non-browser tests) environments. Browser tests in `packages/react` are out of scope — see [Browser Testing](./browser-testing.md).

## Core Principles

- Tests must be isolated. No test should depend on — or leak into — another test's state.
- Prefer explicit, narrow assertions. One test, one idea.
- Reach for Vitest stubbing primitives (`vi.stub*`, `vi.spyOn`, `vi.useFakeTimers`) instead of reassigning imports, env vars, or globals directly.
- Restore everything you stub. `afterEach` is the default teardown point.

## Test Structure

### Flatten `describe` blocks, prefer setup functions

#### DO NOT

```ts
describe("add", () => {
  let project
  beforeEach(() => {
    project = createProject()
  })
  describe("when the component exists", () => {
    let registry
    beforeEach(async () => {
      registry = await loadRegistry(project)
    })
    describe("and is up to date", () => {
      beforeEach(() => {
        markUpToDate(registry)
      })
      test("exits cleanly", () => {
        ...
      })
    })
  })
})
```

Nested `describe` + `beforeEach` chains scatter state across many scopes, so every test requires scrolling to reconstruct what the fixture looks like at the point of assertion.

#### DO

```ts
function setup(overrides?: Partial<Project>) {
  const project = createProject(overrides)
  return { project, registry: loadRegistry(project) }
}

test("exits cleanly when the component is up to date", async () => {
  const { project, registry } = setup()
  markUpToDate(await registry)
  ...
})
```

A setup function returns a fresh fixture per call, keeps assertions close to the arrangement, and removes the re-assignment between tests.

### Reserve `beforeEach` for teardown-critical work

#### DO NOT

```ts
beforeEach(() => {
  project = createProject()
  spy = vi.spyOn(process, "exit")
})
```

Using `beforeEach` for fixtures you could inline makes tests harder to read. Using it for stubs without a matching `afterEach` silently leaks state into the next test.

#### DO

```ts
afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
  vi.useRealTimers()
})
```

`beforeEach` earns its cost when the corresponding `afterEach` must run even when the test fails — timer restoration, stub teardown, console silencing. Keep the default teardown block at the top of the file.

### Collapse duplicated cases with `test.each`

#### DO NOT

```ts
test("antonym('top') returns 'bottom'", () => {
  expect(antonym("top")).toBe("bottom")
})
test("antonym('left') returns 'right'", () => {
  expect(antonym("left")).toBe("right")
})
test("antonym('inline-start') returns 'inline-end'", () => {
  expect(antonym("inline-start")).toBe("inline-end")
})
```

Table-shaped duplication hides which axis the test actually covers, and a new case needs a whole new `test` block.

#### DO

```ts
test.each([
  ["top", "bottom"],
  ["left", "right"],
  ["inline-start", "inline-end"],
])("antonym(%s) returns %s", (input, expected) => {
  expect(antonym(input)).toBe(expected)
})
```

`test.each` makes the axis explicit, adding a case is one line, and failure output includes the row that failed.

## Mocks & Spies

### Use `vi.mock` with `vi.mocked` — not `any` on `importOriginal`

#### DO NOT

```ts
vi.mock("../../utils", async (importOriginal) => {
  const actual: any = await importOriginal()
  return { ...actual, validateDir: vi.fn() }
})
```

Typing `importOriginal` as `any` throws away autocomplete and return-type inference, and a rename in `../../utils` will not flag the spread.

#### DO

```ts
import * as utils from "../../utils"

vi.mock("../../utils", async (importOriginal) => {
  const actual = await importOriginal<typeof utils>()
  return { ...actual, validateDir: vi.fn() }
})

vi.mocked(utils.validateDir).mockReturnValue(true)
```

`importOriginal<typeof utils>()` preserves the module type. `vi.mocked(...)` keeps every call site correctly typed when you configure the mock.

### Restore spies in `afterEach`

#### DO NOT

```ts
test("exits on missing config", () => {
  const exitSpy = vi
    .spyOn(process, "exit")
    .mockImplementation(() => undefined as never)
  run()
  expect(exitSpy).toHaveBeenCalled()
})
```

A spy that is not restored keeps the stubbed behaviour active in the next test. `process.exit` in particular turns subsequent test failures into silent no-ops.

#### DO

```ts
afterEach(() => {
  vi.restoreAllMocks()
})

test("exits on missing config", () => {
  const exitSpy = vi
    .spyOn(process, "exit")
    .mockImplementation(() => undefined as never)
  run()
  expect(exitSpy).toHaveBeenCalled()
})
```

`restoreAllMocks` restores the original implementations and clears history. Use `clearAllMocks` only when you intentionally want to keep a mocked implementation between tests.

### Use `vi.hoisted` when a mock needs a shared handle

#### DO NOT

```ts
const fetchMock = vi.fn()
vi.mock("./registry", () => ({ fetchRegistry: fetchMock }))
```

`vi.mock` is hoisted above imports, so `fetchMock` is still in the TDZ when the factory runs — the import-time mock sees `undefined`, not the `vi.fn()` you wrote.

#### DO

```ts
const { fetchMock } = vi.hoisted(() => ({ fetchMock: vi.fn() }))
vi.mock("./registry", () => ({ fetchRegistry: fetchMock }))
```

`vi.hoisted` runs before mock factories, so the shared handle is alive when the factory executes and when your tests reference it.

## Timers

### Pair `useFakeTimers` with `useRealTimers`

#### DO NOT

```ts
test("debounced", () => {
  vi.useFakeTimers()
  vi.advanceTimersByTime(300)
  ...
})
```

Fake timers leak into the next test. The next `await` on a real delay (transition, `setTimeout`, microtask) hangs until the test timeout.

#### DO

```ts
afterEach(() => {
  vi.useRealTimers()
})

test("debounced", () => {
  vi.useFakeTimers()
  vi.advanceTimersByTime(300)
  ...
})
```

Restore real timers in `afterEach`, or with `try/finally` if the fake-timer scope is strictly one test.

### Drive async timer code with `advanceTimersByTimeAsync`

#### DO NOT

```ts
vi.useFakeTimers()
const promise = fetchWithRetry()
vi.advanceTimersByTime(1000)
await promise
```

`advanceTimersByTime` is synchronous and does not yield to the microtask queue. Promises scheduled inside the timer callback never settle within the test.

#### DO

```ts
vi.useFakeTimers()
const promise = fetchWithRetry()
await vi.advanceTimersByTimeAsync(1000)
await promise
```

`advanceTimersByTimeAsync` flushes microtasks between ticks, so chained promises resolve inside the test.

## Environment & Globals

### Stub env vars — do not assign to `process.env`

#### DO NOT

```ts
const original = process.env.npm_config_user_agent
afterEach(() => {
  process.env.npm_config_user_agent = original
})
test("detects npm", () => {
  process.env.npm_config_user_agent = "npm/10.0.0"
  expect(detectPackageManager()).toBe("npm")
})
```

Direct assignment mutates the ambient environment and leaves restoration entirely manual. Nothing tracks which variables you touched, and simple restore code often loses the distinction between a variable that was absent and one that had an explicit value.

#### DO

```ts
afterEach(() => {
  vi.unstubAllEnvs()
})

test("detects npm", () => {
  vi.stubEnv("npm_config_user_agent", "npm/10.0.0")
  expect(detectPackageManager()).toBe("npm")
})
```

`vi.stubEnv` records the change. `vi.unstubAllEnvs` restores every stub in one call, even the ones you forgot.

### Stub globals — do not assign to `global` / `globalThis`

#### DO NOT

```ts
const defaultFetch = global.fetch
beforeAll(() => {
  global.fetch = vi.fn() as typeof global.fetch
})
afterAll(() => {
  global.fetch = defaultFetch
})
```

Direct assignment to `global` loses type safety (note the cast) and makes the override file-scoped until a matching manual restore runs. Missing or incomplete restore code leaks the global into later tests.

#### DO

```ts
afterEach(() => {
  vi.unstubAllGlobals()
})

test("calls the registry endpoint", () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("{}")))
  ...
})
```

`vi.stubGlobal` is tracked and automatically unwound by `vi.unstubAllGlobals`. Scope the stub to each test so global state does not leak across cases or files.

## Assertions

### Use `toStrictEqual` for objects

#### DO NOT

```ts
expect(result).toEqual({ name: "Save" })
expect(result).toBe({ name: "Save" })
```

`toEqual` ignores `undefined` properties and does not verify prototype, so `{ name: "Save", extra: undefined }` falsely passes. `toBe` uses `Object.is` and rejects any new object literal.

#### DO

```ts
expect(result).toStrictEqual({ name: "Save" })
expect(result.name).toBe("Save")
```

`toStrictEqual` checks own enumerable keys, types, and prototype. Use `toBe` for primitives, `toStrictEqual` for structured values.

### Verify error type and message

#### DO NOT

```ts
await expect(fetchRegistry("nonexistent")).rejects.toThrow("not found")
```

A substring match accepts any error — `TypeError: Cannot read properties of null (not found-something)` passes. The test is green even when the real error path changed.

#### DO

```ts
await expect(fetchRegistry("nonexistent")).rejects.toMatchObject({
  constructor: RegistryNotFoundError,
  message: expect.stringMatching(/component "nonexistent" not found/),
})
```

Assert the error constructor and a regex that describes the actual message from the same thrown instance. Both constraints together make the assertion meaningful without invoking the failing operation twice.

### Every test needs an explicit `expect`

#### DO NOT

```ts
test("resolves on success", async () => {
  await fetchRegistry("button")
})
```

A test with no `expect` passes as long as nothing throws. Refactoring the code to silently swallow the error leaves the test green.

#### DO

```ts
test("resolves on success", async () => {
  await expect(fetchRegistry("button")).resolves.toMatchObject({
    name: "button",
  })
})
```

Every test needs at least one explicit `expect`. If the assertion is conditional, guard with `expect.assertions(n)` so the test fails when none ran.

## Snapshots

### Prefer `toMatchInlineSnapshot` over `toMatchSnapshot`

#### DO NOT

```ts
expect(generateRegistry(items)).toMatchSnapshot()
```

External snapshots live in a sibling file the reviewer must open separately. Drift accumulates because `-u` is easy to run without looking at the diff.

#### DO

```ts
expect(generateRegistry(items)).toMatchInlineSnapshot(`
  {
    "items": 3,
    "version": "1.0.0",
  }
`)
```

Inline snapshots keep the expected value next to the assertion, so diffs show up in the same review. Use `toMatchFileSnapshot` only for large artefacts (generated files, whole HTML trees).

### Do not snapshot values that change between runs

#### DO NOT

```ts
expect({ id: randomUUID(), createdAt: Date.now() }).toMatchInlineSnapshot(...)
```

Every run produces a new diff, which trains reviewers to reflexively `-u`.

#### DO

```ts
expect({ id: randomUUID(), createdAt: Date.now() }).toMatchInlineSnapshot(
  { id: expect.any(String), createdAt: expect.any(Number) },
  `
    {
      "createdAt": Any<Number>,
      "id": Any<String>,
    }
  `,
)
```

Property matchers keep the dynamic fields in the snapshot without locking their value. If a field is both dynamic and uninteresting, assert on it separately with `toBe`.

## CLI Specifics

### Isolate `process.exit` — never let it reach the real implementation

#### DO NOT

```ts
test("exits on invalid command", () => {
  run(["add", "???"])
})
```

If the code under test calls the real `process.exit`, Vitest kills the worker mid-suite. Later tests are skipped, sometimes silently.

#### DO

```ts
afterEach(() => {
  vi.restoreAllMocks()
})

test("exits on invalid command", () => {
  const exit = vi
    .spyOn(process, "exit")
    .mockImplementation(() => undefined as never)
  expect(() => run(["add", "???"])).not.toThrow()
  expect(exit).toHaveBeenCalledWith(1)
})
```

Spy `process.exit` at the top of the test, assert the exit code, and let `restoreAllMocks` put it back. The same pattern applies to `process.stdout.write` when asserting CLI output.

### Write to a temp directory, never a fixed path

#### DO NOT

```ts
await writeFile("./tmp/output.json", data)
```

Hard-coded paths collide under Vitest's parallel runner and leak between runs.

#### DO

```ts
import { mkdtempSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

let dir: string | undefined
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), "yamada-ui-cli-"))
})
afterEach(() => {
  if (dir) rmSync(dir, { recursive: true, force: true })
})
```

`mkdtempSync` returns a unique path, so parallel workers do not collide. Guarded `rmSync` with `recursive` and `force` removes the whole fixture tree after each test without turning a failed setup into a teardown failure, and the prefix keeps leaked paths diagnosable.
