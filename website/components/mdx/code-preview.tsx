import type { ComponentType, ReactNode } from "react"
import type { Transform } from "sucrase"
import type { CodePreviewTabsProps } from "./code-preview-tabs"
import { Box, isFunction, isString } from "@yamada-ui/react"
import * as Components from "@yamada-ui/react"
import React, { isValidElement, useMemo } from "react"
import { transform as originalTransform } from "sucrase"
import { CodePanel, CodePreviewTabs, PreviewPanel } from "./code-preview-tabs"
import { Pre } from "./pre"

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
}

export function CodePreview({ lang, children, ...rest }: CodePreviewProps) {
  const component = useMemo<ReactNode>(() => {
    try {
      if (!isString(children)) return null

      const ts = ["ts", "tsx"].includes(lang)
      const code = pipe<string>(
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
      )(children)

      const Component = evalCode(code, { React, ...Components })

      if (isFunction(Component)) {
        return <Component />
      } else if (isValidElement(Component)) {
        return Component
      } else {
        return null
      }
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.error(e)
      } else {
        throw e
      }

      return null
    }
  }, [children, lang])

  return (
    <CodePreviewTabs {...rest}>
      <PreviewPanel data-lang={lang}>
        <Box
          borderColor="border.subtle"
          borderWidth="1px"
          p={{ base: "lg", md: "md" }}
          rounded="l2"
        >
          {component}
        </Box>
      </PreviewPanel>
      <CodePanel lang={lang}>
        <Pre lang={lang} m="0">
          {children}
        </Pre>
      </CodePanel>
    </CodePreviewTabs>
  )
}
