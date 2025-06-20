import type { FC } from "react"
import type { AnyString, Dict, Merge } from "../../utils"
import type { CSSObject, CSSSlotObject } from "../css"
import type { StyledOptions } from "../styled"
import type {
  ComponentSlotStyle,
  ComponentStyle,
  WithoutThemeProps,
} from "../theme"
import type {
  As,
  DOMElement,
  FunctionComponent,
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
  toArray,
  toCamelCase,
  toPascalCase,
} from "../../utils"
import { styled } from "../factory"
import { chainProps, mergeProps } from "./props"
import {
  getSlotClassName,
  useComponentSlotStyle,
  useComponentStyle,
} from "./use-component-style"
import { getClassName, getDisplayName } from "./utils"

type AsWithFragment = "fragment" | As

type Component<
  Y extends AsWithFragment = AsWithFragment,
  M extends object = {},
> = Y extends "fragment"
  ? FunctionComponent<M>
  : OriginalComponent<Exclude<Y, "fragment">, M>

export type ComponentSlotName<
  Y extends ComponentSlotStyle | ComponentStyle = ComponentSlotStyle,
> = AnyString | keyof Required<Y>["base"]

export type ComponentSlot<Y extends number | string | symbol> =
  | [Y, Y]
  | Y
  | { name: string; slot: [Y, Y] | Y }

export type InitialProps<Y extends Dict = Dict> = ((props: Y) => any) | Y
export type SuperProps<Y extends Dict = Dict> = ((props: Y) => any) | Y

export type SuperWithoutThemeProps<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends keyof Y = keyof Y,
> = ((props: WithoutThemeProps<Y, M, D>) => any) | WithoutThemeProps<Y, M, D>

export interface UseComponentPropsOptions<
  Y extends number | string | symbol = string,
> {
  className?: string
  withContext?: boolean
  transferProps?: Y[]
}

export interface ComponentOptions extends Omit<StyledOptions, "transferProps"> {
  className?: string
  shouldStyleProps?: boolean
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

function getSlotCSS<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
  slotCSS?: CSSSlotObject<Y>,
): CSSObject[] {
  if (!slotCSS || !slot) return []

  if (isArray(slot)) {
    return slot.map((slot) => slotCSS[slot]!)
  } else if (isObject(slot)) {
    if (isArray(slot.slot)) {
      return slot.slot.map((slot) => slotCSS[slot]!)
    } else {
      return [slotCSS[slot.slot]!]
    }
  } else {
    return [slotCSS[slot]!]
  }
}

function mergeSlotCSS<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
  slotCSS?: CSSSlotObject<Y>,
  css?: CSSObject | CSSObject[],
) {
  if (!slotCSS || !slot) return css

  const result: CSSObject[] = []

  result.push(...getSlotCSS(slot, slotCSS))

  if (css) result.push(...toArray(css))

  return result
}

function getSlotKey<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
) {
  if (!slot) return "unknown"

  if (isArray(slot) || !isObject(slot)) {
    return toCamelCase(toArray(slot).join("-"))
  } else {
    return toCamelCase(slot.name)
  }
}

function getSlotName<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
) {
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
>(name: string, style?: M) {
  const defaultClassName = style?.className ?? getClassName(name)
  const defaultDisplayName = getDisplayName(name)

  const [PropsContext, usePropsContext] = createContext<Partial<Y>>({
    name: `${defaultDisplayName}PropsContext`,
    strict: false,
  })

  function useComponentProps<H extends Y = Y, R extends keyof H = keyof H>(
    props: H,
    {
      className = defaultClassName,
      withContext = true,
      transferProps,
    }: UseComponentPropsOptions<R> = {},
  ) {
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
    {
      name,
      className = getClassName(name, defaultClassName),
      ...options
    }: ComponentOptions = {},
  ) {
    const displayName = getDisplayName(name, defaultDisplayName)
    const ProxyComponent = createProxyComponent(el, options)

    return function (...superProps: SuperProps<H>[]) {
      return withDisplayName<D, H>((props) => {
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
      className = getClassName(name, defaultClassName),
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
    PropsContext,
    usePropsContext,
    withContext,
    useComponentProps,
  }
}

export function createSlotComponent<
  Y extends object = {},
  M extends ComponentSlotStyle = Dict,
  D extends Dict = Dict,
>(name: string, style?: M) {
  const rootClassName = style?.className ?? getClassName(name)
  const rootDisplayName = getDisplayName(name)

  const classNameMap = new Map<string, string>()

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

  function useClassNames() {
    return Object.fromEntries(classNameMap.entries())
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
    {
      className = getSlotClassName(rootClassName, slot),
      withContext = true,
    }: Omit<UseComponentPropsOptions, "transferProps"> = {},
  ) {
    const style = useStyleContext()
    const contextProps = usePropsContext() ?? {}
    const rest = withContext ? mergeProps(contextProps, props)() : props

    return {
      ...rest,
      className: cx(className, rest.className),
      css: mergeSlotCSS(slot, style, rest.css),
    }
  }

  function component<H extends AsWithFragment = "div", R extends Dict = Dict>(
    el: FC<R> | H,
    slot?: ComponentSlot<ComponentSlotName<M>>,
    {
      name,
      className = getSlotClassName(rootClassName, slot),
      ...options
    }: ComponentOptions = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    if (className) classNameMap.set(slotKey, className)

    return function (...superProps: SuperProps<R>[]) {
      return withDisplayName<H, R>((props) => {
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
      className = getSlotClassName(rootClassName, slot),
      withContext,
      transferProps,
      ...options
    }: ComponentWithContextOptions<T> = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    if (className) classNameMap.set(slotKey, className)

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
      className = getSlotClassName(rootClassName, slot),
      withContext,
      ...options
    }: Omit<ComponentWithContextOptions, "transferProps"> = {},
  ) {
    const ProxyComponent = createProxyComponent(el, options)
    const slotKey = getSlotKey(slot)
    const slotName = getSlotName(slot)
    const displayName = getDisplayName(name, `${rootDisplayName}${slotName}`)

    if (className) classNameMap.set(slotKey, className)

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
