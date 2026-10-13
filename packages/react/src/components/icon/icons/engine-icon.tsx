"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Engine as OriginalEngineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EngineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EngineIcon = component(Icon)({
  as: OriginalEngineIcon,
}) as Component<"svg", IconProps>
