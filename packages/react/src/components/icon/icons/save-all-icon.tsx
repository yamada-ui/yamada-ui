"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SaveAll as OriginalSaveAllIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaveAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaveAllIcon = component(Icon)({
  as: OriginalSaveAllIcon,
}) as Component<"svg", IconProps>
