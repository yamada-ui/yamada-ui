import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CloudDownload as LucideCloudDownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CloudDownloadIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDownloadIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCloudDownloadIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CloudDownloadIcon` instead.
 */
export const CloudDownload = CloudDownloadIcon
