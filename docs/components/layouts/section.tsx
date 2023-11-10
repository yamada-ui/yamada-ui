import { CenterProps, VStack, forwardRef } from "@yamada-ui/react"
import { memo } from "react"

export type SectionProps = CenterProps & {}

export const Section = memo(
  forwardRef<SectionProps, "div">(({ ...rest }, ref) => {
    return <VStack ref={ref} as="section" py="3xl" gap="xl" {...rest} />
  }),
)
