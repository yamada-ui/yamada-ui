"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Axe as OriginalAxeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AxeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AxeIcon = component(Icon)({ as: OriginalAxeIcon }) as Component<
  "svg",
  IconProps
>
