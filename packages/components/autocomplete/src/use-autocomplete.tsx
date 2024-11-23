import type { HTMLUIProps, PropGetter } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { Union } from "@yamada-ui/utils"
import type {
  ChangeEvent,
  DOMAttributes,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
} from "react"
import type { AutocompleteOptionProps } from "./autocomplete-option"
import type { AutocompleteOptionGroupProps } from "./autocomplete-option-group"
import { layoutStyleProperties } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { useControllableState } from "@yamada-ui/use-controllable-state"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
import {
  dataAttr,
  funcAll,
  getEventRelatedTarget,
  getValidChildren,
  handlerAll,
  isArray,
  isContains,
  isUndefined,
  mergeRefs,
  pickObject,
  splitObject,
  useSafeLayoutEffect,
  useUnmountEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  useAutocompleteContext,
  useAutocompleteDescendants,
} from "./autocomplete-context"
import { AutocompleteOption } from "./autocomplete-option"
import { AutocompleteOptionGroup } from "./autocomplete-option-group"

interface AutocompleteItemWithValue extends AutocompleteOptionProps {
  label?: string
  value?: string
}

interface AutocompleteItemWithItems
  extends AutocompleteOptionGroupProps,
    Pick<
      AutocompleteOptionProps,
      "disabled" | "focusable" | "isDisabled" | "isFocusable"
    > {
  items?: AutocompleteItemWithValue[]
}

export type AutocompleteItem =
  | AutocompleteItemWithItems
  | AutocompleteItemWithValue

type MaybeValue = string | string[]

const kanaMap: { [key: string]: string } = {
  "｡": "。",
  "｢": "「",
  "｣": "」",
  "､": "、",
  "･": "・",
  ｦ: "ヲ",
  ｦﾞ: "ヺ",
  ｧ: "ァ",
  ｨ: "ィ",
  ｩ: "ゥ",
  ｪ: "ェ",
  ｫ: "ォ",
  ｬ: "ャ",
  ｭ: "ュ",
  ｮ: "ョ",
  ｯ: "ッ",
  ｰ: "ー",
  ｱ: "ア",
  ｲ: "イ",
  ｳ: "ウ",
  ｳﾞ: "ヴ",
  ｴ: "エ",
  ｵ: "オ",
  ｶ: "カ",
  ｶﾞ: "ガ",
  ｷ: "キ",
  ｷﾞ: "ギ",
  ｸ: "ク",
  ｸﾞ: "グ",
  ｹ: "ケ",
  ｹﾞ: "ゲ",
  ｺ: "コ",
  ｺﾞ: "ゴ",
  ｻ: "サ",
  ｻﾞ: "ザ",
  ｼ: "シ",
  ｼﾞ: "ジ",
  ｽ: "ス",
  ｽﾞ: "ズ",
  ｾ: "セ",
  ｾﾞ: "ゼ",
  ｿ: "ソ",
  ｿﾞ: "ゾ",
  ﾀ: "タ",
  ﾀﾞ: "ダ",
  ﾁ: "チ",
  ﾁﾞ: "ヂ",
  ﾂ: "ツ",
  ﾂﾞ: "ヅ",
  ﾃ: "テ",
  ﾃﾞ: "デ",
  ﾄ: "ト",
  ﾄﾞ: "ド",
  ﾅ: "ナ",
  ﾆ: "ニ",
  ﾇ: "ヌ",
  ﾈ: "ネ",
  ﾉ: "ノ",
  ﾊ: "ハ",
  ﾊﾞ: "バ",
  ﾊﾟ: "パ",
  ﾋ: "ヒ",
  ﾋﾞ: "ビ",
  ﾋﾟ: "ピ",
  ﾌ: "フ",
  ﾌﾞ: "ブ",
  ﾌﾟ: "プ",
  ﾍ: "ヘ",
  ﾍﾞ: "ベ",
  ﾍﾟ: "ペ",
  ﾎ: "ホ",
  ﾎﾞ: "ボ",
  ﾎﾟ: "ポ",
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
  ﾜﾞ: "ヷ",
  ﾝ: "ン",
}

const defaultFormat = (value: string) => {
  value = value.replace(/[！-～]/g, (v) =>
    String.fromCharCode(v.charCodeAt(0) - 0xfee0),
  )

  const reg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g")

  value = value
    .replace(reg, (v) => kanaMap[v]!)
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
        const { disabled, focusable } = item
        const trulyDisabled = !!disabled && !focusable

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

interface UseAutocompleteBaseProps<T extends MaybeValue = string>
  extends ComboBoxProps,
    FormControlOptions {
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
   * If `true`, the list element will be closed when value is selected.
   *
   * @default true
   */
  closeOnSelect?: boolean
  /**
   * The initial value of the autocomplete.
   */
  defaultValue?: T
  /**
   * The message displayed when the search yields no hits.
   *
   * @default 'No results found'
   */
  emptyMessage?: string
  /**
   * Function to format text when search input.
   */
  format?: (value: string) => string
  /**
   * The position to be inserted when the autocomplete option is created.
   *
   * @default 'first'
   */
  insertPositionItem?: [string, "first" | "last"] | Union<"first" | "last">
  /**
   * If provided, generate options based on items.
   */
  items?: AutocompleteItem[]
  /**
   * The maximum selectable value.
   */
  maxSelectValues?: number
  /**
   * If `true`, the selected item(s) will be excluded from the list.
   *
   * @default false
   */
  omitSelectedValues?: boolean
  /**
   * The value of the autocomplete.
   */
  value?: T
  /**
   * Props for select option element.
   */
  optionProps?: Omit<AutocompleteOptionProps, "children" | "value">
  /**
   * The callback invoked when value state changes.
   */
  onChange?: (value: T) => void
  /**
   * The callback invoked when autocomplete option created.
   */
  onCreate?: (newItem: AutocompleteItem, newItems: AutocompleteItem[]) => void
  /**
   * The callback invoked when search input.
   */
  onSearch?: (ev: ChangeEvent<HTMLInputElement>) => void
}

export interface UseAutocompleteProps<T extends MaybeValue = string>
  extends Omit<
      HTMLUIProps<"input">,
      | "disabled"
      | "list"
      | "readOnly"
      | "required"
      | "size"
      | keyof UseAutocompleteBaseProps
    >,
    UseAutocompleteBaseProps<T> {}

export const useAutocomplete = <T extends MaybeValue = string>(
  props: UseAutocompleteProps<T>,
) => {
  const {
    allowCreate = false,
    allowFree = false,
    animation,
    boundary,
    children,
    closeDelay,
    closeOnBlur = true,
    closeOnEsc = true,
    closeOnSelect = true,
    defaultIsOpen,
    defaultValue,
    duration = 0.2,
    emptyMessage = "No results found",
    eventListeners,
    flip,
    format = defaultFormat,
    gutter,
    insertPositionItem = "first",
    isLazy,
    isOpen: isOpenProp,
    items,
    lazyBehavior,
    matchWidth = true,
    maxSelectValues,
    modifiers,
    offset,
    omitSelectedValues = false,
    openDelay,
    placeholder,
    placement = "bottom-start",
    preventOverflow,
    strategy,
    value: valueProp,
    optionProps,
    onChange: onChangeProp,
    onClose: onCloseProp,
    onCreate: onCreateProp,
    onKeyDown: onKeyDownProp,
    onOpen: onOpenProp,
    onSearch: onSearchProp,
    ...rest
  } = useFormControlProps(props)
  const descendants = useAutocompleteDescendants()
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))
  const isComposition = useRef<boolean>(false)
  const prevValue = useRef<T | undefined>(undefined)
  const [resolvedItems, setResolvedItems] = useState<
    AutocompleteItem[] | undefined
  >(items ? JSON.parse(JSON.stringify(items)) : undefined)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeProp,
  })
  const [label, setLabel] = useState<T | undefined>(undefined)
  const [inputValue, setInputValue] = useState<string>("")
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false)
  const [isHit, setIsHit] = useState<boolean>(true)
  const {
    isOpen,
    onClose,
    onOpen: onInternalOpen,
  } = useDisclosure({
    defaultIsOpen,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  })
  const {
    "aria-readonly": _ariaReadonly,
    onFocus: onFocusProp,
    ...formControlProps
  } = pickObject(rest, formControlProperties)
  const [containerProps, inputProps] = splitObject(rest, layoutStyleProperties)

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
    ({ index, node }) =>
      "target" in node.dataset && !selectedIndexes.includes(index),
  )
  const activedescendantId = descendants.value(focusedIndex)?.node.id
  const validChildren = getValidChildren(children)

  const computedChildren = useMemo(
    () =>
      resolvedItems
        ?.map((item, index) => {
          if ("value" in item) {
            const { label, value, ...props } = item

            return (
              <AutocompleteOption key={index} value={value} {...props}>
                {label}
              </AutocompleteOption>
            )
          } else if ("items" in item) {
            const { items = [], label, ...props } = item

            return (
              <AutocompleteOptionGroup
                key={index}
                label={label as string}
                {...props}
              >
                {items.map(({ label, value, ...props }, index) => (
                  <AutocompleteOption key={index} value={value} {...props}>
                    {label}
                  </AutocompleteOption>
                ))}
              </AutocompleteOptionGroup>
            )
          }
        })
        .filter(Boolean) as ReactElement[] | undefined,
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

          setFocusedIndex(enabledFirst?.index ?? -1)
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

          setFocusedIndex(enabledLast?.index ?? -1)
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

            setFocusedIndex(enabledNext?.index ?? -1)
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

            setFocusedIndex(enabledPrev?.index ?? -1)
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

      values.forEach(({ index, node }) => {
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

  const onChangeLabel = useCallback(
    (newValue: MaybeValue) => {
      const values = descendants.values()

      if (!values.length) return

      const resolvedValues = isArray(newValue) ? newValue : [newValue]

      const selectedLabel = resolvedValues
        .map((value) => {
          const { node } =
            values.find(({ node }) => node.dataset.value === value) ?? {}

          if (node) {
            const { textContent } =
              Array.from(node.children).find(
                (child) => child.getAttribute("data-label") !== null,
              ) ?? {}

            return textContent
          } else {
            return allowFree ? value : undefined
          }
        })
        .filter((label) => !isUndefined(label))

      setLabel((!isMulti ? selectedLabel[0] : selectedLabel) as T)
    },
    [allowFree, descendants, isMulti],
  )

  const onChange = useCallback(
    (newValue: string, runRebirth = true) => {
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

      setInputValue("")

      if (isMulti && runRebirth) rebirthOptions(false)
    },
    [isMulti, rebirthOptions, setValue],
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

      if (i !== -1 && targetItem && "items" in targetItem) {
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

      if (allowFree && !!inputValue) onChange(inputValue, false)

      setInputValue("")

      if (isOpen) onClose()
    },
    [closeOnBlur, isHit, isOpen, inputValue, allowFree, onClose, onChange],
  )

  const onDelete = useCallback(() => {
    if (!isMulti) {
      onChange("")
    } else {
      onChange(value[value.length - 1]!)
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

      const actions: { [key: string]: Function | undefined } = {
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
        Backspace: !isEmptyValue && enabledDelete ? onDelete : undefined,
        End: isOpen ? onFocusLast : undefined,
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
        Escape: closeOnEsc ? onClose : undefined,
        Home: isOpen ? onFocusFirst : undefined,
        Space: isCreate
          ? onCreate
          : isFocused
            ? onSelect
            : !isOpen
              ? funcAll(onOpen, onFocusFirstOrSelected)
              : undefined,
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

  useSafeLayoutEffect(() => {
    onChangeLabel(value)
  }, [value])

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
    enabled: isOpen && (closeOnBlur || !isHit),
    handler: onClose,
  })

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      animation,
      boundary,
      closeDelay,
      closeOnBlur,
      duration,
      eventListeners,
      flip,
      gutter,
      isLazy,
      lazyBehavior,
      matchWidth,
      modifiers,
      offset,
      openDelay,
      placement,
      preventOverflow,
      strategy,
      ...props,
      closeOnButton: false,
      isOpen,
      trigger: "never",
      onClose,
      onOpen,
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

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onBlur: handlerAll(props.onBlur, rest.onBlur, onBlur),
      onClick: handlerAll(props.onClick, rest.onClick, onClick),
    }),

    [containerProps, formControlProps, onBlur, onClick, rest],
  )

  const getFieldProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref,
      "aria-activedescendant": activedescendantId,
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      role: "combobox",
      tabIndex: -1,
      ...props,
      ...formControlProps,
      "data-active": dataAttr(isOpen),
      placeholder,
      onFocus: handlerAll(props.onFocus, onFocusProp, onFocus),
      onKeyDown: handlerAll(props.onKeyDown, onKeyDownProp, onKeyDown),
    }),
    [
      activedescendantId,
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
    allowCreate,
    allowFree,
    children: children ?? computedChildren,
    closeOnSelect,
    descendants,
    emptyMessage,
    focusedIndex,
    inputRef,
    inputValue,
    isAllSelected,
    isEmpty,
    isHit,
    isOpen,
    label,
    omitSelectedValues,
    pickOptions,
    rebirthOptions,
    setFocusedIndex,
    value,
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
    inputProps: inputProps as DOMAttributes<HTMLInputElement>,
    optionProps,
    onChange,
    onClear,
    onClose,
    onCompositionEnd,
    onCompositionStart,
    onCreate,
    onFocusFirst,
    onFocusLast,
    onFocusNext,
    onFocusPrev,
    onFocusSelected,
    onOpen,
    onSearch,
  }
}

export type UseAutocompleteReturn = ReturnType<typeof useAutocomplete>

export const useAutocompleteInput = () => {
  const {
    inputRef,
    isAllSelected,
    formControlProps,
    inputProps,
    onCompositionEnd,
    onCompositionStart,
    onSearch,
  } = useAutocompleteContext()

  useUpdateEffect(() => {
    if (isAllSelected && inputRef.current) inputRef.current.blur()
  }, [isAllSelected])

  const getInputProps: PropGetter<"input"> = useCallback(
    (props = {}, ref = null) => {
      return {
        ref: mergeRefs(inputRef, ref),
        ...formControlProps,
        autoCapitalize: "none",
        autoComplete: "off",
        spellCheck: "false",
        tabIndex: isAllSelected ? -1 : 0,
        ...inputProps,
        ...props,
        cursor: formControlProps.readOnly ? "default" : "text",
        pointerEvents:
          formControlProps.disabled || isAllSelected ? "none" : "auto",
        onChange: handlerAll(props.onChange, onSearch),
        onCompositionEnd: handlerAll(
          props.onCompositionEnd,
          inputProps.onCompositionEnd,
          onCompositionEnd,
        ),
        onCompositionStart: handlerAll(
          props.onCompositionStart,
          inputProps.onCompositionStart,
          onCompositionStart,
        ),
      }
    },
    [
      inputProps,
      inputRef,
      formControlProps,
      isAllSelected,
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
