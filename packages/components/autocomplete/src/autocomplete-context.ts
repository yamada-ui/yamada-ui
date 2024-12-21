import type { CSSUIObject } from "@yamada-ui/core"
import type { Dispatch, DOMAttributes, RefObject, SetStateAction } from "react"
import type { UseAutocompleteProps } from "./use-autocomplete"
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
  allSelected: boolean
  empty: boolean
  focusedIndex: number
  hit: boolean
  inputRef: RefObject<HTMLInputElement>
  inputValue: string
  label: string | string[] | undefined
  open: boolean
  pickOptions: (value: string) => void
  rebirthOptions: (runFocus?: boolean) => void
  setFocusedIndex: Dispatch<SetStateAction<number>>
  styles: { [key: string]: CSSUIObject | undefined }
  value: string | string[]
  formControlProps: { [key: string]: any }
  inputProps: DOMAttributes<HTMLInputElement>
  onChange: (newValue: string, runRebirth?: boolean) => void
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
