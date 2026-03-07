"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacCapricorn as OriginalZodiacCapricornIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacCapricornIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacCapricornIcon = component(Icon)({
  as: OriginalZodiacCapricornIcon,
}) as Component<"svg", IconProps>
