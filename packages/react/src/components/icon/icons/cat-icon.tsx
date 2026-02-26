"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cat as OriginalCatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CatIcon = component(Icon)({ as: OriginalCatIcon }) as Component<
  "svg",
  IconProps
>
