"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Settings as OriginalSettingsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SettingsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SettingsIcon = component(Icon)({
  as: OriginalSettingsIcon,
}) as Component<"svg", IconProps>
