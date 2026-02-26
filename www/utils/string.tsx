import type { ReactNode } from "react"
import { Code } from "@yamada-ui/react"
import { Fragment } from "react"
import { NextLink } from "@/components"
import { langConditions } from "./i18n"

interface FC<Y extends object = {}> {
  (props: Y & { children: ReactNode; key?: number | string }): ReactNode
}

function transformCode(
  text: string,
  code: FC = (props) => <Code {...props} />,
): ReactNode {
  return text
    .replace(/```([^`]+)```/g, "")
    .replace(/\*\*([^`]+)\*\*/g, "$1")
    .split(/`([^`]+)`/)
    .map((children, index) => {
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
    a = ({ key, ...rest }) => (
      <NextLink key={key} variant="underline" {...rest} />
    ),
    code = ({ key, ...rest }) => (
      <Code
        key={key}
        css={{
          [langConditions.ja]: {
            mx: "1",
            verticalAlign: "top",
          },
        }}
        variant="surface"
        verticalAlign="middle"
        {...rest}
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
      return <Fragment key={index}>{transformCode(chunk, code)}</Fragment>
    }
  })
}

export function mdToText(md = "") {
  return md.replace(/`([^`]+)`/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
}
