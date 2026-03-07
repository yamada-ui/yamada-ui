"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZodiacSagittarius as OriginalZodiacSagittariusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZodiacSagittariusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZodiacSagittariusIcon = component(Icon)({
  as: OriginalZodiacSagittariusIcon,
}) as Component<"svg", IconProps>
