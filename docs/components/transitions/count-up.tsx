import {
  animate,
  isNumber,
  Motion,
  useMotionValue,
  useTransform,
  type MotionProps,
} from "@yamada-ui/react"
import { memo, useEffect } from "react"
import type { FC } from "react"

export type CountUpProps = MotionProps<"p"> & {
  count: number | null
}

export const CountUp: FC<CountUpProps> = memo(
  ({ count: maxCount, ...rest }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)

    useEffect(() => {
      if (!isNumber(maxCount)) return

      const animation = animate(count, maxCount, {
        duration: 1.4,
        ease: "circOut",
      })

      return animation.stop
    }, [count, maxCount])

    return (
      <Motion as="span" {...rest}>
        {rounded}
      </Motion>
    )
  },
)

CountUp.displayName = "CountUp"
