"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pen as OriginalPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PenIcon = component(Icon)({ as: OriginalPenIcon }) as Component<
  "svg",
  IconProps
>
