"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileDatabase as OriginalFileDatabaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileDatabaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileDatabaseIcon = component(Icon)({
  as: OriginalFileDatabaseIcon,
}) as Component<"svg", IconProps>
