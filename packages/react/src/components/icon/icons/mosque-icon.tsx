"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mosque as OriginalMosqueIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MosqueIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MosqueIcon = component(Icon)({
  as: OriginalMosqueIcon,
}) as Component<"svg", IconProps>
