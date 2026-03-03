"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacOphiuchus as OriginalZodiacOphiuchusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacOphiuchusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacOphiuchusIcon = component(Icon)({
  as: OriginalZodiacOphiuchusIcon,
}) as Component<"svg", IconProps>
