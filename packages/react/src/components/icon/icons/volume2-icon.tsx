"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Volume2 as OriginalVolume2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Volume2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Volume2Icon = component(Icon)({
  as: OriginalVolume2Icon,
}) as Component<"svg", IconProps>
