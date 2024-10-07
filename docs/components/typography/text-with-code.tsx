import type { TextProps } from "@yamada-ui/react"
import type { FC } from "react"
import { Text } from "@yamada-ui/react"
import { NextLink } from "components/navigation"
import { Fragment, memo } from "react"

export interface TextWithCodeOrLinkProps extends TextProps {}

export const TextWithCodeOrLink: FC<TextWithCodeOrLinkProps> = memo(
  ({ children, ...rest }) => {
    if (typeof children === "string") {
      return (
        <Text {...rest}>
          {children.split(/(\[.*?\]\(.*?\))/).map((value, index) => {
            if (index % 2 === 1) {
              const [, nestedValue, href] =
                value.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/) ?? []

              return (
                <NextLink
                  key={index}
                  href={href}
                  apply="mdx.a"
                  isExternal
                  onClick={(ev) => {
                    ev.stopPropagation()
                  }}
                >
                  <TextWithCode isFragment>{nestedValue}</TextWithCode>
                </NextLink>
              )
            } else {
              return (
                <TextWithCode key={index} isFragment>
                  {value}
                </TextWithCode>
              )
            }
          })}
        </Text>
      )
    } else {
      return <Text {...rest}>{children}</Text>
    }
  },
)

TextWithCodeOrLink.displayName = "TextWithCodeOrLink"

export interface TextWithCodeProps extends TextProps {
  isFragment?: boolean
}

export const TextWithCode: FC<TextWithCodeProps> = memo(
  ({ children, isFragment, ...rest }) => {
    const Element = isFragment ? Fragment : Text

    if (typeof children === "string") {
      return (
        <Element {...rest}>
          {children.split(/`([^`]+)`/).map((value, index) => {
            if (index % 2 === 1) {
              return (
                <Text key={index} as="code" apply="mdx.code">
                  {value}
                </Text>
              )
            } else {
              return value
            }
          })}
        </Element>
      )
    } else {
      return <Element {...rest}>{children}</Element>
    }
  },
)

TextWithCode.displayName = "TextWithCode"
