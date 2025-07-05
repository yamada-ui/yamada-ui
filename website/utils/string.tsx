import type { ReactNode } from "react"
import { Code } from "@yamada-ui/react"
import { NextLink } from "@/components"
import { langConditions } from "./i18n"

interface FC<T extends object = {}> {
  (props: T & { children: ReactNode; key?: number | string }): ReactNode
}

function transformCode(
  text: string,
  code: FC = (props) => <Code {...props} />,
): ReactNode {
  return text.split(/`([^`]+)`/).map((children, index) => {
    if (index % 2 === 1) {
      return code({ key: index, children })
    } else {
      return children
    }
  })
}

export interface TextToHtmlOptions {
  a?: FC<{ href: string }>
  code?: FC
}

export function mdToHtml(
  md = "",
  {
    a = (props) => <NextLink variant="underline" {...props} />,
    code = (props) => (
      <Code
        css={{
          [langConditions.ja]: {
            mx: "1",
            verticalAlign: "top",
          },
        }}
        variant="surface"
        verticalAlign="middle"
        {...props}
      />
    ),
  }: TextToHtmlOptions = {},
): ReactNode {
  return md.split(/(\[.*?\]\(.*?\))/).map((chunk, index) => {
    if (index % 2 === 1) {
      const [, children = "", href = ""] =
        chunk.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/) ?? []

      return a({
        key: index,
        href,
        children: transformCode(children, code),
      })
    } else {
      return transformCode(chunk, code)
    }
  })
}

export function mdToText(md = "") {
  return md.replace(/`([^`]+)`/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
}
