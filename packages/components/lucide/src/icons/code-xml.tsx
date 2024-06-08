import { forwardRef } from "@yamada-ui/core"
import { CodeXml as CodeXmlIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CodeXmlProps = LucideIconProps

/**
 * `CodeXml` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CodeXml = forwardRef<CodeXmlProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CodeXmlIcon} {...props} />
))
