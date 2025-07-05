import type { ComponentType, ReactNode } from "react"
import type { Transform } from "sucrase"
import type { CodePreviewTabsProps } from "./code-preview-tabs"
import { isArray, isFunction, isString, Text } from "@yamada-ui/react"
import * as Components from "@yamada-ui/react"
import React, { isValidElement, useMemo } from "react"
import { transform as originalTransform } from "sucrase"
import { CodePanel, CodePreviewTabs, PreviewPanel } from "./code-preview-tabs"

const components = {
  React,
  ...React,
  ...Components,
}

function trim(code: string) {
  return code.trim().replace(/;$/, "")
}

function pipe<T>(...functions: ((...args: T[]) => T)[]) {
  return functions.reduce(function (acc, cb) {
    return function (...args: T[]) {
      return acc(cb(...args))
    }
  })
}

function transform(...transforms: (Transform | undefined)[]) {
  return function (code: string) {
    return originalTransform(code, {
      transforms: transforms.filter(Boolean) as Transform[],
    }).code
  }
}

function evalCode(
  code: string,
  args: { [key: string]: unknown },
): ComponentType {
  return new Function(...Object.keys(args), code)(...Object.values(args))
}

export interface CodePreviewProps extends CodePreviewTabsProps {
  lang: string
  functional?: boolean
}

export function CodePreview({
  lang,
  children,
  functional,
  ...rest
}: CodePreviewProps) {
  const [code, pre] = useMemo(() => {
    let [code, pre] = isArray(children) ? children : [null, null]

    if (isString(code) && functional) {
      if (!code.startsWith("function")) {
        code = `function Demo() { ${code} }`
      }
    }

    return [code, pre]
  }, [children, functional])

  const component = useMemo<ReactNode>(() => {
    try {
      if (!isString(code)) return null

      const ts = ["ts", "tsx"].includes(lang)
      const transformedCode = pipe<string>(
        function (code) {
          return 'const _jsxFileName = "";' + code
        },
        transform("imports"),
        function (code: string) {
          return code.replace('const _jsxFileName = "";', "").trim()
        },
        trim,
        transform("jsx", ts ? "typescript" : undefined),
        (code: string) => `return (${code})`,
        trim,
      )(code)

      const Component = evalCode(transformedCode, components)

      if (isFunction(Component)) {
        return <Component />
      } else if (isValidElement(Component)) {
        return Component
      } else {
        return null
      }
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        if (e instanceof Error) {
          return <Text color="error">{e.toString()}</Text>
        } else {
          return null
        }
      } else {
        throw e
      }
    }
  }, [code, lang])

  return (
    <CodePreviewTabs {...rest}>
      <PreviewPanel data-lang={lang}>{component}</PreviewPanel>
      <CodePanel lang={lang}>{pre}</CodePanel>
    </CodePreviewTabs>
  )
}
