import { forwardRef } from "@yamada-ui/core"
import { FolderInput as FolderInputIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderInputProps = LucideIconProps

/**
 * `FolderInput` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderInput = forwardRef<FolderInputProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FolderInputIcon} {...props} />
))
