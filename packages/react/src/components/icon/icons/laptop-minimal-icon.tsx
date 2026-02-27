"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LaptopMinimal as OriginalLaptopMinimalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LaptopMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LaptopMinimalIcon = component(Icon)({
  as: OriginalLaptopMinimalIcon,
}) as Component<"svg", IconProps>
