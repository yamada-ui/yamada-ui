import type { StackProps } from "@yamada-ui/react"
import { VStack, forwardRef } from "@yamada-ui/react"
import { memo } from "react"

export type SectionProps = StackProps & {}

export const Section = memo(
  forwardRef<SectionProps, "div">(({ ...rest }, ref) => {
    return <VStack ref={ref} as="section" py="3xl" gap="xl" {...rest} />
  }),
)
