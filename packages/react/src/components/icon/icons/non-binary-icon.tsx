"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NonBinary as OriginalNonBinaryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NonBinaryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NonBinaryIcon = component(Icon)({
  as: OriginalNonBinaryIcon,
}) as Component<"svg", IconProps>
