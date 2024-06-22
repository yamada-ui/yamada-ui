import type { CSSUIObject, HTMLUIProps, Theme } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useStepContext } from "./step"
import { useStepperContext } from "./use-stepper"

export type StepSeparatorProps = HTMLUIProps<"div"> & {
  colorScheme?: Theme["colors"]
}

export const StepSeparator = forwardRef<StepSeparatorProps, "div">(
  ({ className, colorScheme, ...rest }, ref) => {
    const { orientation, showLastSeparator, styles } = useStepperContext()
    const { status, isLast } = useStepContext()

    let css: CSSUIObject = { ...styles.separator }

    if (colorScheme) {
      css = {
        ...css,
        "&[data-status=complete]": {
          bgColor: colorScheme,
        },
      }
    }

    if (isLast && !showLastSeparator) return null

    return (
      <ui.div
        ref={ref}
        className={cx("ui-step__separator", className)}
        role="separator"
        data-orientation={orientation}
        data-status={status}
        __css={css}
        {...rest}
      />
    )
  },
)
