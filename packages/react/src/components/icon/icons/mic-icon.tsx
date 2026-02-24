"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mic as OriginalMicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicIcon = component(Icon)({ as: OriginalMicIcon }) as Component<
  "svg",
  IconProps
>
