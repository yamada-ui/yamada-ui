"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Diff as OriginalDiffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DiffIcon = component(Icon)({ as: OriginalDiffIcon }) as Component<
  "svg",
  IconProps
>
