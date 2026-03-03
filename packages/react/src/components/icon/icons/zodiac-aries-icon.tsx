"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacAries as OriginalZodiacAriesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacAriesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacAriesIcon = component(Icon)({
  as: OriginalZodiacAriesIcon,
}) as Component<"svg", IconProps>
