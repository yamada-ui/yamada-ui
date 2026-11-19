const GLOBAL_ROOTS = new Set(["window", "globalThis", "global", "self"])

const GLOBAL_OBJECTS = new Set([
  "window",
  "globalThis",
  "global",
  "self",
  "navigator",
])

const GLOBAL_PROTOTYPE_CONSTRUCTORS = new Set([
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
])

const ALLOWED_DOCUMENT_ASSIGNMENTS = new Set(["cookie", "title", "dir"])

const ALLOWED_DOCUMENT_ELEMENTS = new Set(["body", "documentElement", "head"])

const ALLOWED_DOCUMENT_ELEMENT_PROPERTIES = new Set([
  "className",
  "dataset",
  "dir",
  "id",
  "innerHTML",
  "style",
  "textContent",
])

const OBJECT_MUTATION_METHODS = new Set([
  "assign",
  "defineProperties",
  "defineProperty",
  "setPrototypeOf",
])

const REFLECT_MUTATION_METHODS = new Set([
  "defineProperty",
  "deleteProperty",
  "set",
  "setPrototypeOf",
])

const DISALLOWED_VI_METHODS = new Set([
  "doMock",
  "doUnmock",
  "hoisted",
  "mock",
  "resetModules",
  "unmock",
])

function isGlobalPrototypeConstructor(name) {
  if (!name) return false

  return (
    GLOBAL_PROTOTYPE_CONSTRUCTORS.has(name) ||
    /^(?:HTML|SVG)[A-Z]\w*Element$/.test(name)
  )
}

function unwrapExpression(node) {
  let current = node

  while (current) {
    if (
      current.type === "TSAsExpression" ||
      current.type === "TSTypeAssertion" ||
      current.type === "TSNonNullExpression" ||
      current.type === "TSSatisfiesExpression" ||
      current.type === "ParenthesizedExpression" ||
      current.type === "ChainExpression"
    ) {
      current = current.expression
      continue
    }

    break
  }

  return current
}

function getStaticStringValue(node) {
  const unwrapped = unwrapExpression(node)

  if (!unwrapped) return null
  if (unwrapped.type === "Literal") return String(unwrapped.value)

  if (
    unwrapped.type === "TemplateLiteral" &&
    unwrapped.expressions.length === 0 &&
    unwrapped.quasis.length === 1
  )
    return (
      unwrapped.quasis[0].value?.cooked ??
      unwrapped.quasis[0].value?.raw ??
      null
    )

  return null
}

function getPropertyName(node) {
  const unwrapped = unwrapExpression(node)

  if (!unwrapped || unwrapped.type !== "MemberExpression") return null
  if (!unwrapped.computed && unwrapped.property?.type === "Identifier")
    return unwrapped.property.name
  if (unwrapped.computed) return getStaticStringValue(unwrapped.property)

  return null
}

function getMemberChain(node) {
  const segments = []
  let current = unwrapExpression(node)

  while (current?.type === "MemberExpression") {
    segments.unshift(getPropertyName(current))
    current = unwrapExpression(current.object)
  }

  if (current?.type !== "Identifier") return null

  return {
    root: current.name,
    segments,
  }
}

function formatChain(root, segments) {
  return [root, ...segments.map((segment) => segment ?? "[computed]")].join(".")
}

function normalizeTargetObject(node) {
  const chain = getMemberChain(node)

  if (!chain) return null

  let root = chain.root
  let segments = chain.segments

  while (
    GLOBAL_ROOTS.has(root) &&
    segments.length > 0 &&
    segments[0] &&
    GLOBAL_ROOTS.has(segments[0])
  ) {
    root = segments[0]
    segments = segments.slice(1)
  }

  if (GLOBAL_ROOTS.has(root) && segments.length > 0 && segments[0]) {
    const first = segments[0]

    if (
      first === "document" ||
      first === "navigator" ||
      isGlobalPrototypeConstructor(first)
    ) {
      root = first
      segments = segments.slice(1)
    }
  }

  return {
    display: formatChain(chain.root, chain.segments),
    rawRoot: chain.root,
    rawSegments: chain.segments,
    root,
    segments,
  }
}

function isAllowedDocumentMutation(segments, propName, isDelete) {
  if (segments.length === 0)
    return (
      !isDelete &&
      Boolean(propName && ALLOWED_DOCUMENT_ASSIGNMENTS.has(propName))
    )

  const elementName = segments[0]

  if (!elementName || !ALLOWED_DOCUMENT_ELEMENTS.has(elementName)) return false

  const elementProp = segments[1] ?? propName

  return Boolean(
    elementProp && ALLOWED_DOCUMENT_ELEMENT_PROPERTIES.has(elementProp),
  )
}

function resolveMutationTarget(memberNode, isDelete) {
  const unwrapped = unwrapExpression(memberNode)

  if (!unwrapped || unwrapped.type !== "MemberExpression") return null

  const targetObj = normalizeTargetObject(unwrapped.object)

  if (!targetObj) return null

  const propName = getPropertyName(unwrapped)
  const display = formatChain(targetObj.rawRoot, [
    ...targetObj.rawSegments,
    propName,
  ])

  if (GLOBAL_OBJECTS.has(targetObj.root)) return display

  if (targetObj.root === "document")
    return isAllowedDocumentMutation(targetObj.segments, propName, isDelete)
      ? null
      : display

  if (isGlobalPrototypeConstructor(targetObj.root)) return display

  return null
}

function resolveCallMutationTarget(node) {
  const targetObj = normalizeTargetObject(node)

  if (!targetObj) return null

  if (
    GLOBAL_OBJECTS.has(targetObj.root) ||
    targetObj.root === "document" ||
    isGlobalPrototypeConstructor(targetObj.root)
  )
    return targetObj.display

  return null
}

export default {
  meta: {
    name: "vitest-isolation",
  },
  rules: {
    "no-direct-global-mutation": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Disallow direct mutation of global objects (window, globalThis, global, self, navigator, document, and global prototypes) in non-isolated tests.",
        },
        messages: {
          noDefineProperty:
            "Do not use `{{object}}.{{method}}` on '{{target}}' in non-isolated tests. Use `vi.stubGlobal()` or `vi.spyOn()` instead.",
          noDirectAssignment:
            "Do not mutate '{{target}}' directly in non-isolated tests. Use `vi.stubGlobal()` or `vi.spyOn()` instead.",
          noDirectDelete:
            "Do not delete properties from '{{target}}' directly in non-isolated tests. Use `vi.stubGlobal()` or `vi.spyOn()` instead.",
        },
        schema: [],
      },
      create(context) {
        return {
          AssignmentExpression(node) {
            const target = resolveMutationTarget(node.left, false)

            if (target)
              context.report({
                node,
                messageId: "noDirectAssignment",
                data: { target },
              })
          },

          CallExpression(node) {
            const callee = unwrapExpression(node.callee)

            if (!callee || callee.type !== "MemberExpression") return

            const calleeObj = normalizeTargetObject(callee.object)
            const methodName = getPropertyName(callee)

            if (!calleeObj || !methodName || calleeObj.segments.length !== 0)
              return

            const isObjectMethod =
              calleeObj.root === "Object" &&
              OBJECT_MUTATION_METHODS.has(methodName)
            const isReflectMethod =
              calleeObj.root === "Reflect" &&
              REFLECT_MUTATION_METHODS.has(methodName)

            if (!isObjectMethod && !isReflectMethod) return

            const target = resolveCallMutationTarget(node.arguments[0])

            if (target)
              context.report({
                node,
                messageId: "noDefineProperty",
                data: {
                  method: methodName,
                  object: calleeObj.root,
                  target,
                },
              })
          },

          UnaryExpression(node) {
            if (node.operator !== "delete") return

            const target = resolveMutationTarget(node.argument, true)

            if (target)
              context.report({
                node,
                messageId: "noDirectDelete",
                data: { target },
              })
          },
        }
      },
    },

    "no-module-mock": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Disallow `vi.mock()`, `vi.doMock()`, `vi.unmock()`, `vi.doUnmock()`, `vi.resetModules()`, and `vi.hoisted()` in non-isolated tests.",
        },
        messages: {
          noModuleMock:
            "`vi.{{method}}()` is not allowed in `isolate: false` tests because module cache is shared across test files. Use `vi.spyOn()` / `vi.stubGlobal()`, or add this test file to `isolatedJsdomTests` in `vitest.config.ts` and `createVitestIsolationConfig()` in `oxlint.config.ts`.",
        },
        schema: [],
      },
      create(context) {
        return {
          CallExpression(node) {
            const callee = unwrapExpression(node.callee)

            if (!callee || callee.type !== "MemberExpression") return

            const calleeObj = normalizeTargetObject(callee.object)
            const methodName = getPropertyName(callee)

            if (
              calleeObj &&
              calleeObj.segments.length === 0 &&
              (calleeObj.root === "vi" || calleeObj.root === "vitest") &&
              methodName &&
              DISALLOWED_VI_METHODS.has(methodName)
            )
              context.report({
                node,
                messageId: "noModuleMock",
                data: { method: methodName },
              })
          },
        }
      },
    },
  },
}
