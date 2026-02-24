"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cookie as OriginalCookieIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CookieIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CookieIcon = component(Icon)({
  as: OriginalCookieIcon,
}) as Component<"svg", IconProps>
