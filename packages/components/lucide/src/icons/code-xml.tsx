import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CodeXml as LucideCodeXmlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CodeXmlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodeXmlIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCodeXmlIcon} {...props} />
))

/**
 * @deprecated Use `CodeXmlIcon` instead.
 */
export const CodeXml = CodeXmlIcon
