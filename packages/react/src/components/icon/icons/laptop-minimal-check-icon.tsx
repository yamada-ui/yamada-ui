"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LaptopMinimalCheck as OriginalLaptopMinimalCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LaptopMinimalCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LaptopMinimalCheckIcon = component(Icon)({
  as: OriginalLaptopMinimalCheckIcon,
}) as Component<"svg", IconProps>
