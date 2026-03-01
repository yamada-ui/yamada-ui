"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileSignal as OriginalFileSignalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileSignalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileSignalIcon = component(Icon)({
  as: OriginalFileSignalIcon,
}) as Component<"svg", IconProps>
