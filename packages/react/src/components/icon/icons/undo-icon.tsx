"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Undo as OriginalUndoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UndoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UndoIcon = component(Icon)({ as: OriginalUndoIcon }) as Component<
  "svg",
  IconProps
>
