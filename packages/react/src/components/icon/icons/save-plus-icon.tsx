"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SavePlus as OriginalSavePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SavePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SavePlusIcon = component(Icon)({
  as: OriginalSavePlusIcon,
}) as Component<"svg", IconProps>
