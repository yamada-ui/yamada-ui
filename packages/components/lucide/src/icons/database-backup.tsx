import { forwardRef } from "@yamada-ui/core"
import { DatabaseBackup as DatabaseBackupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DatabaseBackupProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseBackup = forwardRef<DatabaseBackupProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={DatabaseBackupIcon} {...props} />,
)
