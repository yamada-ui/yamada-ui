"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CupSoda as OriginalCupSodaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CupSodaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CupSodaIcon = component(Icon)({
  as: OriginalCupSodaIcon,
}) as Component<"svg", IconProps>
