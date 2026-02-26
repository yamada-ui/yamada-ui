"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hash as OriginalHashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HashIcon = component(Icon)({ as: OriginalHashIcon }) as Component<
  "svg",
  IconProps
>
