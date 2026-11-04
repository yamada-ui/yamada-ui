"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BelarusianRuble as OriginalBelarusianRubleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BelarusianRubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BelarusianRubleIcon = component(Icon)({
  as: OriginalBelarusianRubleIcon,
}) as Component<"svg", IconProps>
