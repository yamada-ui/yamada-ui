import type { CSSUIObject } from "@yamada-ui/core"
import { createDescendant } from "@yamada-ui/use-descendant"
import { createContext } from "@yamada-ui/utils"
import type { Dispatch, DOMAttributes, RefObject, SetStateAction } from "react"
import type { ChangeOptions, UseAutocompleteProps } from "./use-autocomplete"

export const {
  DescendantsContextProvider: AutocompleteDescendantsContextProvider,
  useDescendantsContext: useAutocompleteDescendantsContext,
  useDescendants: useAutocompleteDescendants,
  useDescendant: useAutocompleteDescendant,
} = createDescendant()

interface AutocompleteContext
  extends Omit<
    UseAutocompleteProps,
    "value" | "defaultValue" | "onChange" | "onCreate"
  > {
  value: string | string[]
  label: string | string[] | undefined
  inputValue: string
  isHit: boolean
  isEmpty: boolean
  isAllSelected: boolean
  onChange: (newValue: string, options?: ChangeOptions) => void
  onChangeLabel: (newValue: string, options?: ChangeOptions) => void
  pickOptions: (value: string) => void
  rebirthOptions: (runFocus?: boolean) => void
  inputProps: DOMAttributes<HTMLInputElement>
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onCreate: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: (index?: number) => void
  onFocusPrev: (index?: number) => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  listRef: RefObject<HTMLUListElement>
  inputRef: RefObject<HTMLInputElement>
  formControlProps: { [key: string]: any }
  styles: { [key: string]: CSSUIObject }
}

export const [AutocompleteProvider, useAutocompleteContext] =
  createContext<AutocompleteContext>({
    name: "AutocompleteContext",
    errorMessage: `useAutocompleteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Autocomplete />" or "<MultiAutocomplete />"`,
  })
