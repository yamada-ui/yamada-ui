import { forwardRef } from "@yamada-ui/core"
import { FolderKanban as FolderKanbanIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderKanbanProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderKanban = forwardRef<FolderKanbanProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderKanbanIcon} {...props} />,
)
