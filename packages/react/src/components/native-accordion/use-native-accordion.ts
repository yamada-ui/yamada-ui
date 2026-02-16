"use client"

import type { HTMLProps, PropGetter } from "../../core"
import { useCallback, useId } from "react"
import {
  ariaAttr,
  createContext,
  dataAttr,
  handlerAll,
  mergeRefs,
} from "../../utils"

interface NativeAccordionContext extends Pick<
  UseNativeAccordionReturn,
  "name"
> {}

const [NativeAccordionContext, useNativeAccordionContext] =
  createContext<NativeAccordionContext>({
    name: "NativeAccordionContext",
  })

export { NativeAccordionContext, useNativeAccordionContext }

export interface UseNativeAccordionProps extends HTMLProps {
  /**
   * The HTML `name` attribute used for forms.
   */
  name?: string
  /**
   * If `true`, multiple accordion items can be expanded at once.
   *
   * @default false
   */
  multiple?: boolean
}

export const useNativeAccordion = ({
  name,
  multiple = false,
  ...rest
}: UseNativeAccordionProps = {}) => {
  const generatedName = useId()

  const getRootProps: PropGetter = ({ ref, ...props } = {}) => ({
    ...props,
    ...rest,
    ref: mergeRefs(ref, rest.ref),
  })

  return {
    name: multiple ? undefined : (name ?? generatedName),
    getRootProps,
  }
}

export type UseNativeAccordionReturn = ReturnType<typeof useNativeAccordion>

export interface UseNativeAccordionItemProps extends HTMLProps<"details"> {
  /**
   * If `true`, the accordion item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
}

export const useNativeAccordionItem = ({
  disabled,
  ...rest
}: UseNativeAccordionItemProps) => {
  const { name } = useNativeAccordionContext()

  const getItemProps: PropGetter<"details"> = ({ ref, ...props } = {}) => ({
    ref: mergeRefs(ref, rest.ref),
    name: props.name ?? rest.name ?? name,
    role: "group",
    ...rest,
    ...props,
  })

  const getButtonProps: PropGetter<"summary"> = useCallback(
    (props = {}) => ({
      "aria-disabled": ariaAttr(disabled),
      "data-disabled": dataAttr(disabled),
      ...props,
      onClick: handlerAll(props.onClick, (ev) => {
        if (!disabled) return

        ev.preventDefault()
      }),
    }),
    [disabled],
  )

  const getPanelProps: PropGetter = useCallback((props = {}) => props, [])

  const getIconProps: PropGetter<"svg"> = useCallback(
    (props = {}) => ({
      "aria-disabled": ariaAttr(disabled),
      "aria-hidden": true,
      role: "presentation",
      ...props,
    }),
    [disabled],
  )

  return {
    disabled,
    getButtonProps,
    getIconProps,
    getItemProps,
    getPanelProps,
  }
}

export type UseNativeAccordionItemReturn = ReturnType<
  typeof useNativeAccordionItem
>
