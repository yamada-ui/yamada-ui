import type { StackProps } from "@yamada-ui/react"
import { forwardRef, VStack } from "@yamada-ui/react"
import { memo } from "react"

export interface SectionProps extends StackProps {}

export const Section = memo(
  forwardRef<SectionProps, "div">(({ ...rest }, ref) => {
    return <VStack ref={ref} as="section" gap="xl" py="3xl" {...rest} />
  }),
)
