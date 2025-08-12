import type { ComponentType } from "react"
import type { Transform } from "sucrase"
import { burger } from "@lucide/lab"
import * as Components from "@yamada-ui/react"
import { isFunction, Text } from "@yamada-ui/react"
import React, { isValidElement } from "react"
import { transform as originalTransform } from "sucrase"

const components = {
  burger,
  React,
  ...React,
  ...Components,
}

function trim(code: string) {
  return code.trim().replace(/;$/, "")
}

function pipe<Y>(...functions: ((...args: Y[]) => Y)[]) {
  return functions.reduce(function (acc, cb) {
    return function (...args: Y[]) {
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

export function getComponent(
  code: string,
  { lang, functional }: GetComponentOptions,
) {
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
