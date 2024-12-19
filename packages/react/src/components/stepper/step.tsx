import type { CSSUIObject, HTMLUIProps } from "../../core"
import type { UseStepReturn } from "./use-stepper"
import { forwardRef, ui } from "../../core"
import { createContext, cx, dataAttr } from "../../utils"
import { useStep, useStepperContext } from "./use-stepper"

export interface StepContext extends Omit<UseStepReturn, "getStepProps"> {}

export const [StepProvider, useStepContext] = createContext<StepContext>({
  name: "StepperContext",
  errorMessage: `useStepContext returned is 'undefined'. Seems you forgot to wrap the components in "<Step />"`,
})

export interface StepProps extends HTMLUIProps {}

export const Step = forwardRef<StepProps, "div">(
  ({ className, ...rest }, ref) => {
    const { orientation, showLastSeparator, styles } = useStepperContext()
    const { index, isFirst, isLast, status, getStepProps } = useStep()

    const css: CSSUIObject = { ...styles.step }

    return (
      <StepProvider value={{ index, isFirst, isLast, status }}>
        <ui.div
          className={cx("ui-step", className)}
          data-orientation={orientation}
          data-stretch={dataAttr(showLastSeparator)}
          __css={css}
          {...getStepProps(rest, ref)}
        />
      </StepProvider>
    )
  },
)

Step.displayName = "Step"
Step.__ui__ = "Step"
