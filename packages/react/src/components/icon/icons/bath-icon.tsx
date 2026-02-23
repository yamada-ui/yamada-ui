"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bath as OriginalBathIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BathIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BathIcon = component(Icon)({ as: OriginalBathIcon }) as Component<
  "svg",
  IconProps
>
