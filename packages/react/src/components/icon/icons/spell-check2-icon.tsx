"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SpellCheck2 as OriginalSpellCheck2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SpellCheck2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SpellCheck2Icon = component(Icon)({
  as: OriginalSpellCheck2Icon,
}) as Component<"svg", IconProps>
