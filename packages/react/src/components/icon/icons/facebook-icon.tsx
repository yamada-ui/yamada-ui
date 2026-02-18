"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Facebook as OriginalFacebookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FacebookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FacebookIcon = component(Icon)({
  as: OriginalFacebookIcon,
}) as Component<"svg", IconProps>
