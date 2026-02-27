"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Share2 as OriginalShare2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Share2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Share2Icon = component(Icon)({
  as: OriginalShare2Icon,
}) as Component<"svg", IconProps>
