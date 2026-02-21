"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SignpostBig as OriginalSignpostBigIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignpostBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignpostBigIcon = component(Icon)({
  as: OriginalSignpostBigIcon,
}) as Component<"svg", IconProps>
