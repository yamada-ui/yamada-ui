"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Virus as OriginalVirusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VirusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VirusIcon = component(Icon)({
  as: OriginalVirusIcon,
}) as Component<"svg", IconProps>
