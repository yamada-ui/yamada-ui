"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lambda as OriginalLambdaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LambdaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LambdaIcon = component(Icon)({
  as: OriginalLambdaIcon,
}) as Component<"svg", IconProps>
