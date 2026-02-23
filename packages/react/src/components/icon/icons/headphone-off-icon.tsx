"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeadphoneOff as OriginalHeadphoneOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeadphoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeadphoneOffIcon = component(Icon)({
  as: OriginalHeadphoneOffIcon,
}) as Component<"svg", IconProps>
