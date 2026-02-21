"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Italic as OriginalItalicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ItalicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ItalicIcon = component(Icon)({
  as: OriginalItalicIcon,
}) as Component<"svg", IconProps>
