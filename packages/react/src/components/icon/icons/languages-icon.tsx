"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Languages as OriginalLanguagesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LanguagesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LanguagesIcon = component(Icon)({
  as: OriginalLanguagesIcon,
}) as Component<"svg", IconProps>
