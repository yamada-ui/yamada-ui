"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileImage as OriginalFileImageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileImageIcon = component(Icon)({
  as: OriginalFileImageIcon,
}) as Component<"svg", IconProps>
