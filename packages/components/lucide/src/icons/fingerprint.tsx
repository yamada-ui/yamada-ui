import { forwardRef } from "@yamada-ui/core"
import { Fingerprint as FingerprintIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FingerprintProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fingerprint = forwardRef<FingerprintProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FingerprintIcon} {...props} />
))
