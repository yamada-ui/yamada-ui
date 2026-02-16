"use client"

import type {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react"
import { useState } from "react"
import {
  isBoolean,
  isNull,
  isUndefined,
  runIfFn,
  useCallbackRef,
} from "../../utils"

interface UseControllableStateMethods<Y> {
  onChange?: (value: Y) => void
  onUpdate?: (prev: Y, next: Y) => boolean
}

export interface UseControllableStateProps<
  Y,
> extends UseControllableStateMethods<Y> {
  defaultValue?: (() => Y) | Y
  value?: Y
}

export function useControllableState<Y>(
  props: UseControllableStateMethods<Y> & {
    defaultValue?: (() => Y) | Y
    value: Y
  },
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: UseControllableStateMethods<Y> & {
    defaultValue: (() => Y) | Y
    value?: Y
  },
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>(
  props: UseControllableStateProps<Y>,
): [Y, Dispatch<SetStateAction<Y>>]

export function useControllableState<Y>({
  defaultValue: defaultValueProp,
  value,
  onChange: onChangeProp,
  onUpdate: onUpdateProp = (prev, next) => prev !== next,
}: UseControllableStateProps<Y>) {
  const onChange = useCallbackRef(onChangeProp)
  const onUpdate = useCallbackRef(onUpdateProp)
  const [defaultValue, setDefaultValue] = useState(defaultValueProp)
  const controlled = !isUndefined(value)
  const currentValue = (controlled ? value : defaultValue) as Y

  const setValue = useCallbackRef(
    (next: SetStateAction<Y>) => {
      const nextValue = runIfFn(next, currentValue)

      if (!onUpdate(currentValue, nextValue)) return

      if (!controlled || isUndefined(nextValue) || isNull(nextValue))
        setDefaultValue(nextValue)

      onChange(nextValue)
    },
    [controlled, currentValue, onChange, onUpdate],
  )

  return [currentValue, setValue]
}

function isHTMLInputElement(el: HTMLElement): el is HTMLInputElement {
  return el instanceof HTMLInputElement
}

interface UseControllableEventStateMethods<
  Y extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
> {
  onChange?: ChangeEventHandler<Y>
}

export interface UseControllableEventStateProps<
  Y extends boolean | number | string,
  M extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
> extends UseControllableEventStateMethods<M> {
  defaultValue?: (() => Y) | Y
  value?: Y
}

export function useControllableEventState<
  Y extends boolean | number | string,
  M extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
>(
  props: UseControllableEventStateMethods<M> & {
    defaultValue?: (() => Y) | Y
    value: Y
  },
): [Y, ChangeEventHandler<M>]

export function useControllableEventState<
  Y extends boolean | number | string,
  M extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
>(
  props: UseControllableEventStateMethods<M> & {
    defaultValue: (() => Y) | Y
    value?: Y
  },
): [Y, ChangeEventHandler<M>]

export function useControllableEventState<
  Y extends boolean | number | string,
  M extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
>(props: UseControllableEventStateProps<Y, M>): [Y, ChangeEventHandler<M>]

export function useControllableEventState<
  Y extends boolean | number | string,
  M extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
>({
  defaultValue: defaultValueProp,
  value,
  onChange: onChangeProp,
}: UseControllableEventStateProps<Y, M>) {
  const onChange = useCallbackRef(onChangeProp)
  const [defaultValue, setDefaultValue] = useState(defaultValueProp)
  const controlled = !isUndefined(value)
  const currentValue = (controlled ? value : defaultValue) as Y
  const boolean = isBoolean(currentValue)

  const setValue = useCallbackRef(
    (ev: ChangeEvent<M>) => {
      const value =
        boolean && isHTMLInputElement(ev.target)
          ? (ev.target.checked as Y)
          : (ev.target.value as Y)

      if (!controlled || isUndefined(value) || isNull(value)) {
        setDefaultValue(value)
      }

      onChange(ev)
    },
    [controlled, currentValue, onChange],
  )

  return [currentValue, setValue]
}
