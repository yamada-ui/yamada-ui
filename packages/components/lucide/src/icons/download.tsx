import { forwardRef } from "@yamada-ui/core"
import { Download as DownloadIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DownloadProps = LucideIconProps

/**
 * `Download` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Download = forwardRef<DownloadProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DownloadIcon} {...props} />
))
