"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileUser as OriginalFileUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileUserIcon = component(Icon)({
  as: OriginalFileUserIcon,
}) as Component<"svg", IconProps>
