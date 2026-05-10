"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Astroid as OriginalAstroidIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AstroidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AstroidIcon = component(Icon)({
  as: OriginalAstroidIcon,
}) as Component<"svg", IconProps>
