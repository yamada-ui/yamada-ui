"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Orbit as OriginalOrbitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OrbitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OrbitIcon = component(Icon)({
  as: OriginalOrbitIcon,
}) as Component<"svg", IconProps>
