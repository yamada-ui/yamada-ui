import type {
  FormControlProps,
  Merge,
  SegmentedControlProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import {
  FormControl,
  SegmentedControl,
  SegmentedControlButton,
} from "@yamada-ui/react"
import { memo } from "react"
import { CompleteIcon } from "./complete-icon"
import { EditIcon } from "./edit-icon"
import { InsertIcon } from "./insert-icon"

export interface SwitchModeProps
  extends Merge<FormControlProps, SegmentedControlProps> {}

export const SwitchMode: FC<SwitchModeProps> = memo(
  ({
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    label = "Mode",
    readOnly,
    replace,
    required,
    ...rest
  }) => {
    return (
      <FormControl
        {...{
          disabled,
          errorMessage,
          helperMessage,
          invalid,
          label,
          readOnly,
          replace,
          required,
        }}
      >
        <SegmentedControl minW="auto" w="full" {...rest}>
          <SegmentedControlButton value="complete">
            <CompleteIcon fontSize={{ base: "1.25rem" }} />
          </SegmentedControlButton>

          <SegmentedControlButton value="insert">
            <InsertIcon fontSize={{ base: "1.25rem" }} />
          </SegmentedControlButton>

          <SegmentedControlButton value="edit">
            <EditIcon fontSize={{ base: "1.25rem" }} />
          </SegmentedControlButton>
        </SegmentedControl>
      </FormControl>
    )
  },
)

SwitchMode.displayName = "SwitchMode"
