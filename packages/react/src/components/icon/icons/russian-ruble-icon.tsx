"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RussianRuble as OriginalRussianRubleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RussianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RussianRubleIcon = component(Icon)({
  as: OriginalRussianRubleIcon,
}) as Component<"svg", IconProps>
