"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Faucet as OriginalFaucetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FaucetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FaucetIcon = component(Icon)({
  as: OriginalFaucetIcon,
}) as Component<"svg", IconProps>
