"use client"

import type { ReactNode } from "react"
import type { HTMLProps, PropGetter } from "../../core"
import type { FieldProps } from "../field/field"
import { cloneElement, useCallback, useMemo } from "react"
import { ariaAttr, handlerAll } from "../../utils"
import { mergeRefs } from "../../utils"
import { useFieldProps } from "../field"

interface NativeSelectSharedItem
  extends Omit<HTMLProps<"option">, "children" | "label" | "value"> {
  label?: string
}

interface NativeSelectItemWithValue extends NativeSelectSharedItem {
  value?: HTMLProps<"option">["value"]
}

interface NativeSelectItemWithItems extends NativeSelectSharedItem {
  items?: NativeSelectItemWithValue[]
}

export type NativeSelectItem =
  | NativeSelectItemWithItems
  | NativeSelectItemWithValue

export interface UseNativeSelectProps extends HTMLProps<"select">, FieldProps {
  /**
   * If provided, generate options based on items.
   *
   * @default '[]'
   */
  items?: NativeSelectItem[]
  /**
   * The placeholder for select.
   */
  placeholder?: string
  /**
   * If `true`, include placeholders in options.
   *
   * @default true
   */
  placeholderInOptions?: boolean
}

export const useNativeSelect = (props: UseNativeSelectProps = {}) => {
  const {
    props: {
      children,
      disabled,
      items = [],
      placeholder,
      placeholderInOptions = true,
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
        if ("value" in item) {
          const { label, ...props } = item

          return cloneElement(<option />, {
            key: index,
            children: label,
            ...props,
          })
        } else if ("items" in item) {
          const { items = [], label, ...props } = item

          return cloneElement(<optgroup />, {
            key: index,
            children: items.map(({ label, ...props }, index) =>
              cloneElement(<option />, {
                key: index,
                children: label,
                ...props,
              }),
            ),
            label,
            ...props,
          })
        }
      })
    }

    return (
      <>
        {placeholder ? (
          <option hidden={!placeholderInOptions} value="">
            {placeholder}
          </option>
        ) : null}

        {computedChildren}
      </>
    )
  }, [children, items, placeholder, placeholderInOptions])

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...dataProps,
      ...props,
    }),
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
    (props) => ({
      ...dataProps,
      ...props,
    }),
    [dataProps],
  )

  return { getFieldProps, getIconProps, getRootProps }
}

export type UseNativeSelectReturn = ReturnType<typeof useNativeSelect>
