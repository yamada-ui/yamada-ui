"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FilePen as OriginalFilePenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilePenIcon = component(Icon)({
  as: OriginalFilePenIcon,
}) as Component<"svg", IconProps>
