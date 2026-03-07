"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacTaurus as OriginalZodiacTaurusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacTaurusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacTaurusIcon = component(Icon)({
  as: OriginalZodiacTaurusIcon,
}) as Component<"svg", IconProps>
