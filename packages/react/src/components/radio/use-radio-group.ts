import type { ChangeEvent } from "react"
import type { PropGetter } from "../../core"
import type { Dict } from "../../utils"
import { useCallback, useId, useRef } from "react"
import { useControllableState } from "../../hooks/use-controllable-state"
import { isObject, mergeRefs, useCallbackRef } from "../../utils"

const isEvent = (value: any): value is { target: HTMLInputElement } =>
  value && isObject(value) && isObject(value.target)

export interface UseRadioGroupProps<Y extends number | string = string> {
  /**
   * The top-level id string that will be applied to the radios.
   * The index of the radio will be appended to this top-level id.
   */
  id?: string
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * The initial value of the radio group.
   */
  defaultValue?: Y
  /**
   * The value of the radio group.
   */
  value?: Y
  /**
   * The callback fired when any children radio is checked or unchecked.
   */
  onChange?: (value: Y) => void
}

export const useRadioGroup = <
  Y extends number | string,
  M extends Dict = Dict,
>({
  id,
  name,
  defaultValue,
  value: valueProp,
  onChange: onChangeProp,
  ...props
}: M & UseRadioGroupProps<Y>) => {
  const uuid = useId()

  id ??= uuid
  name ??= `radio-${id}`

  const containerRef = useRef<any>(null)
  const onChangeRef = useCallbackRef(onChangeProp)
  const [value, setValue] = useControllableState({
    defaultValue,
    value: valueProp,
    onChange: onChangeRef,
  })

  const onFocus = useCallback(() => {
    const container = containerRef.current

    if (!container) return

    let query = `input:not(:disabled):checked`

    let firstInput = container.querySelector(query) as HTMLElement | undefined

    if (firstInput) {
      firstInput.focus()
    } else {
      query = `input:not(:disabled)`
      firstInput = container.querySelector(query) as HTMLElement | undefined

      firstInput?.focus()
    }
  }, [])

  const onChange = useCallback(
    (evOrValue: ChangeEvent<HTMLInputElement> | Y) => {
      const nextValue = (
        isEvent(evOrValue) ? evOrValue.target.value : evOrValue
      ) as Y

      setValue(nextValue)
    },
    [setValue],
  )

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      role: "radiogroup",
      ...props,
      ref: mergeRefs(ref, containerRef),
    }),
    [],
  )

  const getRadioProps: PropGetter<
    { value?: Y },
    {
      checked?: boolean
      value?: Y
    }
  > = useCallback(
    (props = {}, ref = null) => {
      const checked = props.value === value

      return {
        ...props,
        ref,
        name,
        "aria-checked": checked,
        checked:
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          value != null ? checked : undefined,
        onChange,
      }
    },
    [name, value, onChange],
  )

  return {
    id,
    name,
    props,
    setValue,
    value,
    getContainerProps,
    getRadioProps,
    onChange,
    onFocus,
  }
}

export type UseRadioGroupReturn<Y extends number | string = string> =
  ReturnType<typeof useRadioGroup<Y>>
