"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BoxesLinked as OriginalBoxesLinkedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoxesLinkedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoxesLinkedIcon = component(Icon)({
  as: OriginalBoxesLinkedIcon,
}) as Component<"svg", IconProps>
