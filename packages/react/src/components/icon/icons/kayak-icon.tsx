"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Kayak as OriginalKayakIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KayakIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KayakIcon = component(Icon)({
  as: OriginalKayakIcon,
}) as Component<"svg", IconProps>
