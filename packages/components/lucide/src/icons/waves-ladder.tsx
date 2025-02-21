import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { WavesLadder as OriginalWavesLadder } from "lucide-react"

/**
 * `WavesLadderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WavesLadderIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalWavesLadder}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `WavesLadder` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `WavesLadderIcon` instead.
 */
export const WavesLadder = WavesLadderIcon
