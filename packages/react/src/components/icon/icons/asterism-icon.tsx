"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Asterism as OriginalAsterismIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AsterismIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AsterismIcon = component(Icon)({
  as: OriginalAsterismIcon,
}) as Component<"svg", IconProps>
