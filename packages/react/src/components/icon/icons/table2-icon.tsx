"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Table2 as OriginalTable2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Table2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Table2Icon = component(Icon)({
  as: OriginalTable2Icon,
}) as Component<"svg", IconProps>
