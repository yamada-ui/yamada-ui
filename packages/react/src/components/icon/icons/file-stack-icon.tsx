"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileStack as OriginalFileStackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileStackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileStackIcon = component(Icon)({
  as: OriginalFileStackIcon,
}) as Component<"svg", IconProps>
