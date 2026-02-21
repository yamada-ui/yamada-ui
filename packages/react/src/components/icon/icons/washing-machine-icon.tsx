"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WashingMachine as OriginalWashingMachineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WashingMachineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WashingMachineIcon = component(Icon)({
  as: OriginalWashingMachineIcon,
}) as Component<"svg", IconProps>
