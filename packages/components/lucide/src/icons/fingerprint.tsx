import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Fingerprint as LucideFingerprintIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FingerprintIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FingerprintIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFingerprintIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FingerprintIcon` instead.
 */
export const Fingerprint = FingerprintIcon
