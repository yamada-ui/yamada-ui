import { forwardRef } from "@yamada-ui/core"
import { Nfc as NfcIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NfcProps = LucideIconProps

/**
 * `Nfc` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Nfc = forwardRef<NfcProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NfcIcon} {...props} />
))
