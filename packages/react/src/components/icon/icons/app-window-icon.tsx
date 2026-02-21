"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AppWindow as OriginalAppWindowIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AppWindowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AppWindowIcon = component(Icon)({
  as: OriginalAppWindowIcon,
}) as Component<"svg", IconProps>
