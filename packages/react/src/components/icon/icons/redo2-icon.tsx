"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Redo2 as OriginalRedo2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Redo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Redo2Icon = component(Icon)({
  as: OriginalRedo2Icon,
}) as Component<"svg", IconProps>
