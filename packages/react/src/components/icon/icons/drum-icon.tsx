"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Drum as OriginalDrumIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DrumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DrumIcon = component(Icon)({ as: OriginalDrumIcon }) as Component<
  "svg",
  IconProps
>
