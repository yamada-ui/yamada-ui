"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RadioTower as OriginalRadioTowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadioTowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadioTowerIcon = component(Icon)({
  as: OriginalRadioTowerIcon,
}) as Component<"svg", IconProps>
