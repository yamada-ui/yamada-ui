"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PawPrint as OriginalPawPrintIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PawPrintIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PawPrintIcon = component(Icon)({
  as: OriginalPawPrintIcon,
}) as Component<"svg", IconProps>
