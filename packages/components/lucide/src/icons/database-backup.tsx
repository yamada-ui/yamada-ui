import { forwardRef } from "@yamada-ui/core"
import { DatabaseBackup as DatabaseBackupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `DatabaseBackup` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DatabaseBackup = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={DatabaseBackupIcon} {...props} />,
)
