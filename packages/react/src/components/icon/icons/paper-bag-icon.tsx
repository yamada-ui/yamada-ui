"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PaperBag as OriginalPaperBagIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PaperBagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PaperBagIcon = component(Icon)({
  as: OriginalPaperBagIcon,
}) as Component<"svg", IconProps>
