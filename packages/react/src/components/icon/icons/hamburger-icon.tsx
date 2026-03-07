"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hamburger as OriginalHamburgerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HamburgerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HamburgerIcon = component(Icon)({
  as: OriginalHamburgerIcon,
}) as Component<"svg", IconProps>
