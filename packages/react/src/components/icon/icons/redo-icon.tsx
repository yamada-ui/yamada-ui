"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Redo as OriginalRedoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RedoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RedoIcon = component(Icon)({ as: OriginalRedoIcon }) as Component<
  "svg",
  IconProps
>
