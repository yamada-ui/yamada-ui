import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Nfc as LucideNfcIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `NfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const NfcIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideNfcIcon} {...props} />
))

/**
 * @deprecated Use `NfcIcon` instead.
 */
export const Nfc = NfcIcon
