"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacGemini as OriginalZodiacGeminiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacGeminiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacGeminiIcon = component(Icon)({
  as: OriginalZodiacGeminiIcon,
}) as Component<"svg", IconProps>
