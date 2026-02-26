"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleSlash2 as OriginalCircleSlash2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleSlash2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleSlash2Icon = component(Icon)({
  as: OriginalCircleSlash2Icon,
}) as Component<"svg", IconProps>
