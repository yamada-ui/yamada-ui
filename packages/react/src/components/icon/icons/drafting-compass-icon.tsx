"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DraftingCompass as OriginalDraftingCompassIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DraftingCompassIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DraftingCompassIcon = component(Icon)({
  as: OriginalDraftingCompassIcon,
}) as Component<"svg", IconProps>
