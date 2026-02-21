"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TestTubeDiagonal as OriginalTestTubeDiagonalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TestTubeDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TestTubeDiagonalIcon = component(Icon)({
  as: OriginalTestTubeDiagonalIcon,
}) as Component<"svg", IconProps>
