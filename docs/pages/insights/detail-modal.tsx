import { Box, forwardRef } from "@yamada-ui/react"
import type { BoxProps } from "@yamada-ui/react"
import { memo } from "react"

export type DetailModalProps = BoxProps & {}

export const DetailModal = memo(
  forwardRef<DetailModalProps, "div">(({ ...rest }, ref) => {
    return <Box ref={ref} {...rest}></Box>
  }),
)

DetailModal.displayName = "DetailModal"
