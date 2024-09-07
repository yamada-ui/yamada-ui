import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import { layoutStyleProperties } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import type { Union, DOMAttributes } from "@yamada-ui/utils"
import {
  ariaAttr,
  createContext,
  dataAttr,
  funcAll,
  getEventRelatedTarget,
  handlerAll,
  isArray,
  isContains,
  isHTMLElement,
  mergeRefs,
  pickObject,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
  getValidChildren,
  isUndefined,
} from "@yamada-ui/utils"
import type {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  SetStateAction,
} from "react"
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react"
import type { AutocompleteOptionProps } from "./"
import { AutocompleteOption, AutocompleteOptionGroup } from "./"

type ChangeOptions = {
  forceUpdate?: boolean
  runOmit?: boolean
  runRebirth?: boolean
}

type AutocompleteBaseItem = Omit<
  AutocompleteOptionProps,
  "value" | "children"
> & {
  label?: string
}

type AutocompleteItemWithValue = AutocompleteBaseItem & {
  value?: string
}

type AutocompleteItemWithItems = AutocompleteBaseItem & {
  items?: AutocompleteItemWithValue[]
}

export type AutocompleteItem =
  | AutocompleteItemWithValue
  | AutocompleteItemWithItems

const kanaMap: Record<string, string> = {
  ｶﾞ: "ガ",
  ｷﾞ: "ギ",
  ｸﾞ: "グ",
  ｹﾞ: "ゲ",
  ｺﾞ: "ゴ",
  ｻﾞ: "ザ",
  ｼﾞ: "ジ",
  ｽﾞ: "ズ",
  ｾﾞ: "ゼ",
  ｿﾞ: "ゾ",
  ﾀﾞ: "ダ",
  ﾁﾞ: "ヂ",
  ﾂﾞ: "ヅ",
  ﾃﾞ: "デ",
  ﾄﾞ: "ド",
  ﾊﾞ: "バ",
  ﾋﾞ: "ビ",
  ﾌﾞ: "ブ",
  ﾍﾞ: "ベ",
  ﾎﾞ: "ボ",
  ﾊﾟ: "パ",
  ﾋﾟ: "ピ",
  ﾌﾟ: "プ",
  ﾍﾟ: "ペ",
  ﾎﾟ: "ポ",
  ｳﾞ: "ヴ",
  ﾜﾞ: "ヷ",
  ｦﾞ: "ヺ",
  ｱ: "ア",
  ｲ: "イ",
  ｳ: "ウ",
  ｴ: "エ",
  ｵ: "オ",
  ｶ: "カ",
  ｷ: "キ",
  ｸ: "ク",
  ｹ: "ケ",
  ｺ: "コ",
  ｻ: "サ",
  ｼ: "シ",
  ｽ: "ス",
  ｾ: "セ",
  ｿ: "ソ",
  ﾀ: "タ",
  ﾁ: "チ",
  ﾂ: "ツ",
  ﾃ: "テ",
  ﾄ: "ト",
  ﾅ: "ナ",
  ﾆ: "ニ",
  ﾇ: "ヌ",
  ﾈ: "ネ",
  ﾉ: "ノ",
  ﾊ: "ハ",
  ﾋ: "ヒ",
  ﾌ: "フ",
  ﾍ: "ヘ",
  ﾎ: "ホ",
  ﾏ: "マ",
  ﾐ: "ミ",
  ﾑ: "ム",
  ﾒ: "メ",
  ﾓ: "モ",
  ﾔ: "ヤ",
  ﾕ: "ユ",
  ﾖ: "ヨ",
  ﾗ: "ラ",
  ﾘ: "リ",
  ﾙ: "ル",
  ﾚ: "レ",
  ﾛ: "ロ",
  ﾜ: "ワ",
  ｦ: "ヲ",
  ﾝ: "ン",
  ｧ: "ァ",
  ｨ: "ィ",
  ｩ: "ゥ",
  ｪ: "ェ",
  ｫ: "ォ",
  ｯ: "ッ",
  ｬ: "ャ",
  ｭ: "ュ",
  ｮ: "ョ",
  "｡": "。",
  "､": "、",
  ｰ: "ー",
  "｢": "「",
  "｣": "」",
  "･": "・",
}

const defaultFormat = (value: string) => {
  value = value.replace(/[！-～]/g, (v) =>
    String.fromCharCode(v.charCodeAt(0) - 0xfee0),
  )

  const reg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g")

  value = value
    .replace(reg, (v) => kanaMap[v])
    .replace(/ﾞ/g, "゛")
    .replace(/ﾟ/g, "゜")

  value = value.toUpperCase()

  return value
}

const flattenItems = (
  items: AutocompleteItem[],
): AutocompleteItemWithValue[] => {
  const filterItems = (
    items: AutocompleteItem[] | AutocompleteItemWithValue[],
  ): (AutocompleteItemWithValue | AutocompleteItemWithValue[])[] =>
    items
      .map((item) => {
        const { isDisabled, isFocusable } = item
        const trulyDisabled = !!isDisabled && !isFocusable

        if (trulyDisabled) return

        if ("items" in item) {
          return filterItems(item.items ?? [])
        } else {
          return item as AutocompleteItemWithValue
        }
      })
      .filter(Boolean) as (
      | AutocompleteItemWithValue
      | AutocompleteItemWithValue[]
    )[]

  return filterItems(items).flat(Infinity) as AutocompleteItemWithValue[]
}

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target?.getAttribute("role")?.startsWith("option")

export const {
  DescendantsContextProvider: AutocompleteDescendantsContextProvider,
  useDescendantsContext: useAutocompleteDescendantsContext,
  useDescendants: useAutocompleteDescendants,
  useDescendant: useAutocompleteDescendant,
} = createDescendant<HTMLElement>()

type AutocompleteContext = Omit<
  UseAutocompleteProps,
  "value" | "defaultValue" | "onChange" | "onCreate"
> & {
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
  formControlProps: Record<string, any>
  styles: Record<string, CSSUIObject>
}

export const [AutocompleteProvider, useAutocompleteContext] =
  createContext<AutocompleteContext>({
    name: "AutocompleteContext",
    errorMessage: `useAutocompleteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Autocomplete />" or "<MultiAutocomplete />"`,
  })

type UseAutocompleteBaseProps<T extends string | string[] = string> =
  ComboBoxProps &
    FormControlOptions & {
      /**
       * The value of the autocomplete.
       */
      value?: T
      /**
       * The initial value of the autocomplete.
       */
      defaultValue?: T
      /**
       * The callback invoked when value state changes.
       */
      onChange?: (value: T) => void
      /**
       * The callback invoked when search input.
       */
      onSearch?: (ev: ChangeEvent<HTMLInputElement>) => void
      /**
       * The callback invoked when autocomplete option created.
       */
      onCreate?: (
        newItem: AutocompleteItem,
        newItems: AutocompleteItem[],
      ) => void
      /**
       * Function to format text when search input.
       */
      format?: (value: string) => string
      /**
       * The position to be inserted when the autocomplete option is created.
       *
       * @default 'first'
       */
      insertPositionItem?: Union<"first" | "last"> | [string, "first" | "last"]
      /**
       * If `true`, the list element will be closed when value is selected.
       *
       * @default true
       */
      closeOnSelect?: boolean
      /**
       * The message displayed when the search yields no hits.
       *
       * @default 'No results found'
       */
      emptyMessage?: string
      /**
       * If `true`, enables the creation of autocomplete option.
       *
       * @default false
       */
      allowCreate?: boolean
      /**
       * If `true`, enables the free input.
       */
      allowFree?: boolean
      /**
       * If `true`, the selected item(s) will be excluded from the list.
       *
       * @default false
       */
      omitSelectedValues?: boolean
      /**
       * The maximum selectable value.
       */
      maxSelectValues?: number
      /**
       * Props for select option element.
       */
      optionProps?: Omit<AutocompleteOptionProps, "value" | "children">
      /**
       * If provided, generate options based on items.
       */
      items?: AutocompleteItem[]
    }

export type UseAutocompleteProps<T extends string | string[] = string> = Omit<
  HTMLUIProps<"input">,
  | keyof UseAutocompleteBaseProps
  | "list"
  | "disabled"
  | "required"
  | "readOnly"
  | "size"
> &
  UseAutocompleteBaseProps<T>

export const useAutocomplete = <T extends string | string[] = string>(
  props: UseAutocompleteProps<T>,
) => {
  const {
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    onCreate: onCreateProp,
    onSearch: onSearchProp,
    closeOnSelect = true,
    omitSelectedValues = false,
    maxSelectValues,
    allowCreate = false,
    allowFree = false,
    insertPositionItem = "first",
    emptyMessage = "No results found",
    format = defaultFormat,
    optionProps,
    placeholder,
    onKeyDown: onKeyDownProp,
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    closeOnBlur = true,
    closeOnEsc = true,
    openDelay,
    closeDelay,
    isLazy,
    lazyBehavior,
    animation,
    duration = 0.2,
    offset,
    gutter,
    preventOverflow,
    flip,
    matchWidth = true,
    boundary,
    eventListeners,
    strategy,
    placement = "bottom-start",
    modifiers,
    items,
    children,
    ...rest
  } = useFormControlProps(props)
  const {
    "aria-readonly": _ariaReadonly,
    onFocus: onFocusProp,
    ...formControlProps
  } = pickObject(rest, formControlProperties)
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)
  const { id } = rest

  const descendants = useAutocompleteDescendants()

  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))
  const isComposition = useRef<boolean>(false)
  const prevValue = useRef<T | undefined>(undefined)

  const [resolvedItems, setResolvedItems] = useState<
    AutocompleteItem[] | undefined
  >(items ? JSON.parse(JSON.stringify(items)) : undefined)
  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
  })
  const [label, setLabel] = useState<T | undefined>(undefined)
  const [inputValue, setInputValue] = useState<string>("")
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false)
  const [isHit, setIsHit] = useState<boolean>(true)
  const {
    isOpen,
    onOpen: onInternalOpen,
    onClose,
  } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  })
  const isFocused = focusedIndex > -1
  const isCreate = focusedIndex === -2 && allowCreate
  const isMulti = isArray(value)
  const isEmptyValue = !isMulti ? !value : !value.length

  const [firstInsertPositionItem, secondInsertPositionItem] = useMemo(() => {
    if (isArray(insertPositionItem)) {
      return insertPositionItem
    } else {
      return [insertPositionItem, "first"]
    }
  }, [insertPositionItem])

  if (allowCreate && !isUndefined(children)) {
    console.warn(
      `${!isMulti ? "Autocomplete" : "MultiAutocomplete"}: ${
        !isMulti ? "Autocomplete" : "MultiAutocomplete"
      } internally prefers 'children'. If 'allowCreate' is true, it will not be reflected correctly. If want to reflect, please set 'items' in props.`,
    )
  }

  const selectedValues = descendants.enabledValues(
    ({ node }) => isMulti && value.includes(node.dataset.value ?? ""),
  )
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const enabledValues = descendants.enabledValues(
    ({ node, index }) =>
      "target" in node.dataset && !selectedIndexes.includes(index),
  )

  const validChildren = getValidChildren(children)

  const computedChildren = useMemo(
    () =>
      resolvedItems?.map((item, i) => {
        if ("value" in item) {
          const { label, value, ...props } = item

          return (
            <AutocompleteOption key={i} value={value} {...props}>
              {label}
            </AutocompleteOption>
          )
        } else if ("items" in item) {
          const { label, items = [], ...props } = item

          return (
            <AutocompleteOptionGroup
              key={i}
              label={label as string}
              {...(props as HTMLUIProps<"ul">)}
            >
              {items.map(({ label, value, ...props }, i) => (
                <AutocompleteOption key={i} value={value} {...props}>
                  {label}
                </AutocompleteOption>
              ))}
            </AutocompleteOptionGroup>
          )
        }
      }),
    [resolvedItems],
  )

  const isEmpty = !validChildren.length && !computedChildren?.length

  const onOpen = useCallback(() => {
    if (formControlProps.disabled || formControlProps.readOnly) return

    if (!allowCreate && (isEmpty || isAllSelected)) return

    onInternalOpen()

    if (inputRef.current) inputRef.current.focus()
  }, [allowCreate, formControlProps, isAllSelected, isEmpty, onInternalOpen])

  const onFocusFirst = useCallback(() => {
    const id = setTimeout(() => {
      if (isEmpty || isAllSelected) return

      const first = descendants.enabledFirstValue(
        ({ node }) => "target" in node.dataset,
      )

      if (!first) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(first.index)
      } else {
        if (selectedIndexes.includes(first.index)) {
          const enabledFirst = enabledValues[0]

          setFocusedIndex(enabledFirst.index)
        } else {
          setFocusedIndex(first.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [
    descendants,
    enabledValues,
    isAllSelected,
    isEmpty,
    isMulti,
    omitSelectedValues,
    selectedIndexes,
  ])

  const onFocusLast = useCallback(() => {
    const id = setTimeout(() => {
      if (isEmpty || isAllSelected) return

      const last = descendants.enabledLastValue(
        ({ node }) => "target" in node.dataset,
      )

      if (!last) return

      if (!isMulti || !omitSelectedValues) {
        setFocusedIndex(last.index)
      } else {
        if (selectedIndexes.includes(last.index)) {
          const enabledLast = enabledValues.reverse()[0]

          setFocusedIndex(enabledLast.index)
        } else {
          setFocusedIndex(last.index)
        }
      }
    })

    timeoutIds.current.add(id)
  }, [
    descendants,
    enabledValues,
    isAllSelected,
    isEmpty,
    isMulti,
    omitSelectedValues,
    selectedIndexes,
  ])

  const onFocusSelected = useCallback(() => {
    const id = setTimeout(() => {
      const values = descendants.enabledValues()

      const selected = values.find(({ node }) =>
        !isMulti
          ? node.dataset.value === value
          : value.includes(node.dataset.value ?? ""),
      )

      if (selected) setFocusedIndex(selected.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, isMulti, value])

  const onFocusNext = useCallback(
    (index: number = focusedIndex) => {
      const id = setTimeout(() => {
        const next = descendants.enabledNextValue(
          index,
          ({ node }) => "target" in node.dataset,
        )

        if (!next) return

        if (!isMulti || !omitSelectedValues) {
          setFocusedIndex(next.index)
        } else {
          if (selectedIndexes.includes(next.index)) {
            const enabledNext =
              enabledValues.find(({ index }) => next.index < index) ??
              enabledValues[0]

            setFocusedIndex(enabledNext.index)
          } else {
            setFocusedIndex(next.index)
          }
        }
      })

      timeoutIds.current.add(id)
    },
    [
      descendants,
      enabledValues,
      focusedIndex,
      isMulti,
      omitSelectedValues,
      selectedIndexes,
    ],
  )

  const onFocusPrev = useCallback(
    (index: number = focusedIndex) => {
      const id = setTimeout(() => {
        const prev = descendants.enabledPrevValue(
          index,
          ({ node }) => "target" in node.dataset,
        )

        if (!prev) return

        if (!isMulti || !omitSelectedValues) {
          setFocusedIndex(prev.index)
        } else {
          if (selectedIndexes.includes(prev.index)) {
            const enabledPrev =
              enabledValues.reverse().find(({ index }) => index < prev.index) ??
              enabledValues[0]

            setFocusedIndex(enabledPrev.index)
          } else {
            setFocusedIndex(prev.index)
          }
        }
      })

      timeoutIds.current.add(id)
    },
    [
      descendants,
      enabledValues,
      focusedIndex,
      isMulti,
      omitSelectedValues,
      selectedIndexes,
    ],
  )

  const onFocusFirstOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusFirst : onFocusSelected
  const onFocusLastOrSelected =
    isEmptyValue || omitSelectedValues ? onFocusLast : onFocusSelected

  const pickOptions = useCallback(
    (value: string) => {
      const values = descendants.values()

      let isHit = false
      let isFocused = false

      values.forEach(({ node, index }) => {
        if (format(node.textContent ?? "").includes(value)) {
          isHit = true

          const isDisabled = "disabled" in node.dataset

          node.dataset.target = ""

          if (!isFocused && !isDisabled) {
            isFocused = true

            setFocusedIndex(index)
          }
        } else {
          delete node.dataset.target
        }
      })

      setIsHit(isHit)
    },
    [descendants, format],
  )

  const rebirthOptions = useCallback(
    (runFocus = true) => {
      const values = descendants.values()

      values.forEach(({ node }) => {
        node.dataset.target = ""
      })

      if (runFocus) onFocusFirst()

      setIsHit(true)
    },
    [descendants, onFocusFirst],
  )

  const getSelectedValues = useCallback(
    (newValues: string | string[]) => {
      const enabledValues = descendants.enabledValues()

      const resolvedValues = isArray(newValues) ? newValues : [newValues]

      const selectedValues = resolvedValues
        .map((value) => {
          const { node } =
            enabledValues.find(({ node }) => node.dataset.value === value) ?? {}

          if (node) {
            const el = Array.from(node.children).find(
              (child) => child.getAttribute("data-label") !== null,
            )

            return el?.textContent ?? undefined
          } else {
            return allowFree ? value : undefined
          }
        })
        .filter(Boolean) as string[]

      return selectedValues
    },
    [allowFree, descendants],
  )

  const onChangeLabel = useCallback(
    (newValue: string, { forceUpdate, runOmit = true }: ChangeOptions = {}) => {
      const selectedValues = getSelectedValues(newValue)

      if (!forceUpdate && !selectedValues.length) return

      setLabel((prev) => {
        if (!isMulti) {
          return selectedValues[0] as T
        } else {
          selectedValues.forEach((selectedValue) => {
            const isSelected =
              isArray(prev) && prev.includes(selectedValue ?? "")

            if (!isSelected) {
              prev = [...(isArray(prev) ? prev : []), selectedValue] as T
            } else if (runOmit) {
              prev = (
                isArray(prev)
                  ? prev.filter((value) => value !== selectedValue)
                  : undefined
              ) as T
            }
          })

          return prev
        }
      })
    },
    [getSelectedValues, isMulti],
  )

  const onChange = useCallback(
    (
      newValue: string,
      { forceUpdate, runRebirth = true }: ChangeOptions = {},
    ) => {
      setValue((prev) => {
        let next: T

        if (!isArray(prev)) {
          next = newValue as T
        } else {
          const isSelected = prev.includes(newValue)

          if (!isSelected) {
            next = [...prev, newValue] as T
          } else {
            next = prev.filter((value) => value !== newValue) as T
          }
        }

        prevValue.current = next
        return next
      })

      const isHit =
        descendants
          .values()
          .filter(({ node }) =>
            format(node.textContent ?? "").includes(newValue),
          ).length > 0

      onChangeLabel(newValue, { forceUpdate })

      if (allowFree || isHit) setInputValue("")

      if (isMulti && runRebirth) rebirthOptions(false)
    },
    [
      allowFree,
      isMulti,
      onChangeLabel,
      rebirthOptions,
      setValue,
      descendants,
      format,
    ],
  )

  const onSelect = useCallback(() => {
    let enabledValue = descendants.value(focusedIndex)

    if ("disabled" in (enabledValue?.node.dataset ?? {}))
      enabledValue = undefined

    if (!enabledValue) return

    const value = enabledValue.node.dataset.value ?? ""

    onChange(value)

    if (closeOnSelect) onClose()

    if (omitSelectedValues) onFocusNext()
  }, [
    closeOnSelect,
    descendants,
    focusedIndex,
    omitSelectedValues,
    onChange,
    onClose,
    onFocusNext,
  ])

  const onSearch = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      if (!isOpen) onOpen()

      onSearchProp?.(ev)

      const value = ev.target.value
      const computedValue = format(value)

      if (computedValue) {
        pickOptions(computedValue)
      } else {
        rebirthOptions()
      }

      setInputValue(value)
    },
    [isOpen, onOpen, format, onSearchProp, pickOptions, rebirthOptions],
  )

  const onCompositionStart = useCallback(() => {
    isComposition.current = true
  }, [])

  const onCompositionEnd = useCallback(() => {
    isComposition.current = false
  }, [])

  const onCreate = useCallback(() => {
    if (!listRef.current) return

    const newItem: AutocompleteItem = { label: inputValue, value: inputValue }

    let newItems: AutocompleteItem[] = []

    if (resolvedItems) newItems = [...resolvedItems]

    if (firstInsertPositionItem === "first") {
      newItems = [newItem, ...newItems]
    } else if (firstInsertPositionItem === "last") {
      newItems = [...newItems, newItem]
    } else {
      const i = newItems.findIndex(
        ({ label }) => label === firstInsertPositionItem,
      )

      const targetItem = newItems[i]

      if (i !== -1 && "items" in targetItem) {
        if (secondInsertPositionItem === "first") {
          targetItem.items = [newItem, ...(targetItem.items ?? [])]
        } else {
          targetItem.items = [...(targetItem.items ?? []), newItem]
        }

        newItems[i] = targetItem
      } else {
        console.warn(
          `${
            !isMulti ? "Autocomplete" : "MultiAutocomplete"
          }: '${firstInsertPositionItem}' specified in insertPositionItem does not exist in the option group.`,
        )
      }
    }

    setResolvedItems(newItems)
    onChange(inputValue)
    rebirthOptions(false)

    const index = flattenItems(newItems).findIndex(
      ({ value }) => value === inputValue,
    )

    setFocusedIndex(index)

    onCreateProp?.(newItem, newItems)
  }, [
    inputValue,
    resolvedItems,
    firstInsertPositionItem,
    onChange,
    rebirthOptions,
    onCreateProp,
    secondInsertPositionItem,
    isMulti,
  ])

  const onClick = useCallback(() => {
    if (isOpen) {
      if (inputRef.current) inputRef.current.focus()
    } else {
      onOpen()

      onFocusFirstOrSelected()
    }
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onFocus = useCallback(() => {
    if (isOpen) return

    onOpen()

    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur && isHit) return

      if (allowFree && !!inputValue) onChange(inputValue, { runRebirth: false })

      setInputValue("")

      if (isOpen) onClose()
    },
    [closeOnBlur, isHit, isOpen, inputValue, allowFree, onClose, onChange],
  )

  const onDelete = useCallback(() => {
    if (!isMulti) {
      onChange("", { forceUpdate: true })
    } else {
      onChange(value[value.length - 1])
    }

    if (!isOpen) onFocus()
  }, [isMulti, isOpen, onChange, onFocus, value])

  const onClear = useCallback(
    (ev: MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()

      prevValue.current = [] as unknown as T
      setValue([] as unknown as T)
      setLabel(undefined)
      setInputValue("")
      rebirthOptions()

      if (isOpen && inputRef.current) inputRef.current.focus()
    },
    [isOpen, setLabel, setInputValue, setValue, rebirthOptions],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      if (formControlProps.disabled || formControlProps.readOnly) return
      if (isComposition.current) return

      const enabledDelete = label === inputValue || !inputValue.length

      const actions: Record<string, Function | undefined> = {
        ArrowDown: isFocused
          ? () => onFocusNext()
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        ArrowUp: isFocused
          ? () => onFocusPrev()
          : !isOpen
            ? funcAll(onOpen, onFocusLastOrSelected)
            : undefined,
        Space: isCreate
          ? onCreate
          : isFocused
            ? onSelect
            : !isOpen
              ? funcAll(onOpen, onFocusFirstOrSelected)
              : undefined,
        Enter: isCreate
          ? onCreate
          : isFocused
            ? onSelect
            : !isOpen
              ? funcAll(onOpen, onFocusFirstOrSelected)
              : allowFree && isMulti
                ? () => {
                    if (inputValue) onChange(inputValue)

                    setFocusedIndex(0)
                  }
                : undefined,
        Home: isOpen ? onFocusFirst : undefined,
        End: isOpen ? onFocusLast : undefined,
        Escape: closeOnEsc ? onClose : undefined,
        Backspace: !isEmptyValue && enabledDelete ? onDelete : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()

      action(ev)
    },
    [
      allowFree,
      formControlProps,
      label,
      inputValue,
      onOpen,
      isFocused,
      isMulti,
      onFocusFirstOrSelected,
      onFocusNext,
      onFocusLastOrSelected,
      onFocusPrev,
      isCreate,
      onCreate,
      onSelect,
      isOpen,
      onFocusFirst,
      onFocusLast,
      closeOnEsc,
      onClose,
      isEmptyValue,
      onDelete,
      onChange,
    ],
  )

  useEffect(() => {
    if (!isMulti) return

    if (!omitSelectedValues && isUndefined(maxSelectValues)) return

    const isAll = value.length > 0 && value.length === descendants.count()
    const isMax = value.length === maxSelectValues

    if (isAll || isMax) {
      onClose()
      setIsAllSelected(true)
    } else {
      setIsAllSelected(false)
    }
  }, [
    omitSelectedValues,
    value,
    descendants,
    isMulti,
    onClose,
    maxSelectValues,
  ])

  useEffect(() => {
    if (isMulti) {
      if (
        JSON.stringify(prevValue.current ?? []) === JSON.stringify(value ?? [])
      )
        return

      const label = getSelectedValues(value)

      setLabel(label as T)
    } else {
      if (prevValue.current === value) return

      onChangeLabel(value, { runOmit: false })
    }
  }, [isMulti, value, onChangeLabel, getSelectedValues])

  useUpdateEffect(() => {
    if (isOpen || allowFree) return

    setFocusedIndex(-1)
    setInputValue("")
  }, [isOpen])

  useUpdateEffect(() => {
    if (!isHit) setFocusedIndex(-2)
  }, [isHit])

  useUpdateEffect(() => {
    setResolvedItems(items ? JSON.parse(JSON.stringify(items)) : undefined)
  }, [items])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: isOpen && (closeOnBlur || !isHit),
  })

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      closeOnBlur,
      openDelay,
      closeDelay,
      isLazy,
      lazyBehavior,
      animation,
      duration,
      offset,
      gutter,
      preventOverflow,
      flip,
      matchWidth,
      boundary,
      eventListeners,
      strategy,
      placement,
      modifiers,
      ...props,
      trigger: "never",
      closeOnButton: false,
      isOpen,
      onOpen,
      onClose,
    }),
    [
      closeOnBlur,
      openDelay,
      closeDelay,
      isLazy,
      lazyBehavior,
      animation,
      duration,
      offset,
      gutter,
      preventOverflow,
      flip,
      matchWidth,
      boundary,
      eventListeners,
      strategy,
      placement,
      modifiers,
      isOpen,
      onOpen,
      onClose,
    ],
  )

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
      onBlur: handlerAll(props.onBlur, rest.onBlur, onBlur),
    }),

    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getFieldProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      tabIndex: -1,
      ...props,
      ...formControlProps,
      placeholder,
      "data-active": dataAttr(isOpen),
      "aria-expanded": dataAttr(isOpen),
      onFocus: handlerAll(props.onFocus, onFocusProp, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDownProp, onKeyDown),
    }),
    [
      formControlProps,
      placeholder,
      isOpen,
      onFocusProp,
      onFocus,
      onKeyDownProp,
      onKeyDown,
    ],
  )

  return {
    id,
    descendants,
    value,
    label,
    inputValue,
    isHit,
    isEmpty,
    computedChildren,
    focusedIndex,
    omitSelectedValues,
    closeOnSelect,
    allowCreate,
    allowFree,
    emptyMessage,
    isOpen,
    isAllSelected,
    listRef,
    inputRef,
    optionProps,
    formControlProps,
    setFocusedIndex,
    onChangeLabel,
    onChange,
    onSearch,
    onCreate,
    onClear,
    onCompositionStart,
    onCompositionEnd,
    pickOptions,
    rebirthOptions,
    onOpen,
    onClose,
    onFocusFirst,
    onFocusLast,
    onFocusSelected,
    onFocusNext,
    onFocusPrev,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
    inputProps: inputProps as DOMAttributes<HTMLInputElement>,
  }
}

export type UseAutocompleteReturn = ReturnType<typeof useAutocomplete>

export const useAutocompleteInput = () => {
  const {
    id,
    inputRef,
    onSearch,
    onCompositionStart,
    onCompositionEnd,
    isAllSelected,
    formControlProps,
    inputProps,
    isOpen,
    focusedIndex,
    listRef,
  } = useAutocompleteContext()

  const { value } = useAutocompleteDescendantsContext()

  useUpdateEffect(() => {
    if (isAllSelected && inputRef.current) inputRef.current.blur()
  }, [isAllSelected])

  const getInputProps: UIPropGetter<"input"> = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(inputRef, ref),
      ...formControlProps,
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list",
      "aria-expanded": isOpen,
      "aria-activedescendant": value(focusedIndex)?.node.id,
      "aria-controls": listRef.current?.id,
      autoCapitalize: "none",
      autoComplete: "off",
      spellCheck: "false",
      ...inputProps,
      ...props,
      id,
      cursor: formControlProps.readOnly ? "default" : "text",
      pointerEvents:
        formControlProps.disabled || isAllSelected ? "none" : "auto",
      tabIndex: isAllSelected ? -1 : 0,
      onChange: handlerAll(props.onChange, onSearch),
      onCompositionStart: handlerAll(
        props.onCompositionStart,
        inputProps.onCompositionStart,
        onCompositionStart,
      ),
      onCompositionEnd: handlerAll(
        props.onCompositionEnd,
        inputProps.onCompositionEnd,
        onCompositionEnd,
      ),
    }),
    [
      listRef,
      focusedIndex,
      isOpen,
      inputProps,
      inputRef,
      formControlProps,
      id,
      isAllSelected,
      value,
      onSearch,
      onCompositionStart,
      onCompositionEnd,
    ],
  )

  return {
    getInputProps,
  }
}

export type UseAutocompleteInputReturn = ReturnType<typeof useAutocompleteInput>

export const useAutocompleteList = () => {
  const { focusedIndex, isOpen, listRef, rebirthOptions } =
    useAutocompleteContext()

  const descendants = useAutocompleteDescendantsContext()

  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)

  const onAnimationComplete = useCallback(() => {
    if (!isOpen) rebirthOptions(false)
  }, [isOpen, rebirthOptions])

  useEffect(() => {
    if (!listRef.current || !selectedValue) return

    if (beforeFocusedIndex.current === selectedValue.index) return

    const parent = listRef.current
    const child = selectedValue.node

    const parentHeight = parent.clientHeight
    const viewTop = parent.scrollTop
    const viewBottom = viewTop + parentHeight

    const childHeight = child.clientHeight
    const childTop = child.offsetTop
    const childBottom = childTop + childHeight

    const isInView = viewTop <= childTop && childBottom <= viewBottom

    const isScrollBottom = beforeFocusedIndex.current < selectedValue.index

    if (!isInView) {
      if (childBottom <= parentHeight) {
        listRef.current.scrollTo({ top: 0 })
      } else {
        if (!isScrollBottom) {
          listRef.current.scrollTo({ top: childTop + 1 })
        } else {
          listRef.current.scrollTo({ top: childBottom - parentHeight })
        }
      }
    }

    beforeFocusedIndex.current = selectedValue.index
  }, [listRef, selectedValue])

  useUpdateEffect(() => {
    if (!isOpen) beforeFocusedIndex.current = -1
  }, [isOpen])

  const getListProps: UIPropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      as: "ul",
      ref: mergeRefs(listRef, ref),
      role: "listbox",
      tabIndex: -1,
      position: "relative",
      id: props.id || useId(),
      ...props,
    }),
    [listRef],
  )

  return {
    onAnimationComplete,
    getListProps,
  }
}

export type UseAutocompleteOptionGroupProps = HTMLUIProps<"ul"> & {
  /**
   * The label of the autocomplete option group.
   */
  label: string
}

export const useAutocompleteOptionGroup = ({
  label,
  ...rest
}: UseAutocompleteOptionGroupProps) => {
  const { value, omitSelectedValues } = useAutocompleteContext()

  const isMulti = isArray(value)

  const descendants = useAutocompleteDescendantsContext()

  const values = descendants.values()
  const selectedValues =
    isMulti && omitSelectedValues
      ? descendants.values(({ node }) =>
          value.includes(node.dataset.value ?? ""),
        )
      : []
  const selectedIndexes = selectedValues.map(({ index }) => index)
  const childValues = values.filter(
    ({ node, index }) =>
      node.parentElement?.dataset.label === label &&
      !selectedIndexes.includes(index) &&
      "target" in node.dataset,
  )

  const isEmpty = !childValues.length

  const [containerProps, groupProps] = splitObject(rest, layoutStyleProperties)

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      }

      return {
        ref,
        ...props,
        ...containerProps,
        style: isEmpty ? style : undefined,
        "data-label": label,
        role: "autocomplete-group-container",
      }
    },
    [containerProps, isEmpty, label],
  )

  const getGroupProps: UIPropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      ref,
      ...props,
      ...groupProps,
      "data-label": label,
      role: "autocomplete-group",
    }),
    [groupProps, label],
  )

  return {
    label,
    getContainerProps,
    getGroupProps,
  }
}

export type UseAutocompleteOptionGroupReturn = ReturnType<
  typeof useAutocompleteOptionGroup
>

export type UseAutocompleteOptionProps = Omit<
  HTMLUIProps<"li">,
  "value" | "children"
> & {
  /**
   * The value of the select option.
   */
  value?: string
  /**
   * The label of the select option.
   */
  children?: string
  /**
   * If `true`, the select option will be disabled.
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * If `true`, the select option will be focusable.
   *
   * @default false
   */
  isFocusable?: boolean
  /**
   * If `true`, the list element will be closed when selected.
   *
   * @default false
   */
  closeOnSelect?: boolean
}

export const useAutocompleteOption = (props: UseAutocompleteOptionProps) => {
  const {
    value,
    omitSelectedValues,
    onChange,
    onChangeLabel,
    focusedIndex,
    setFocusedIndex,
    onClose,
    closeOnSelect: generalCloseOnSelect,
    optionProps,
    inputRef,
    onFocusNext,
  } = useAutocompleteContext()

  let {
    icon: customIcon,
    isDisabled,
    isFocusable,
    closeOnSelect: customCloseOnSelect,
    children,
    value: optionValue,
    ...computedProps
  } = { ...optionProps, ...props }

  const trulyDisabled = !!isDisabled && !isFocusable

  const itemRef = useRef<HTMLLIElement>(null)

  const { index, register, descendants } = useAutocompleteDescendant({
    disabled: trulyDisabled,
  })

  const values = descendants.values()
  const frontValues = values.slice(0, index)

  const isMulti = isArray(value)
  const isDuplicated = !isMulti
    ? frontValues.some(({ node }) => node.dataset.value === (optionValue ?? ""))
    : false

  const isSelected =
    !isDuplicated &&
    (!isMulti
      ? (optionValue ?? "") === value
      : value.includes(optionValue ?? ""))
  const isTarget = "target" in (itemRef.current?.dataset ?? {})
  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      ev.stopPropagation()

      if (isDisabled) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      if (!isTargetOption(ev.currentTarget)) {
        if (inputRef.current) inputRef.current.focus()

        return
      }

      setFocusedIndex(index)

      onChange(optionValue ?? "")

      if (inputRef.current) inputRef.current.focus()

      if (customCloseOnSelect ?? generalCloseOnSelect) onClose()

      if (omitSelectedValues) onFocusNext(index)
    },
    [
      onFocusNext,
      omitSelectedValues,
      isDisabled,
      optionValue,
      setFocusedIndex,
      index,
      onChange,
      customCloseOnSelect,
      generalCloseOnSelect,
      onClose,
      inputRef,
    ],
  )

  useUpdateEffect(() => {
    if (isSelected) onChangeLabel(optionValue ?? "", { runOmit: false })
  }, [optionValue])

  const getOptionProps: UIPropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      }

      return {
        ref: mergeRefs(itemRef, ref, register),
        id: useId(),
        role: "option",
        ...computedProps,
        ...props,
        tabIndex: -1,
        style:
          !isTarget || (omitSelectedValues && isSelected) ? style : undefined,
        "data-target": dataAttr(true),
        "data-value": optionValue ?? "",
        "data-focus": dataAttr(isFocused),
        "data-disabled": dataAttr(isDisabled),
        "aria-checked": isSelected,
        "aria-disabled": ariaAttr(isDisabled),
        onClick: handlerAll(computedProps.onClick, props.onClick, onClick),
      }
    },
    [
      optionValue,
      computedProps,
      isDisabled,
      isFocused,
      isSelected,
      isTarget,
      omitSelectedValues,
      onClick,
      register,
    ],
  )

  return {
    isSelected,
    isFocused,
    customIcon,
    children,
    getOptionProps,
  }
}

export type UseAutocompleteOptionReturn = ReturnType<
  typeof useAutocompleteOption
>

export const useAutocompleteCreate = () => {
  const { isHit, onCreate } = useAutocompleteContext()

  const getCreateProps: UIPropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      }

      return {
        ref,
        ...props,
        tabIndex: -1,
        style: isHit ? style : undefined,
        "data-focus": dataAttr(!isHit),
        onClick: handlerAll(props.onClick, onCreate),
      }
    },
    [isHit, onCreate],
  )

  return { getCreateProps }
}

export type UseAutocompleteCreateReturn = ReturnType<
  typeof useAutocompleteCreate
>

export const useAutocompleteEmpty = () => {
  const { isHit, isEmpty } = useAutocompleteContext()

  const getEmptyProps: UIPropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      const style: CSSProperties = {
        border: "0px",
        clip: "rect(0px, 0px, 0px, 0px)",
        height: "1px",
        width: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
      }

      return {
        ref,
        ...props,
        tabIndex: -1,
        style: isHit && !isEmpty ? style : undefined,
      }
    },
    [isHit, isEmpty],
  )

  return { getEmptyProps }
}

export type UseAutocompleteEmptyReturn = ReturnType<typeof useAutocompleteEmpty>
