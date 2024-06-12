import { forwardRef } from "@yamada-ui/core"
import { CaseSensitive as CaseSensitiveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CaseSensitiveProps = LucideIconProps

/**
 * `CaseSensitive` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CaseSensitive = forwardRef<CaseSensitiveProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CaseSensitiveIcon} {...props} />,
)
