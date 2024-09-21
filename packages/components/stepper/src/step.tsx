import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx, createContext, dataAttr } from "@yamada-ui/utils"
import type { UseStepReturn } from "./use-stepper"
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
    const { index, status, isFirst, isLast, getStepProps } = useStep()

    const css: CSSUIObject = { ...styles.step }

    return (
      <StepProvider value={{ index, status, isFirst, isLast }}>
        <ui.div
          className={cx("ui-step", className)}
          __css={css}
          data-orientation={orientation}
          data-stretch={dataAttr(showLastSeparator)}
          {...getStepProps(rest, ref)}
        />
      </StepProvider>
    )
  },
)
