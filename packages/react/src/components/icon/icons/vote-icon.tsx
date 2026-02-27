"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Vote as OriginalVoteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VoteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VoteIcon = component(Icon)({ as: OriginalVoteIcon }) as Component<
  "svg",
  IconProps
>
