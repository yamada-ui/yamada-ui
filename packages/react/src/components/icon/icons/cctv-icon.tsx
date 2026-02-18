"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cctv as OriginalCctvIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CctvIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CctvIcon = component(Icon)({ as: OriginalCctvIcon }) as Component<
  "svg",
  IconProps
>
