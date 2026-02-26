"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartPlus as OriginalHeartPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartPlusIcon = component(Icon)({
  as: OriginalHeartPlusIcon,
}) as Component<"svg", IconProps>
