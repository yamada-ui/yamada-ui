"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WalletMinimal as OriginalWalletMinimalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WalletMinimalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WalletMinimalIcon = component(Icon)({
  as: OriginalWalletMinimalIcon,
}) as Component<"svg", IconProps>
