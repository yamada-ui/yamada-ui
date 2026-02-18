"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Helicopter as OriginalHelicopterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HelicopterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HelicopterIcon = component(Icon)({
  as: OriginalHelicopterIcon,
}) as Component<"svg", IconProps>
