"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Headset as OriginalHeadsetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeadsetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeadsetIcon = component(Icon)({
  as: OriginalHeadsetIcon,
}) as Component<"svg", IconProps>
