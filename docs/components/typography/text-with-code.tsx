import { Text, TextProps, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'

export type TextWithCodeProps = TextProps

export const TextWithCode = memo(
  forwardRef<TextWithCodeProps, 'p'>(({ children, ...rest }, ref) => {
    if (typeof children === 'string') {
      return (
        <Text ref={ref} {...rest}>
          {children.split(/`([^`]+)`/).map((value, index) =>
            index % 2 === 1 ? (
              <Text key={index} as='code' apply='mdx.code'>
                {value}
              </Text>
            ) : (
              value
            ),
          )}
        </Text>
      )
    } else {
      return (
        <Text ref={ref} {...rest}>
          {children}
        </Text>
      )
    }
  }),
)
