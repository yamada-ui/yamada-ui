"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacVirgo as OriginalZodiacVirgoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacVirgoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacVirgoIcon = component(Icon)({
  as: OriginalZodiacVirgoIcon,
}) as Component<"svg", IconProps>
