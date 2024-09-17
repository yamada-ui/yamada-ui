import type { CSSUIObject, RequiredPropGetter } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { Dict, Merge } from "@yamada-ui/utils"
import { createContext } from "@yamada-ui/utils"
import type { Dispatch, ReactNode, SetStateAction } from "react"
import type { GroupProps, InputProps, ItemProps } from "./use-rating"

interface RatingContext {
  getGroupProps: RequiredPropGetter<
    Merge<MotionProps, { value: number }>,
    MotionProps
  >
  id: string
  name: string
  value: number
  roundedValue: number
  hoveredValue: number
  resolvedValue: number
  isOutside: boolean
  setValue: Dispatch<SetStateAction<number>>
  setHoveredValue: Dispatch<SetStateAction<number>>
  decimal: number
  highlightSelectedOnly: boolean
  formControlProps: Dict
  groupProps: GroupProps | undefined
  itemProps: ItemProps | undefined
  inputProps: InputProps | undefined
  emptyIcon: ReactNode | ((value: number) => ReactNode) | undefined
  filledIcon: ReactNode | ((value: number) => ReactNode) | undefined
  styles: { [key: string]: CSSUIObject }
}

export const [RatingProvider, useRatingContext] = createContext<RatingContext>({
  name: "RatingContext",
  errorMessage: `useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`,
})
