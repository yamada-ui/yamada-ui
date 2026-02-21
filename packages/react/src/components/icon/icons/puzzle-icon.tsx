"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Puzzle as OriginalPuzzleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PuzzleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PuzzleIcon = component(Icon)({
  as: OriginalPuzzleIcon,
}) as Component<"svg", IconProps>
