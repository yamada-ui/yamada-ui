"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlaskConical as OriginalFlaskConicalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlaskConicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlaskConicalIcon = component(Icon)({
  as: OriginalFlaskConicalIcon,
}) as Component<"svg", IconProps>
