"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TestTube as OriginalTestTubeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TestTubeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TestTubeIcon = component(Icon)({
  as: OriginalTestTubeIcon,
}) as Component<"svg", IconProps>
