"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { StickyNotePlus as OriginalStickyNotePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StickyNotePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StickyNotePlusIcon = component(Icon)({
  as: OriginalStickyNotePlusIcon,
}) as Component<"svg", IconProps>
