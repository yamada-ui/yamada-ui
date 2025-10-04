import type { SegmentedControlRootProps } from "@yamada-ui/react"
import { Field, SegmentedControl } from "@yamada-ui/react"
import { memo } from "react"
import { CompleteIcon } from "./complete-icon"
import { EditIcon } from "./edit-icon"
import { InsertIcon } from "./insert-icon"

export interface SwitchModeProps extends SegmentedControlRootProps {}

export const SwitchMode = memo<SwitchModeProps>(({ ...rest }) => {
  return (
    <Field.Root label="Mode">
      <SegmentedControl.Root minW="auto" w="full" {...rest}>
        <SegmentedControl.Item value="complete">
          <CompleteIcon fontSize={{ base: "1.25rem" }} />
        </SegmentedControl.Item>

        <SegmentedControl.Item value="insert">
          <InsertIcon fontSize={{ base: "1.25rem" }} />
        </SegmentedControl.Item>

        <SegmentedControl.Item value="edit">
          <EditIcon fontSize={{ base: "1.25rem" }} />
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    </Field.Root>
  )
})

SwitchMode.displayName = "SwitchMode"
