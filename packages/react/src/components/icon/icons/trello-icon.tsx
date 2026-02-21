"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Trello as OriginalTrelloIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TrelloIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TrelloIcon = component(Icon)({
  as: OriginalTrelloIcon,
}) as Component<"svg", IconProps>
