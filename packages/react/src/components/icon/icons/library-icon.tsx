"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Library as OriginalLibraryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LibraryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LibraryIcon = component(Icon)({
  as: OriginalLibraryIcon,
}) as Component<"svg", IconProps>
