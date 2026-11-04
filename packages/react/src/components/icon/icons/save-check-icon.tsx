"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SaveCheck as OriginalSaveCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaveCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaveCheckIcon = component(Icon)({
  as: OriginalSaveCheckIcon,
}) as Component<"svg", IconProps>
