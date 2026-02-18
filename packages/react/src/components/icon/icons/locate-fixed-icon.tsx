"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LocateFixed as OriginalLocateFixedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LocateFixedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LocateFixedIcon = component(Icon)({
  as: OriginalLocateFixedIcon,
}) as Component<"svg", IconProps>
