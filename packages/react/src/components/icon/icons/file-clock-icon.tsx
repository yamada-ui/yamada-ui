"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileClock as OriginalFileClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileClockIcon = component(Icon)({
  as: OriginalFileClockIcon,
}) as Component<"svg", IconProps>
