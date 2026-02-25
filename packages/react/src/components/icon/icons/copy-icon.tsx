"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Copy as OriginalCopyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyIcon = component(Icon)({ as: OriginalCopyIcon }) as Component<
  "svg",
  IconProps
>
