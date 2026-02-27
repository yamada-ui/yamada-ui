"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileDiff as OriginalFileDiffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileDiffIcon = component(Icon)({
  as: OriginalFileDiffIcon,
}) as Component<"svg", IconProps>
