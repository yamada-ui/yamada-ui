"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Import as OriginalImportIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImportIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImportIcon = component(Icon)({
  as: OriginalImportIcon,
}) as Component<"svg", IconProps>
