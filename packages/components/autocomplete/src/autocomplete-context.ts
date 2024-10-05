import type { CSSUIObject } from "@yamada-ui/core"
import type { Dispatch, DOMAttributes, RefObject, SetStateAction } from "react"
import type { ChangeOptions, UseAutocompleteProps } from "./use-autocomplete"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"

export const {
  DescendantsContextProvider: AutocompleteDescendantsContextProvider,
  useDescendant: useAutocompleteDescendant,
  useDescendants: useAutocompleteDescendants,
  useDescendantsContext: useAutocompleteDescendantsContext,
} = createDescendant()

interface AutocompleteContext
  extends Omit<
    UseAutocompleteProps,
    "defaultValue" | "onChange" | "onCreate" | "value"
  > {
  focusedIndex: number
  inputRef: RefObject<HTMLInputElement>
  inputValue: string
  isAllSelected: boolean
  isEmpty: boolean
  isHit: boolean
  isOpen: boolean
  label: string | string[] | undefined
  listRef: RefObject<HTMLUListElement>
  pickOptions: (value: string) => void
  rebirthOptions: (runFocus?: boolean) => void
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: string | string[]
  formControlProps: { [key: string]: any }
  inputProps: DOMAttributes<HTMLInputElement>
  onChange: (newValue: string, options?: ChangeOptions) => void
  onChangeLabel: (newValue: string, options?: ChangeOptions) => void
  onClose: () => void
  onCreate: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: (index?: number) => void
  onFocusPrev: (index?: number) => void
  onOpen: () => void
}

export const [AutocompleteProvider, useAutocompleteContext] =
  createContext<AutocompleteContext>({
    name: "AutocompleteContext",
    errorMessage: `useAutocompleteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Autocomplete />" or "<MultiAutocomplete />"`,
  })
