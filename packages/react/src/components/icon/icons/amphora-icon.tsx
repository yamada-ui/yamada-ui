"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Amphora as OriginalAmphoraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AmphoraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AmphoraIcon = component(Icon)({
  as: OriginalAmphoraIcon,
}) as Component<"svg", IconProps>
