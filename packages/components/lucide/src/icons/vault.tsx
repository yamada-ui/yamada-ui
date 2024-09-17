import { forwardRef } from "@yamada-ui/core"
import { Vault as VaultIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Vault` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vault = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VaultIcon} {...props} />
))
