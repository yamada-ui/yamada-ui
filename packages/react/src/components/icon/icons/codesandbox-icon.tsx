"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Codesandbox as OriginalCodesandboxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CodesandboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CodesandboxIcon = component(Icon)({
  as: OriginalCodesandboxIcon,
}) as Component<"svg", IconProps>
