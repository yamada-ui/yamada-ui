"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lamp as OriginalLampIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampIcon = component(Icon)({ as: OriginalLampIcon }) as Component<
  "svg",
  IconProps
>
