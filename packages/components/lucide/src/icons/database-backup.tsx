import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { DatabaseBackup as LucideDatabaseBackupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `DatabaseBackupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseBackupIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideDatabaseBackupIcon} {...props} />
  ),
)

/**
 * @deprecated Use `DatabaseBackupIcon` instead.
 */
export const DatabaseBackup = DatabaseBackupIcon
