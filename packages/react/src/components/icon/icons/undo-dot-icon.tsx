"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UndoDot as OriginalUndoDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UndoDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UndoDotIcon = component(Icon)({
  as: OriginalUndoDotIcon,
}) as Component<"svg", IconProps>
