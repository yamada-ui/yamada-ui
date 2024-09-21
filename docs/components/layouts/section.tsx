import { VStack, forwardRef } from "@yamada-ui/react"
import type { StackProps } from "@yamada-ui/react"
import { memo } from "react"

export interface SectionProps extends StackProps {}

export const Section = memo(
  forwardRef<SectionProps, "div">(({ ...rest }, ref) => {
    return <VStack ref={ref} as="section" py="3xl" gap="xl" {...rest} />
  }),
)
