"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Box as OriginalBoxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoxIcon = component(Icon)({ as: OriginalBoxIcon }) as Component<
  "svg",
  IconProps
>
