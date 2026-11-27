import { defineConfig } from "oxlint"
import {
  sharedBrowserTestFiles,
  sharedTestFiles,
  sharedUnitTestFiles,
} from "./shared.ts"

export const vitestConfig = defineConfig({
  overrides: [
    {
      files: sharedTestFiles,
      plugins: ["vitest"],
      rules: {
        "vitest/consistent-each-for": "error",
        "vitest/consistent-test-filename": "error",
        "vitest/consistent-test-it": ["error", { fn: "test" }],
        "vitest/consistent-vitest-vi": "error",
        "vitest/expect-expect": "off",
        "vitest/hoisted-apis-on-top": "error",
        "vitest/no-alias-methods": "error",
        "vitest/no-commented-out-tests": "error",
        "vitest/no-conditional-in-test": "off",
        "vitest/no-conditional-tests": "error",
        "vitest/no-disabled-tests": "error",
        "vitest/no-duplicate-hooks": "error",
        "vitest/no-focused-tests": "error",
        "vitest/no-identical-title": "error",
        "vitest/no-import-node-test": "error",
        "vitest/no-importing-vitest-globals": "off",
        "vitest/no-interpolation-in-snapshots": "error",
        "vitest/no-large-snapshots": "error",
        "vitest/no-mocks-import": "error",
        "vitest/no-restricted-matchers": "error",
        "vitest/no-standalone-expect": "error",
        "vitest/no-test-prefixes": "error",
        "vitest/no-test-return-statement": "error",
        "vitest/prefer-called-exactly-once-with": "error",
        "vitest/prefer-called-once": "off",
        "vitest/prefer-called-times": "off",
        "vitest/prefer-called-with": "error",
        "vitest/prefer-comparison-matcher": "error",
        "vitest/prefer-each": "error",
        "vitest/prefer-equality-matcher": "error",
        "vitest/prefer-expect-resolves": "error",
        "vitest/prefer-expect-type-of": "off",
        "vitest/prefer-hooks-in-order": "error",
        "vitest/prefer-hooks-on-top": "error",
        "vitest/prefer-import-in-mock": "off",
        "vitest/prefer-importing-vitest-globals": "off",
        "vitest/prefer-mock-promise-shorthand": "error",
        "vitest/prefer-spy-on": "error",
        "vitest/prefer-strict-boolean-matchers": "off",
        "vitest/prefer-strict-equal": "error",
        "vitest/prefer-to-be": "error",
        "vitest/prefer-to-be-falsy": "error",
        "vitest/prefer-to-be-object": "error",
        "vitest/prefer-to-be-truthy": "error",
        "vitest/prefer-to-contain": "error",
        "vitest/prefer-to-have-length": "error",
        "vitest/prefer-todo": "error",
        "vitest/require-awaited-expect-poll": "error",
        "vitest/require-hook": "error",
        "vitest/require-local-test-context-for-concurrent-snapshots": "error",
        "vitest/require-mock-type-parameters": "off",
        "vitest/require-test-timeout": "off",
        "vitest/require-to-throw-message": "error",
        "vitest/require-top-level-describe": "error",
        "vitest/valid-describe-callback": "error",
        "vitest/valid-expect": ["error", { alwaysAwait: true }],
        "vitest/valid-expect-in-promise": "error",
        "vitest/valid-title": "error",
        "vitest/warn-todo": "off",
      },
    },
  ],
})

const expressionWrappers = [
  "TSAsExpression",
  "TSTypeAssertion",
  "TSNonNullExpression",
  "TSSatisfiesExpression",
  "ParenthesizedExpression",
  "ChainExpression",
].join(",")

const nonExpressionChildren =
  `:matches(${expressionWrappers}) > :not(.expression), ` +
  `:matches(${expressionWrappers}) > :not(.expression) *`

function unwrap(selector: string) {
  return `:has(${selector}:not(:not(${expressionWrappers}) *, ${nonExpressionChildren}))`
}

function memberChain(selector: string) {
  return (
    `:has(${selector}:not(` +
    "MemberExpression > .property, " +
    "MemberExpression > .property *, " +
    `:not(MemberExpression,${expressionWrappers}) *, ${nonExpressionChildren}))`
  )
}

function propertyMatches(pattern: string) {
  return (
    ":matches(" +
    `[computed=false][property.type=Identifier][property.name=/${pattern}/], ` +
    "[computed=true]:has(> .property" +
    unwrap(
      ":matches(" +
        `Literal[value=/${pattern}/],` +
        "TemplateLiteral[expressions.length=0][quasis.length=1]" +
        `[quasis.0.value.cooked=/${pattern}/])`,
    ) +
    "))"
  )
}

const globalRootPattern = "^(window|globalThis|global|self)$"
const globalRoot =
  memberChain(`Identifier[name=/${globalRootPattern}/]`) +
  `:not(${memberChain(`MemberExpression:not(${propertyMatches(globalRootPattern)})`)})`

function globalObject(name: string) {
  return (
    `:matches(Identifier[name=${name}],` +
    `MemberExpression${propertyMatches(`^${name}$`)}:has(> .object${globalRoot}))`
  )
}

const documentObject = unwrap(globalObject("document"))
const documentElement =
  `MemberExpression${propertyMatches("^(body|documentElement|head)$")}` +
  `:has(> .object${documentObject})`
const allowedElementProperties =
  "^(className|dataset|dir|id|innerHTML|style|textContent)$"
const allowedElementProperty =
  `MemberExpression${propertyMatches(allowedElementProperties)}` +
  `:has(> .object${unwrap(documentElement)})`
const staticComputedProperty = unwrap(
  ":matches(Literal,TemplateLiteral[expressions.length=0][quasis.length=1])",
)
const knownProperty =
  ":matches(" +
  "[computed=false][property.type=Identifier]," +
  `[computed=true]:has(> .property${staticComputedProperty}))`
const unknownElementProperty =
  `MemberExpression:not(${knownProperty})` +
  `:has(> .object${unwrap(documentElement)})`
const allowedDocumentMutation =
  ":matches(" +
  [
    `${propertyMatches(allowedElementProperties)}:has(> .object${unwrap(documentElement)})`,
    `:has(> .object${memberChain(allowedElementProperty)})`,
    `${propertyMatches(allowedElementProperties)}:has(> .object${memberChain(unknownElementProperty)})`,
  ].join(", ") +
  ")"

const protectedObjects = [
  "window",
  "globalThis",
  "global",
  "self",
  "navigator",
  "document",
  "AbortController",
  "AbortSignal",
  "AnimationEvent",
  "Array",
  "Blob",
  "Boolean",
  "CharacterData",
  "ClipboardEvent",
  "Comment",
  "CSSStyleDeclaration",
  "CustomEvent",
  "Date",
  "Document",
  "DocumentFragment",
  "DOMTokenList",
  "DragEvent",
  "Element",
  "Error",
  "Event",
  "EventTarget",
  "File",
  "FileReader",
  "FocusEvent",
  "FormData",
  "Function",
  "Headers",
  "History",
  "HTMLDocument",
  "HTMLElement",
  "InputEvent",
  "IntersectionObserver",
  "KeyboardEvent",
  "Location",
  "Map",
  "MathMLElement",
  "MediaQueryList",
  "MouseEvent",
  "MutationObserver",
  "Navigator",
  "Node",
  "Number",
  "Object",
  "Performance",
  "PointerEvent",
  "Promise",
  "Range",
  "RegExp",
  "Request",
  "ResizeObserver",
  "Response",
  "Selection",
  "Set",
  "ShadowRoot",
  "Storage",
  "String",
  "SVGElement",
  "Symbol",
  "Text",
  "TouchEvent",
  "TransitionEvent",
  "UIEvent",
  "URL",
  "URLSearchParams",
  "WeakMap",
  "WeakSet",
  "WheelEvent",
  "Window",
].join("|")

const protectedRoot = `Identifier[name=/^(${protectedObjects}|(?:HTML|SVG)[A-Z]\\w*Element)$/]`

function restrictedMember(allowedMutations: string) {
  return (
    `MemberExpression:has(> .object${memberChain(protectedRoot)})` +
    `:not(${allowedMutations})`
  )
}

const allowedDocumentAssignment =
  ":matches(" +
  propertyMatches("^(cookie|title|dir)$") +
  `:has(> .object${documentObject}),${allowedDocumentMutation})`
const assignment = `AssignmentExpression:has(> .left${unwrap(restrictedMember(allowedDocumentAssignment))})`
const deletion =
  "UnaryExpression[operator=delete]" +
  `:has(> .argument${unwrap(restrictedMember(allowedDocumentMutation))})`

function mutatorCall(methods: string[], object: string) {
  return (
    "CallExpression:has(> .callee" +
    unwrap(
      `MemberExpression${propertyMatches(`^(${methods.join("|")})$`)}` +
        `:has(> .object${unwrap(object)})`,
    ) +
    `):has(> .arguments:first-child${memberChain(protectedRoot)})`
  )
}

const objectMutation = mutatorCall(
  ["assign", "defineProperties", "defineProperty", "setPrototypeOf"],
  globalObject("Object"),
)
const reflectMutation = mutatorCall(
  ["defineProperty", "deleteProperty", "set", "setPrototypeOf"],
  "Identifier[name=Reflect]",
)
const mockMethods = "^(doMock|doUnmock|hoisted|mock|resetModules|unmock)$"
const moduleMock =
  "CallExpression:has(> .callee" +
  unwrap(
    `MemberExpression${propertyMatches(mockMethods)}` +
      `:has(> .object${unwrap("Identifier[name=/^(vi|vitest)$/]")})`,
  ) +
  ")"

const restrictedSyntax = [
  ...[assignment, deletion, objectMutation, reflectMutation].map(
    (selector) => ({
      message:
        "Do not mutate global state in non-isolated tests. Use vi.stubGlobal() or vi.spyOn() instead.",
      selector,
    }),
  ),
  {
    message:
      "Do not mock or reset modules in non-isolated tests. Use vi.spyOn() / vi.stubGlobal(), or isolate this test file.",
    selector: moduleMock,
  },
]

export const createVitestIsolationConfig = (...isolatedFiles: string[]) =>
  defineConfig({
    overrides: [
      {
        excludeFiles: [
          ...sharedBrowserTestFiles,
          ...isolatedFiles.flatMap((file) => {
            const normalized = file.replace(/^\.\//, "")

            return normalized.startsWith("**/")
              ? [normalized]
              : [normalized, `**/${normalized}`]
          }),
        ],
        files: sharedUnitTestFiles,
        jsPlugins: [
          {
            name: "eslint-js",
            specifier: import.meta.resolve("oxlint-plugin-eslint"),
          },
        ],
        rules: {
          "eslint-js/no-restricted-syntax": ["error", ...restrictedSyntax],
        },
      },
    ],
  })
