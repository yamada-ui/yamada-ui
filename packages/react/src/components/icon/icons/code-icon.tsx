"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Code as OriginalCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CodeIcon = component(Icon)({ as: OriginalCodeIcon }) as Component<
  "svg",
  IconProps
>
