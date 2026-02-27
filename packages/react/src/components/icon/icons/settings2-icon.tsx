"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Settings2 as OriginalSettings2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Settings2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Settings2Icon = component(Icon)({
  as: OriginalSettings2Icon,
}) as Component<"svg", IconProps>
