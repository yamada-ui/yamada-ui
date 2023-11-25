import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { PopoverTrigger } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { useDatePickerContext } from "./use-date-picker"

type DatePickerFieldOptions = {
  inputProps?: HTMLUIProps<"input">
}

export type DatePickerFieldProps = HTMLUIProps<"div"> & DatePickerFieldOptions

export const DatePickerField = forwardRef<DatePickerFieldProps, "input">(
  ({ className, h, minH, inputProps, ...rest }, ref) => {
    const styles = useDatePickerContext()

    const css: CSSUIObject = {
      paddingEnd: "2rem",
      h,
      minH,
      display: "flex",
      alignItems: "center",
      ...styles.field,
      cursor: "text",
      ...styles.feild,
    }

    return (
      <PopoverTrigger>
        <ui.div
          className={cx("ui-date-picker__field", className)}
          __css={css}
          {...rest}
        >
          <ui.input
            ref={ref}
            className="ui-date-picker__field__input"
            display="inline-block"
            w="full"
            {...inputProps}
          />
        </ui.div>
      </PopoverTrigger>
    )
  },
)
