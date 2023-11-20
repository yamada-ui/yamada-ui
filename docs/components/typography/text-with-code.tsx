import { Text, TextProps } from "@yamada-ui/react"
import { FC, Fragment, memo } from "react"
import { NextLink } from "components/navigation"

export type TextWithCodeOrLinkProps = TextProps

export const TextWithCodeOrLink: FC<TextWithCodeOrLinkProps> = memo(({ children, ...rest }) => {
  if (typeof children === "string") {
    return (
      <Text {...rest}>
        {children.split(/(\[.*?\]\(.*?\))/).map((value, index) => {
          if (index % 2 === 1) {
            const [, nestedValue, href] = value.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/)
            return (
              <NextLink
                key={index}
                apply="mdx.a"
                href={href}
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
})

TextWithCodeOrLink.displayName = "TextWithCodeOrLink"

export type TextWithCodeProps = TextProps & { isFragment?: boolean }

export const TextWithCode: FC<TextWithCodeProps> = memo(({ children, isFragment, ...rest }) => {
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
})

TextWithCode.displayName = "TextWithCode"
