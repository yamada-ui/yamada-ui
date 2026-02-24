"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PersonStanding as OriginalPersonStandingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PersonStandingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PersonStandingIcon = component(Icon)({
  as: OriginalPersonStandingIcon,
}) as Component<"svg", IconProps>
