"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TestTubes as OriginalTestTubesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TestTubesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TestTubesIcon = component(Icon)({
  as: OriginalTestTubesIcon,
}) as Component<"svg", IconProps>
