import type { HTMLUIProps, ThemeProps } from "../../core"
import type { ButtonStyle } from "./button.style"
import { useMemo } from "react"
import { ui } from "../../core"
import { dataAttr } from "../../utils"
import { ButtonPropsContext } from "./button"

export interface ButtonGroupProps extends HTMLUIProps, ThemeProps<ButtonStyle> {
  /**
   * If `true`, the borderRadius of button that are direct children will be altered to look flushed together.
   *
   * @default false
   */
  attached?: boolean
  /**
   * If `true`, all wrapped button will be disabled.
   *
   * @default false
   */
  disabled?: boolean
}

export const ButtonGroup = ui<"div", ButtonGroupProps>(
  ({ size, variant, attached, disabled, flexDirection = "row", ...rest }) => {
    const column =
      flexDirection === "column" || flexDirection === "column-reverse"
    const orientation = column ? "vertical" : "horizontal"

    const context = useMemo(
      () => ({ size, variant, disabled }),
      [size, variant, disabled],
    )

    return (
      <ButtonPropsContext value={context}>
        <ui.div
          aria-orientation={orientation}
          data-attached={dataAttr(attached)}
          data-orientation={orientation}
          flexDirection={flexDirection}
          role="group"
          {...rest}
        />
      </ButtonPropsContext>
    )
  },
  {
    name: "button-group",
    base: { display: "inline-flex" },
    props: {
      attached: {
        true: {
          _horizontal: {
            "> *:first-of-type:not(:last-of-type)": {
              borderRightRadius: 0,
              borderRightWidth: "0px",
            },
            "> *:not(:first-of-type):last-of-type": { borderLeftRadius: 0 },
            "> *:not(:first-of-type):not(:last-of-type)": {
              borderRadius: 0,
              borderRightWidth: "0px",
            },
          },
          _vertical: {
            "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
            "> *:not(:first-of-type):last-of-type": {
              borderTopRadius: 0,
              borderTopWidth: "0px",
            },
            "> *:not(:first-of-type):not(:last-of-type)": {
              borderRadius: 0,
              borderTopWidth: "0px",
            },
          },
        },
      },
    },
    forwardProps: ["as", "flexDirection"],
    transferProps: ["attached", "size", "variant", "colorScheme"],
  },
)
