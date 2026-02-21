"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sparkle as OriginalSparkleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SparkleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SparkleIcon = component(Icon)({
  as: OriginalSparkleIcon,
}) as Component<"svg", IconProps>
