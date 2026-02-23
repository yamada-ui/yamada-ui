"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WholeWord as OriginalWholeWordIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WholeWordIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WholeWordIcon = component(Icon)({
  as: OriginalWholeWordIcon,
}) as Component<"svg", IconProps>
