"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VirusOff as OriginalVirusOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VirusOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VirusOffIcon = component(Icon)({
  as: OriginalVirusOffIcon,
}) as Component<"svg", IconProps>
