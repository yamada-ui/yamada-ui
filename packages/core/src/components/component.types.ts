import type { Interpolation } from "@emotion/react"
import type { Merge, MergeIfDefined } from "@yamada-ui/utils"
import type * as React from "react"
import type { CSSUIObject, CSSUIProps } from "../css"
import type { PropsTheme } from "../theme.types"
import type { DOMElements } from "./element.types"

export type BaseStyle =
  | CSSUIObject
  | ((props: StyledResolverProps) => CSSUIObject)

export type StyledOptions = {
  disableStyleProp?: (prop: string) => boolean
  shouldForwardProp?: (prop: string) => boolean
  label?: string
  baseStyle?: BaseStyle
}

export type UIFactory = {
  <T extends As, P extends object = {}>(
    component: T,
    options?: StyledOptions,
  ): UIComponent<T, P>
}

export type UIBaseProps = {
  /**
   * Used for internal css management.
   *
   * @private
   */
  __css?: CSSUIObject
  /**
   * The CSS object that depends on the theme.
   */
  sx?: CSSUIObject
  /**
   * The emotion's css object.
   */
  css?: Interpolation<{}>
}

export type StyledResolverProps = CSSUIObject &
  UIBaseProps & {
    theme: PropsTheme
  }

export type UIProps = CSSUIProps & UIBaseProps

export type WithoutAs<T extends object> = Omit<T, "as">

export type ComponentProps<
  Y extends object,
  M extends object,
  D extends object,
  H extends As,
> = (Merge<Y, WithoutAs<D>> | Merge<M, WithoutAs<D>>) & {
  as?: H
}

export type ComponentArgs = {
  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export type Component<Y extends As, M extends object = {}> = {
  <D extends As = Y>(
    props: ComponentProps<
      React.ComponentProps<Y>,
      React.ComponentProps<D>,
      M,
      D
    >,
  ): JSX.Element
} & ComponentArgs

export type As = React.ElementType

export type HTMLUIComponents = {
  [Y in DOMElements]: UIComponent<Y, {}>
}

export type UIComponent<Y extends As, M extends object = {}> = Component<
  Y,
  Merge<UIProps, M>
>

export type HTMLUIProps<Y extends As = "div"> = Merge<
  React.ComponentPropsWithoutRef<Y>,
  UIProps & { as?: As }
>

export type HTMLUIPropsWithoutAs<Y extends As = "div"> = Omit<
  HTMLUIProps<Y>,
  "as"
>

type HTMLUIPropsWithRef<Y extends As = "div"> = HTMLUIProps<Y> &
  React.RefAttributes<any>

export type UIPropGetter<Y extends As = "div", M = undefined, D = undefined> = (
  props?: MergeIfDefined<HTMLUIProps<Y>, M>,
  ref?: React.Ref<any>,
) => MergeIfDefined<HTMLUIPropsWithRef<Y>, D>

export type RequiredUIPropGetter<
  Y extends As = "div",
  M = undefined,
  D = undefined,
> = (
  props: MergeIfDefined<HTMLUIProps<Y>, M>,
  ref?: React.Ref<any>,
) => MergeIfDefined<HTMLUIPropsWithRef<Y>, D>
