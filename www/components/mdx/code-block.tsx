import type { BoxProps, GridProps } from "@yamada-ui/react"
import type { ComponentType } from "react"
import type { Transform } from "sucrase"
import { burger } from "@lucide/lab"
import { Box, Grid, isFunction, Text } from "@yamada-ui/react"
import * as Components from "@yamada-ui/react"
import React, { isValidElement } from "react"
import { transform as originalTransform } from "sucrase"
import { codeToHtml } from "@/libs/shiki"
import { CodePreview } from "../code-preview"
import { JsxCodePanel, JsxPreview, JsxPreviewPanel } from "./jsx-preview"

const components = {
  burger,
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

interface GetComponentOptions {
  lang: string
  functional?: boolean
}

function getComponent(code: string, { lang, functional }: GetComponentOptions) {
  try {
    if (functional && !code.startsWith("function"))
      code = `function Demo() { ${code} }`

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
}

export interface CodeBlockProps extends Omit<GridProps, "children"> {
  lang?: string
  children?: string
  code?: string
  functional?: boolean
  preview?: boolean
  title?: string
}

export function CodeBlock({
  lang = "ts",
  code,
  children = code,
  functional = false,
  preview = false,
  title,
  ...rest
}: CodeBlockProps) {
  if (!children) return null

  if (preview) {
    const component = getComponent(children, { lang, functional })

    return (
      <JsxPreview>
        <JsxPreviewPanel>{component}</JsxPreviewPanel>
        <JsxCodePanel>
          <Pre lang={lang} m="0">
            {children}
          </Pre>
        </JsxCodePanel>
      </JsxPreview>
    )
  } else if (title) {
    return (
      <Grid my="lg" {...rest}>
        <Box
          bg="bg.panel"
          borderBottomWidth="1px"
          borderColor="border.subtle"
          color="fg.emphasized"
          p="2"
          px="4"
          py="3"
          roundedTop="l2"
        >
          <Text fontFamily="mono" fontSize="sm">
            {title}
          </Text>
        </Box>

        <Pre lang={lang} m="0" roundedTop="0">
          {children}
        </Pre>
      </Grid>
    )
  } else {
    return <Pre lang={lang}>{children}</Pre>
  }
}

export interface PreProps extends Omit<BoxProps, "children"> {
  lang: string
  children?: string
  code?: string
}

export async function Pre({ lang, code, children = code, ...rest }: PreProps) {
  if (!children) return null

  const html = await codeToHtml(children, { lang })

  return (
    <CodePreview html={html} {...rest}>
      {children}
    </CodePreview>
  )
}
