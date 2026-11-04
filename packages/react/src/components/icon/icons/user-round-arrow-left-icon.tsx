"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundArrowLeft as OriginalUserRoundArrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundArrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundArrowLeftIcon = component(Icon)({
  as: OriginalUserRoundArrowLeftIcon,
}) as Component<"svg", IconProps>
