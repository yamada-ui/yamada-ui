"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Plug2 as OriginalPlug2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Plug2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Plug2Icon = component(Icon)({
  as: OriginalPlug2Icon,
}) as Component<"svg", IconProps>
