import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudDownload as CloudDownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudDownload` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDownload = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudDownloadIcon} {...props} />,
)
