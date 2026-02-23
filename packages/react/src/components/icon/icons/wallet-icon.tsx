"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wallet as OriginalWalletIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WalletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WalletIcon = component(Icon)({
  as: OriginalWalletIcon,
}) as Component<"svg", IconProps>
