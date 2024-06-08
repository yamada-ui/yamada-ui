import { forwardRef } from "@yamada-ui/core"
import { Volume as VolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VolumeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Volume = forwardRef<VolumeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VolumeIcon} {...props} />
))
