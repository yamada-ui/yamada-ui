"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Panda as OriginalPandaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PandaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PandaIcon = component(Icon)({
  as: OriginalPandaIcon,
}) as Component<"svg", IconProps>
