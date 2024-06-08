import { forwardRef } from "@yamada-ui/core"
import { CarTaxiFront as CarTaxiFrontIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CarTaxiFrontProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CarTaxiFront = forwardRef<CarTaxiFrontProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CarTaxiFrontIcon} {...props} />,
)
