"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacPisces as OriginalZodiacPiscesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacPiscesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacPiscesIcon = component(Icon)({
  as: OriginalZodiacPiscesIcon,
}) as Component<"svg", IconProps>
