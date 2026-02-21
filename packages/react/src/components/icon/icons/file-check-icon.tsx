"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileCheck as OriginalFileCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileCheckIcon = component(Icon)({
  as: OriginalFileCheckIcon,
}) as Component<"svg", IconProps>
