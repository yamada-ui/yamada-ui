"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LibraryBig as OriginalLibraryBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LibraryBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LibraryBigIcon = component(Icon)({
  as: OriginalLibraryBigIcon,
}) as Component<"svg", IconProps>
