import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Signature as LucideSignatureIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SignatureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SignatureIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSignatureIcon} {...props} />,
)

/**
 * @deprecated Use `SignatureIcon` instead.
 */
export const Signature = SignatureIcon
