import type { MotionProps } from "@yamada-ui/react"
import type { FC } from "react"
import {
  animate,
  isNumber,
  Motion,
  useMotionValue,
  useTransform,
} from "@yamada-ui/react"
import { memo, useEffect } from "react"

export interface CountUpProps extends MotionProps<"span"> {
  count: null | number
}

export const CountUp: FC<CountUpProps> = memo(
  ({ count: maxCount, ...rest }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (value) =>
      Math.round(value).toLocaleString(),
    )

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
