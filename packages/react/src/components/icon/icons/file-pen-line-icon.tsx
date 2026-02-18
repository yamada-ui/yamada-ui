"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FilePenLine as OriginalFilePenLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilePenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilePenLineIcon = component(Icon)({
  as: OriginalFilePenLineIcon,
}) as Component<"svg", IconProps>
