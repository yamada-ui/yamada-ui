"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Volleyball as OriginalVolleyballIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VolleyballIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VolleyballIcon = component(Icon)({
  as: OriginalVolleyballIcon,
}) as Component<"svg", IconProps>
