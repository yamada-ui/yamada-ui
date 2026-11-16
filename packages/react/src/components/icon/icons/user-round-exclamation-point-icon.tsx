"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundExclamationPoint as OriginalUserRoundExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundExclamationPointIcon = component(Icon)({
  as: OriginalUserRoundExclamationPointIcon,
}) as Component<"svg", IconProps>
