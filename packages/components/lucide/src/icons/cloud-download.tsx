import { forwardRef } from "@yamada-ui/core"
import { CloudDownload as CloudDownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CloudDownloadProps = LucideIconProps

/**
 * `CloudDownload` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CloudDownload = forwardRef<CloudDownloadProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CloudDownloadIcon} {...props} />,
)
