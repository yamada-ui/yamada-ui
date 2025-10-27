import type { PropsWithChildren } from "react"
import { Center, Timeline } from "@yamada-ui/react"
import { Children, isValidElement, useMemo } from "react"

export interface StepsProps extends Timeline.RootProps {}

export function Steps({ children, ...rest }: StepsProps) {
  const items = useMemo<Timeline.Item[]>(
    () =>
      Children.map(children, (child, index) => ({
        content: isValidElement<PropsWithChildren>(child)
          ? child.props.children
          : child,
        indicator: (
          <Center
            layerStyle="solid"
            boxSize="full"
            fontSize="md"
            fontWeight="normal"
          >
            {index + 1}
          </Center>
        ),
        contentProps: {
          css: {
            "& > :is(h3, h4, h5, h6):first-of-type": {
              lineHeight: "{indicator-size}",
              mt: "0",
            },
            display: "block",
            _lastChild: { mb: "0" },
          },
        },
      })) as Timeline.Item[],
    [children],
  )

  return (
    <Timeline.Root size="lg" items={items} my="lg" shape="rounded" {...rest} />
  )
}
