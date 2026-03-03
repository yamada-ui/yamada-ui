"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacAquarius as OriginalZodiacAquariusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacAquariusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacAquariusIcon = component(Icon)({
  as: OriginalZodiacAquariusIcon,
}) as Component<"svg", IconProps>
