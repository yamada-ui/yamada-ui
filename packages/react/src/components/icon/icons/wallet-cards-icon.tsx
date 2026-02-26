"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WalletCards as OriginalWalletCardsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WalletCardsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WalletCardsIcon = component(Icon)({
  as: OriginalWalletCardsIcon,
}) as Component<"svg", IconProps>
