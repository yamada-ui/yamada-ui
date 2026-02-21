"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundSearch as OriginalUserRoundSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundSearchIcon = component(Icon)({
  as: OriginalUserRoundSearchIcon,
}) as Component<"svg", IconProps>
