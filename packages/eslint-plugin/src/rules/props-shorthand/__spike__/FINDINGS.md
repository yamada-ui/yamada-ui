# AST-only Feasibility Spike: props-shorthand component detection

Verification of which wrapper-component detection cases require the TS Compiler API
and which are solvable with pure AST analysis (`@typescript-eslint/parser` without
`parserServices.program`).

## Hypotheses under test

| Case | Code                                                                       | Hypothesis                               |
| ---- | -------------------------------------------------------------------------- | ---------------------------------------- |
| A    | `const MyBox = styled(Box)`                                                | Solvable with pure AST                   |
| B    | `import { Box } from "./libs/ui"` (barrel re-exporting `@yamada-ui/react`) | Solvable with file parsing, no type info |
| C    | `const MyBox = (props: BoxProps) => <Box {...props} />`                    | NOT solvable without TS Compiler API     |
| D    | `type MyProps = BoxProps & { foo: string }` + wrapper                      | NOT solvable without TS Compiler API     |

## Results

| Case | Hypothesis   | Verdict                          | Evidence                                    |
| ---- | ------------ | -------------------------------- | ------------------------------------------- |
| A    | solvable     | **confirmed**                    | `factory-tracker.test.ts` (5 tests)         |
| B    | solvable     | **confirmed**                    | `reexport-resolver.test.ts` (7 tests)       |
| C    | not solvable | **refuted for the literal case** | `annotation-tracker.test.ts` (case C block) |
| D    | not solvable | **refuted for the literal case** | `annotation-tracker.test.ts` (case D block) |

### Why C and D were refuted

`@typescript-eslint/parser` emits type annotations as syntax nodes even without a
program: the parameter annotation `(props: BoxProps)` is a `TSTypeAnnotation` →
`TSTypeReference` whose `typeName` resolves against the import list, and the
intersection `BoxProps & { foo: string }` is a `TSTypeAliasDeclaration` →
`TSIntersectionType` whose members are inspectable. Both are traceable with the
same import-set technique used for case A, within a single file. No semantic type
analysis is needed for these literal shapes.

### The genuine boundary

`inference-boundary.test.ts` demonstrates the actual dividing line with one code
sample evaluated by both approaches:

```tsx
import { withTooltip } from "./hoc"
const MyBox = withTooltip(Box)
```

- Pure AST trackers: **cannot detect** (`false`) — the component type exists only
  in the inferred return type of `withTooltip`; no syntax in the consuming file
  names a Yamada UI symbol.
- `createTypedComponentMatcher` (TS Compiler API): **detects** (`true`) via the
  checker's call-signature props type.

Cases that genuinely require the TS Compiler API:

- Props types inferred from HOC / factory return types with no local annotation
- Type-level computation (`Omit<...>`, mapped/conditional types) where the UI
  type name never appears syntactically at the use site
- Annotations whose types are declared in other files, unless the file-graph
  resolver (case B technique) is extended to follow type re-exports as well

### Precision caveat for the AST approach to C/D

The annotation tracker is name-based and heuristic: any annotation referencing
any identifier imported from `@yamada-ui/react` counts. The TS Compiler API
checks the actual type shape instead. Example false positive risk: a wrapper
annotated with a non-style props type (e.g. `UseDisclosureProps`) would still be
flagged by the AST heuristic.

## Layer mapping (L1–L5)

| Layer                | Case       | Required machinery                     | Verified           |
| -------------------- | ---------- | -------------------------------------- | ------------------ |
| L1 direct import     | (existing) | AST import tracking                    | existing tests     |
| L2 factory wrapper   | A          | AST `VariableDeclarator` tracking      | ✅                 |
| L3 re-export barrel  | B          | file-graph parse (no types)            | ✅                 |
| L4 annotated wrapper | C, D       | AST type-annotation syntax (heuristic) | ✅                 |
| L5 inferred types    | boundary   | TS Compiler API only                   | ✅ (contrast test) |
