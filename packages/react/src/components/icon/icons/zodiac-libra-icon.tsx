"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacLibra as OriginalZodiacLibraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacLibraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacLibraIcon = component(Icon)({
  as: OriginalZodiacLibraIcon,
}) as Component<"svg", IconProps>
