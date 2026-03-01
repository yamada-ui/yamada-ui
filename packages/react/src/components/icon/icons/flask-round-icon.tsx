"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlaskRound as OriginalFlaskRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlaskRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlaskRoundIcon = component(Icon)({
  as: OriginalFlaskRoundIcon,
}) as Component<"svg", IconProps>
