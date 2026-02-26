"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileCog as OriginalFileCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileCogIcon = component(Icon)({
  as: OriginalFileCogIcon,
}) as Component<"svg", IconProps>
