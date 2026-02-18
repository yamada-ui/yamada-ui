"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Copyleft as OriginalCopyleftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyleftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyleftIcon = component(Icon)({
  as: OriginalCopyleftIcon,
}) as Component<"svg", IconProps>
