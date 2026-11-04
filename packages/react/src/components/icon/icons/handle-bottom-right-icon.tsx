"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandleBottomRight as OriginalHandleBottomRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandleBottomRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandleBottomRightIcon = component(Icon)({
  as: OriginalHandleBottomRightIcon,
}) as Component<"svg", IconProps>
