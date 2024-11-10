import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { DatabaseBackup as OriginalDatabaseBackup } from "lucide-react"

/**
 * `DatabaseBackupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseBackupIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalDatabaseBackup} {...props} />
))

/**
 * `DatabaseBackup` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `DatabaseBackupIcon` instead.
 */
export const DatabaseBackup = DatabaseBackupIcon
