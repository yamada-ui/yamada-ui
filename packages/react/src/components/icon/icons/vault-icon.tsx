"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Vault as OriginalVaultIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VaultIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VaultIcon = component(Icon)({
  as: OriginalVaultIcon,
}) as Component<"svg", IconProps>
