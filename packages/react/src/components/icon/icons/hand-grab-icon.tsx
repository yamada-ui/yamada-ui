"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandGrab as OriginalHandGrabIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandGrabIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandGrabIcon = component(Icon)({
  as: OriginalHandGrabIcon,
}) as Component<"svg", IconProps>
