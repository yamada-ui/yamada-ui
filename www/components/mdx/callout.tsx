import type { ColorScheme } from "@yamada-ui/react"
import type { ElementType, PropsWithChildren } from "react"
import {
  Alert,
  CircleCheckBigIcon,
  InfoIcon,
  LightbulbIcon,
  MessageCircleWarningIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
} from "@yamada-ui/react"
import { isValidElement } from "react"

const ICON_MAP: { [key: string]: ElementType } = {
  caution: OctagonAlertIcon,
  error: OctagonAlertIcon,
  important: MessageCircleWarningIcon,
  info: InfoIcon,
  note: InfoIcon,
  success: CircleCheckBigIcon,
  tip: LightbulbIcon,
  warning: TriangleAlertIcon,
}

const COLOR_SCHEME_MAP: { [key: string]: ColorScheme } = {
  caution: "red",
  error: "red",
  important: "purple",
  info: "blue",
  note: "blue",
  success: "green",
  tip: "green",
  warning: "orange",
}

export interface CalloutProps extends PropsWithChildren {
  "data-type": string
}

export function Callout({
  "data-type": type,
  children,
  ...rest
}: CalloutProps) {
  const colorScheme = COLOR_SCHEME_MAP[type]

  return (
    <Alert.Root colorScheme={colorScheme} my="lg" {...rest}>
      <Alert.Icon as={ICON_MAP[type]} />
      <Alert.Description
        colorScheme="mono"
        color="fg"
        fontSize="sm"
        lineHeight="1.8"
      >
        {isValidElement<PropsWithChildren>(children)
          ? children.props.children
          : children}
      </Alert.Description>
    </Alert.Root>
  )
}
