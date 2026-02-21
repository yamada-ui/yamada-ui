"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AtSign as OriginalAtSignIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AtSignIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AtSignIcon = component(Icon)({
  as: OriginalAtSignIcon,
}) as Component<"svg", IconProps>
