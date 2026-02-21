"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Regex as OriginalRegexIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RegexIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RegexIcon = component(Icon)({
  as: OriginalRegexIcon,
}) as Component<"svg", IconProps>
