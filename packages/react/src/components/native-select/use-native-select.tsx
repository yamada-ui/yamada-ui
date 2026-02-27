"use client"

import type { ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field"
import { cloneElement, useCallback, useMemo } from "react"
import { ariaAttr, handlerAll, mergeRefs } from "../../utils"
import { useFieldProps } from "../field"

interface NativeSelectSharedItem extends Omit<
  HTMLProps<"option">,
  "children" | "label" | "value"
> {
  label: string
}

interface NativeSelectItemWithValue extends NativeSelectSharedItem {
  value?: HTMLProps<"option">["value"]
}

interface NativeSelectItemWithItems extends NativeSelectSharedItem {
  items: NativeSelectItemWithValue[]
}

export type NativeSelectItem =
  | NativeSelectItemWithItems
  | NativeSelectItemWithValue

export interface UseNativeSelectProps extends HTMLProps<"select">, FieldProps {
  /**
   * If `true`, include placeholder in options.
   *
   * @default true
   */
  includePlaceholder?: boolean
  /**
   * If provided, generate options based on items.
   *
   * @default []
   */
  items?: NativeSelectItem[]
  /**
   * The placeholder for select.
   */
  placeholder?: string
}

export const useNativeSelect = (props: UseNativeSelectProps = {}) => {
  const {
    props: {
      children,
      disabled,
      includePlaceholder = true,
      items = [],
      placeholder,
      readOnly,
      ...rest
    },
    ariaProps,
    dataProps,
    eventProps,
  } = useFieldProps(props)
  const interactive = !(readOnly || disabled)

  const computedChildren = useMemo(() => {
    let computedChildren: ReactNode = null

    if (children) {
      computedChildren = children
    } else if (items.length) {
      computedChildren = items.map((item, index) => {
        if ("items" in item) {
          const { items = [], label, ...rest } = item

          return cloneElement(<optgroup />, {
            key: index,
            children: items.map(({ label, ...rest }, index) =>
              cloneElement(<option />, {
                key: index,
                children: label,
                ...rest,
              }),
            ),
            label,
            ...rest,
          })
        } else {
          const { label, ...rest } = item

          return cloneElement(<option />, {
            key: index,
            children: label,
            ...rest,
          })
        }
      })
    }

    return (
      <>
        {placeholder ? (
          <option hidden={!includePlaceholder} value="">
            {placeholder}
          </option>
        ) : null}

        {computedChildren}
      </>
    )
  }, [children, items, placeholder, includePlaceholder])

  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  const getFieldProps: PropGetter<"select"> = useCallback(
    ({ ref, ...props } = {}) => ({
      disabled,
      readOnly,
      tabIndex: interactive ? undefined : -1,
      ...ariaProps,
      ...dataProps,
      "aria-disabled": ariaAttr(!interactive),
      "aria-label": placeholder,
      ...rest,
      ...props,
      ref: mergeRefs(ref, rest.ref),
      children: props.children ?? computedChildren,
      onBlur: handlerAll(eventProps.onBlur, props.onBlur),
      onFocus: handlerAll(eventProps.onFocus, props.onFocus),
    }),
    [
      interactive,
      ariaProps,
      computedChildren,
      dataProps,
      eventProps,
      rest,
      placeholder,
      disabled,
      readOnly,
    ],
  )

  const getIconProps: PropGetter = useCallback(
    (props) => ({ ...dataProps, ...props }),
    [dataProps],
  )

  return { getFieldProps, getIconProps, getRootProps }
}

export type UseNativeSelectReturn = ReturnType<typeof useNativeSelect>
