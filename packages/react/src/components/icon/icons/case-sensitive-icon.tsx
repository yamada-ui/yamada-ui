"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CaseSensitive as OriginalCaseSensitiveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaseSensitiveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaseSensitiveIcon = component(Icon)({
  as: OriginalCaseSensitiveIcon,
}) as Component<"svg", IconProps>
