"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SaudiRiyal as OriginalSaudiRiyalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaudiRiyalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaudiRiyalIcon = component(Icon)({
  as: OriginalSaudiRiyalIcon,
}) as Component<"svg", IconProps>
