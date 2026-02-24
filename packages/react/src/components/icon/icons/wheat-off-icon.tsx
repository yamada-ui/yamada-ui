"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WheatOff as OriginalWheatOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WheatOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WheatOffIcon = component(Icon)({
  as: OriginalWheatOffIcon,
}) as Component<"svg", IconProps>
