"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MirrorRound as OriginalMirrorRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MirrorRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MirrorRoundIcon = component(Icon)({
  as: OriginalMirrorRoundIcon,
}) as Component<"svg", IconProps>
