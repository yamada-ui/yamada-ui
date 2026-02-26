"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Radio as OriginalRadioIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadioIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadioIcon = component(Icon)({
  as: OriginalRadioIcon,
}) as Component<"svg", IconProps>
