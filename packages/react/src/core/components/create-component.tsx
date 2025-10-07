"use client"

import type { FC, FunctionComponent } from "react"
import type { AnyString, Dict, Merge } from "../../utils"
import type { CSSObject, CSSSlotObject } from "../css"
import type {
  ComponentSlotStyle,
  ComponentStyle,
  StyledOptions,
  System,
  WithoutThemeProps,
} from "../system"
import type {
  As,
  DOMElement,
  HTMLStyledProps,
  Component as OriginalComponent,
} from "./index.types"
import { Fragment } from "react"
import {
  createContext,
  cx,
  isArray,
  isFunction,
  isObject,
  isString,
  runIfFn,
  toArray,
  toCamelCase,
  toPascalCase,
} from "../../utils"
import { styled, useSystem } from "../system"
import { chainProps, mergeProps } from "./props"
import {
  getSlotClassName,
  mergeSlotCSS,
  useComponentSlotStyle,
  useComponentStyle,
} from "./use-component-style"
import { getClassName, getDisplayName } from "./utils"

type AsWithFragment = "fragment" | As
type ClassName = ((system: System) => string) | string

type Component<
  Y extends AsWithFragment = AsWithFragment,
  M extends object = {},
> = Y extends "fragment"
  ? FunctionComponent<M>
  : OriginalComponent<Exclude<Y, "fragment">, M>

export type ComponentSlotName<
  Y extends ComponentSlotStyle | ComponentStyle = ComponentSlotStyle,
> = AnyString | Extract<keyof Required<Y>["base"], string>

export type ComponentSlot<Y extends string> =
  | [Y, Y]
  | Y
  | { name: string; slot: [Y, Y] | Y }

export type InitialProps<Y extends Dict = Dict> =
  | ((props: Y) => any)
  | Partial<Y>
export type SuperProps<Y extends Dict = Dict> = ((props: Y) => any) | Y

export type SuperWithoutThemeProps<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends keyof Y = keyof Y,
> = ((props: WithoutThemeProps<Y, M, D>) => any) | WithoutThemeProps<Y, M, D>

export interface UseComponentPropsOptions<
  Y extends number | string | symbol = string,
> {
  className?: ClassName
  withContext?: boolean
  transferProps?: Y[]
}

export interface ComponentOptions extends Omit<StyledOptions, "transferProps"> {
  className?: ClassName
  shouldStyleProps?: boolean
}

interface classNameOptions<Y extends string = string> {
  className?: ClassName
  slot?: ComponentSlot<Y>
}

export interface ComponentWithContextOptions<
  Y extends number | string | symbol = string,
> extends ComponentOptions,
    UseComponentPropsOptions<Y> {}

function createProxyComponent<
  Y extends AsWithFragment = "div",
  M extends Dict = Dict,
>(el: FC<M> | Y, { shouldStyleProps, ...options }: ComponentOptions = {}) {
  options.shouldForwardProp ??= isFunction(el)
  shouldStyleProps ??= !isFunction(el)

  if (el === "fragment") el = Fragment

  if (shouldStyleProps || isString(el)) {
    const ProxyComponent = styled(el as As, options)

    ProxyComponent.displayName = "ProxyComponent"

    return ProxyComponent
  } else {
    el.displayName ??= "ProxyComponent"

    return el as FC<M>
  }
}

function withDisplayName<
  Y extends AsWithFragment = AsWithFragment,
  M extends object = {},
>(Component: FC<M>, displayName: string) {
  Object.defineProperty(Component, "name", { value: displayName })
  Object.defineProperty(Component, "displayName", { value: displayName })

  return Component as Component<Y, M>
}

function getSlotKey<Y extends string>(slot?: ComponentSlot<Y>) {
  if (!slot) return "unknown"

  if (isArray(slot) || !isObject(slot)) {
    return toCamelCase(toArray(slot).join("-"))
  } else {
    return toCamelCase(slot.name)
  }
}

function getSlotName<Y extends string>(slot?: ComponentSlot<Y>) {
  if (!slot) return ""

  if (isArray(slot)) {
    return slot.map((value) => toPascalCase(value as string)).join("")
  } else if (isObject(slot)) {
    return toPascalCase(slot.name)
  } else {
    return toPascalCase(slot as string)
  }
}

export function createComponent<
  Y extends object = {},
  M extends ComponentStyle = Dict,
  D extends Dict = Dict,
>(name: string, style?: M) {
  const defaultClassName = style?.className
  const defaultDisplayName = getDisplayName(name)
  const [ComponentContext, useComponentContext] = createContext<D>({
    name: `${defaultDisplayName}Context`,
  })
  const [PropsContext, usePropsContext] = createContext<Partial<Y>>({
    name: `${defaultDisplayName}PropsContext`,
    strict: false,
  })

  function useClassName(name?: string, className?: ClassName) {
    const system = useSystem()

    className = runIfFn(className, system)
    className ??= getClassName(name, defaultClassName)(system)

    return className
  }

  function useComponentProps<H extends Y = Y, R extends keyof H = keyof H>(
    props: H,
    {
      className,
      withContext = true,
      transferProps,
    }: UseComponentPropsOptions<R> = {},
  ) {
    const system = useSystem()

    className = runIfFn(className, system)
    className ??= defaultClassName
    className ??= getClassName(name)(system)

    const contextProps = usePropsContext() ?? {}
    const mergedProps = withContext ? mergeProps(contextProps, props)() : props
    const [, rest] = useComponentStyle(mergedProps, {
      className,
      style,
      transferProps,
    })

    return rest
  }

  function component<D extends AsWithFragment = "div", H extends Dict = Y>(
    el: D | FC<H>,
    { name, className, ...options }: ComponentOptions = {},
  ) {
    const displayName = getDisplayName(name, defaultDisplayName)
    const ProxyComponent = createProxyComponent(el, options)

    return function (...superProps: SuperProps<H>[]) {
      return withDisplayName<D, H>((props) => {
        className = useClassName(name, className)

        const mergedProps = chainProps<any>(...superProps)()(props)

        return (
          <ProxyComponent
            {...mergedProps}
            className={cx(className, mergedProps.className)}
          />
        )
      }, displayName)
    }
  }

  function withContext<
    D extends AsWithFragment = "div",
    H extends Y = Y,
    R extends keyof H = keyof H,
  >(
    el: D | FC<WithoutThemeProps<H, M, R>>,
    {
      name,
      className,
      withContext,
      transferProps,
      ...options
    }: ComponentWithContextOptions<R> = {},
  ) {
    const displayName = getDisplayName(name, defaultDisplayName)
    const ProxyComponent = createProxyComponent(el, options)

    return function (
      initialProps?: InitialProps<H>,
      ...superProps: SuperWithoutThemeProps<H, M, R>[]
    ) {
      return withDisplayName<D, H>((props) => {
        className = useClassName(name, className)

        const computedProps = isFunction(initialProps)
          ? initialProps(props)
          : mergeProps(initialProps ?? {}, props)()
        const mergedProps = useComponentProps(computedProps, {
          className,
          withContext,
          transferProps,
        })
        const rest = chainProps<any>(...toArray(superProps))()(mergedProps)

        return <ProxyComponent {...rest} />
      }, displayName)
    }
  }

  return {
    component,
    ComponentContext,
    PropsContext,
    useComponentContext,
    usePropsContext,
    withContext,
    useComponentProps,
  }
}

export function createSlotComponent<
  Y extends object = {},
  M extends ComponentSlotStyle = Dict,
  D extends Dict = Dict,
>(rootName: string, style?: M) {
  const rootClassName = style?.className
  const rootDisplayName = getDisplayName(rootName)
  const classNameMap = new Map<string, classNameOptions>()
  const [StyleContext, useStyleContext] = createContext<
    CSSSlotObject<ComponentSlotName<M>>
  >({
    name: `${rootDisplayName}StyleContext`,
  })
  const [ComponentContext, useComponentContext] = createContext<D>({
    name: `${rootDisplayName}Context`,
  })
  const [PropsContext, usePropsContext] = createContext<Partial<Y>>({
    name: `${rootDisplayName}PropsContext`,
    strict: false,
  })

  function useClassName(
    slot?: ComponentSlot<ComponentSlotName<M>>,
    className?: ClassName,
  ) {
    const system = useSystem()

    className = runIfFn(className, system)
    className ??= getSlotClassName(
      rootClassName ?? getClassName(rootName)(system),
      slot,
    )

    return className
  }

  function useClassNames() {
    const system = useSystem()
    const entries = classNameMap.entries().map(([key, { className, slot }]) => {
      className = runIfFn(className, system)
      className ??= getSlotClassName(
        rootClassName ?? getClassName(rootName)(system),
        slot,
      )

      return [key, className]
    })

    return Object.fromEntries(
      entries.filter(([_, className]) => className),
    ) as { [key: string]: string }
  }

  function useRootComponentProps<
    Y extends Dict = Dict,
    R extends keyof Y = keyof Y,
  >(
    props: Y,
    slot?: ComponentSlot<ComponentSlotName<M>>,
    {
      className,
      withContext = true,
      transferProps,
    }: UseComponentPropsOptions<R> = {},
  ): [
    CSSSlotObject,
    Merge<WithoutThemeProps<Y, M, R>, { css?: CSSObject | CSSObject[] }>,
  ] {
    className = useClassName(slot, className)

    const contextProps = usePropsContext() ?? {}
    const mergedProps = withContext ? mergeProps(contextProps, props)() : props
    const [css, rest] = useComponentSlotStyle(mergedProps, {
      className,
      style,
      slot,
      transferProps,
    })

    return [css, rest]
  }

  function useSlotComponentProps<Y extends Dict = Dict>(
    props: Y,
    slot?: ComponentSlot<ComponentSlotName<M>>,
    { className }: Omit<UseComponentPropsOptions, "transferProps"> = {},
  ) {
    className = useClassName(slot, className)

    const style = useStyleContext()

    return {
      ...props,
      className: cx(className, props.className),
      css: mergeSlotCSS(slot, style, props.css),
    }
  }

  function component<H extends AsWithFragment = "div", R extends Dict = Dict>(
    el: FC<R> | H,
    slot?: ComponentSlot<ComponentSlotName<M>>,
    { name, className, ...options }: ComponentOptions = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    classNameMap.set(slotKey, { className, slot })

    return function (...superProps: SuperProps<R>[]) {
      return withDisplayName<H, R>((props) => {
        className = useClassName(slot, className)

        const mergedProps = chainProps(...superProps)()(props)

        return (
          <ProxyComponent
            {...mergedProps}
            className={cx(className, mergedProps.className)}
          />
        )
      }, displayName)
    }
  }

  function withProvider<
    H extends AsWithFragment = "div",
    R extends Y = Y,
    T extends keyof R = keyof R,
  >(
    el: FC<WithoutThemeProps<R, M, T>> | H,
    slot: ComponentSlot<ComponentSlotName<M>> = "root" as ComponentSlot<
      ComponentSlotName<M>
    >,
    {
      name,
      className,
      withContext,
      transferProps,
      ...options
    }: ComponentWithContextOptions<T> = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    classNameMap.set(slotKey, { className, slot })

    return function (
      initialProps?: InitialProps<R>,
      ...superProps: SuperWithoutThemeProps<R, M, T>[]
    ) {
      return withDisplayName<H, R>((props) => {
        const computedProps = isFunction(initialProps)
          ? initialProps(props)
          : mergeProps(initialProps ?? {}, props)()
        const [context, mergedProps] = useRootComponentProps(
          computedProps,
          slot,
          {
            className,
            withContext,
            transferProps,
          },
        )
        const rest = chainProps<any>(...superProps)()(mergedProps)

        return (
          <StyleContext value={context}>
            <ProxyComponent {...rest} />
          </StyleContext>
        )
      }, displayName)
    }
  }

  function withContext<
    H extends AsWithFragment = "div",
    R extends Dict = H extends DOMElement ? HTMLStyledProps<H> : Dict,
  >(
    el: FC<R> | H,
    slot?: ComponentSlot<ComponentSlotName<M>>,
    {
      name,
      className,
      withContext,
      ...options
    }: Omit<ComponentWithContextOptions, "transferProps"> = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    classNameMap.set(slotKey, { className, slot })

    return function (
      initialProps?: InitialProps<R>,
      ...superProps: SuperProps<R>[]
    ) {
      return withDisplayName<H, R>((props) => {
        const computedProps = isFunction(initialProps)
          ? initialProps(props)
          : mergeProps(initialProps ?? {}, props)()
        const mergedProps = useSlotComponentProps(computedProps, slot, {
          className,
          withContext,
        })
        const rest = chainProps(...superProps)()(mergedProps)

        return <ProxyComponent {...rest} />
      }, displayName)
    }
  }

  return {
    component,
    ComponentContext,
    PropsContext,
    StyleContext,
    useClassNames,
    useComponentContext,
    usePropsContext,
    useStyleContext,
    withContext,
    withProvider,
    useRootComponentProps,
    useSlotComponentProps,
  }
}
