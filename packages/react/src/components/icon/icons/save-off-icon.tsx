"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SaveOff as OriginalSaveOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaveOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaveOffIcon = component(Icon)({
  as: OriginalSaveOffIcon,
}) as Component<"svg", IconProps>
