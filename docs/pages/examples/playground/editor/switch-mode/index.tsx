import {
  FormControl,
  SegmentedControl,
  SegmentedControlButton,
} from "@yamada-ui/react"
import type { FormControlProps, SegmentedControlProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { CompleteIcon } from "./complete-icon"
import { EditIcon } from "./edit-icon"
import { InsertIcon } from "./insert-icon"

export type SwitchModeProps = SegmentedControlProps &
  Omit<FormControlProps, "onChange"> & {}

export const SwitchMode: FC<SwitchModeProps> = memo(
  ({
    isRequired,
    isDisabled,
    isInvalid,
    isReadOnly,
    isReplace,
    label = "Mode",
    helperMessage,
    errorMessage,
    ...rest
  }) => {
    return (
      <FormControl
        {...{
          isRequired,
          isDisabled,
          isInvalid,
          isReadOnly,
          isReplace,
          label,
          helperMessage,
          errorMessage,
        }}
      >
        <SegmentedControl w="full" minW="auto" {...rest}>
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
