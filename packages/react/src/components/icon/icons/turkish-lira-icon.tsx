"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TurkishLira as OriginalTurkishLiraIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TurkishLiraIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TurkishLiraIcon = component(Icon)({
  as: OriginalTurkishLiraIcon,
}) as Component<"svg", IconProps>
