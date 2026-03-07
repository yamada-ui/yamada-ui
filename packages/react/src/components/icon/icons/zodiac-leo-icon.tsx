"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacLeo as OriginalZodiacLeoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacLeoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacLeoIcon = component(Icon)({
  as: OriginalZodiacLeoIcon,
}) as Component<"svg", IconProps>
