"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clock2 as OriginalClock2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Clock2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Clock2Icon = component(Icon)({
  as: OriginalClock2Icon,
}) as Component<"svg", IconProps>
