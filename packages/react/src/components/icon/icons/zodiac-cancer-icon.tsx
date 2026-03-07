"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacCancer as OriginalZodiacCancerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacCancerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacCancerIcon = component(Icon)({
  as: OriginalZodiacCancerIcon,
}) as Component<"svg", IconProps>
