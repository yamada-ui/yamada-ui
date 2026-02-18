"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Headphones as OriginalHeadphonesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeadphonesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeadphonesIcon = component(Icon)({
  as: OriginalHeadphonesIcon,
}) as Component<"svg", IconProps>
