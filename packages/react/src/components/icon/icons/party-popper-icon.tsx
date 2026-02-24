"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PartyPopper as OriginalPartyPopperIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PartyPopperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PartyPopperIcon = component(Icon)({
  as: OriginalPartyPopperIcon,
}) as Component<"svg", IconProps>
