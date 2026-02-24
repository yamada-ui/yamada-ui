"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CassetteTape as OriginalCassetteTapeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CassetteTapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CassetteTapeIcon = component(Icon)({
  as: OriginalCassetteTapeIcon,
}) as Component<"svg", IconProps>
