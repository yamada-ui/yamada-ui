"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SpellCheck as OriginalSpellCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpellCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpellCheckIcon = component(Icon)({
  as: OriginalSpellCheckIcon,
}) as Component<"svg", IconProps>
