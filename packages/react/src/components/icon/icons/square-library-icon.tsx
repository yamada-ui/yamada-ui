"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareLibrary as OriginalSquareLibraryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareLibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareLibraryIcon = component(Icon)({
  as: OriginalSquareLibraryIcon,
}) as Component<"svg", IconProps>
