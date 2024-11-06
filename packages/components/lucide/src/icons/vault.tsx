import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vault as LucideVaultIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VaultIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VaultIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVaultIcon} {...props} />
))

/**
 * @deprecated Use `VaultIcon` instead.
 */
export const Vault = VaultIcon
