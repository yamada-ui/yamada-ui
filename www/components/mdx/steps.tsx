import { Center, Timeline } from "@yamada-ui/react"
import { Children, isValidElement, useMemo } from "react"

export interface Steps extends Timeline.RootProps {}

export function Steps({ children, ...rest }) {
  const items = useMemo<Timeline.RootProps["items"]>(
    () =>
      Children.map(children, (child, index) => ({
        content: isValidElement(child) ? child.props.children : child,
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
            display: "block",
            _firstChild: { lineHeight: "{indicator-size}", mt: "0" },
            _lastChild: { mb: "0" },
          },
        },
      })),
    [children],
  )

  return (
    <Timeline.Root size="lg" items={items} my="lg" shape="rounded" {...rest} />
  )
}
