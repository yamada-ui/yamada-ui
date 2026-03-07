"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacScorpio as OriginalZodiacScorpioIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacScorpioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacScorpioIcon = component(Icon)({
  as: OriginalZodiacScorpioIcon,
}) as Component<"svg", IconProps>
