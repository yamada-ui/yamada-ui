"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Linkedin as OriginalLinkedinIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LinkedinIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LinkedinIcon = component(Icon)({
  as: OriginalLinkedinIcon,
}) as Component<"svg", IconProps>
