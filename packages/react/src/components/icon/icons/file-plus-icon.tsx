"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FilePlus as OriginalFilePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilePlusIcon = component(Icon)({
  as: OriginalFilePlusIcon,
}) as Component<"svg", IconProps>
