import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { CSSUIObject, RequiredPropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { MotionProps } from "../motion"
import type { GroupProps, InputProps, ItemProps } from "./use-rating"
import { createContext } from "../../utils"

interface RatingContext {
  id: string
  name: string
  decimal: number
  emptyIcon: ((value: number) => ReactNode) | ReactNode | undefined
  filledIcon: ((value: number) => ReactNode) | ReactNode | undefined
  highlightSelectedOnly: boolean
  hoveredValue: number
  outside: boolean
  resolvedValue: number
  roundedValue: number
  setHoveredValue: Dispatch<SetStateAction<number>>
  setValue: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: number
  formControlProps: Dict
  getGroupProps: RequiredPropGetter<
    Merge<MotionProps, { value: number }>,
    MotionProps
  >
  groupProps: GroupProps | undefined
  inputProps: InputProps | undefined
  itemProps: ItemProps | undefined
}

export const [RatingProvider, useRatingContext] = createContext<RatingContext>({
  name: "RatingContext",
  errorMessage: `useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`,
})
