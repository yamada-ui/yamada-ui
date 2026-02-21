"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wind as OriginalWindIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WindIcon = component(Icon)({ as: OriginalWindIcon }) as Component<
  "svg",
  IconProps
>
