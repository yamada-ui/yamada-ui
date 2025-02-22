import type { Merge } from "@yamada-ui/utils"
import type { PropGetter } from "../../core"
import type { MotionProps } from "../motion"
import { cx, dataAttr, handlerAll } from "@yamada-ui/utils"
import { useAnimation } from "motion/react"
import { useCallback } from "react"
import { useCreateVars } from "../../core"
import { useControllableState } from "../../hooks/use-controllable-state"

export type AiryIdent = "from" | "to"

export interface UseAiryProps
  extends Merge<
    MotionProps<"button">,
    {
      /**
       * You can set the initial state.
       *
       * @default 'from'
       */
      defaultValue?: AiryIdent
      /**
       *　The animation delay.
       *
       * @default 0
       */
      delay?: number
      /**
       * If `true`, the component is disabled.
       *
       * @default false
       */
      disabled?: boolean
      /**
       * The animation duration.
       *
       * @default 0.2
       */
      duration?: number
      /**
       * If `true`, the component is readonly.
       *
       * @default false
       */
      readOnly?: boolean
      /**
       * Use this when you want to control the animation from outside the component.
       */
      value?: AiryIdent
      /**
       * This is a callback function that is called when the animation state changes.
       */
      onChange?: (value: AiryIdent) => void
    }
  > {}

export const useAiry = ({
  className,
  css,
  defaultValue = "from",
  delay = 0,
  disabled,
  duration = 0.2,
  readOnly,
  value: valueProp,
  onChange: onChangeProp,
  ...rest
}: UseAiryProps) => {
  const [vars, { opacity }] = useCreateVars(
    { opacity: 1, ...css, ...rest },
    ["opacity"],
    { transform: true },
  )
  const animate = useAnimation()
  const [value, setValue] = useControllableState<AiryIdent>({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })

  const onClick = useCallback(async () => {
    if (readOnly) return

    await animate.start({ opacity: 0, transition: { delay, duration } })

    setValue((prev) => (prev === "from" ? "to" : "from"))

    await animate.start({ opacity, transition: { duration } })
  }, [animate, setValue, readOnly, opacity, duration, delay])

  const getRootProps: PropGetter<MotionProps<"button">> = useCallback(
    (props = {}) => ({
      ...rest,
      ...props,
      type: "button",
      className: cx(`ui-airy--${value}`, className),
      css,
      "data-disabled": dataAttr(disabled),
      "data-readonly": dataAttr(readOnly),
      "data-value": value,
      animate,
      disabled,
      initial: { opacity },
      vars,
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
    }),
    [
      className,
      disabled,
      readOnly,
      value,
      animate,
      opacity,
      vars,
      onClick,
      css,
      rest,
    ],
  )

  return { value, getRootProps }
}

export type UseAiryReturn = ReturnType<typeof useAiry>
