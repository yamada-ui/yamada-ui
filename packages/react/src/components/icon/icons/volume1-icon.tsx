"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Volume1 as OriginalVolume1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Volume1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Volume1Icon = component(Icon)({
  as: OriginalVolume1Icon,
}) as Component<"svg", IconProps>
