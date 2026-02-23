"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Repeat2 as OriginalRepeat2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Repeat2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Repeat2Icon = component(Icon)({
  as: OriginalRepeat2Icon,
}) as Component<"svg", IconProps>
