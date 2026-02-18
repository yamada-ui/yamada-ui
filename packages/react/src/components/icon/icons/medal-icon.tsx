"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Medal as OriginalMedalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MedalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MedalIcon = component(Icon)({
  as: OriginalMedalIcon,
}) as Component<"svg", IconProps>
