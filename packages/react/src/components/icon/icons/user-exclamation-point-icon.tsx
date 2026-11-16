"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserExclamationPoint as OriginalUserExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserExclamationPointIcon = component(Icon)({
  as: OriginalUserExclamationPointIcon,
}) as Component<"svg", IconProps>
