import { forwardRef } from "@yamada-ui/core"
import { WalletMinimal as WalletMinimalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WalletMinimalProps = LucideIconProps

/**
 * `WalletMinimal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletMinimal = forwardRef<WalletMinimalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={WalletMinimalIcon} {...props} />,
)
