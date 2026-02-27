"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Annoyed as OriginalAnnoyedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AnnoyedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AnnoyedIcon = component(Icon)({
  as: OriginalAnnoyedIcon,
}) as Component<"svg", IconProps>
