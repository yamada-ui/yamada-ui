"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Unlink2 as OriginalUnlink2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Unlink2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Unlink2Icon = component(Icon)({
  as: OriginalUnlink2Icon,
}) as Component<"svg", IconProps>
