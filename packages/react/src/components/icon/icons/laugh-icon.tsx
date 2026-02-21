"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Laugh as OriginalLaughIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LaughIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LaughIcon = component(Icon)({
  as: OriginalLaughIcon,
}) as Component<"svg", IconProps>
