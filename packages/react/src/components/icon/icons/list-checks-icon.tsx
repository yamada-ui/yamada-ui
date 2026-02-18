"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListChecks as OriginalListChecksIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListChecksIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListChecksIcon = component(Icon)({
  as: OriginalListChecksIcon,
}) as Component<"svg", IconProps>
