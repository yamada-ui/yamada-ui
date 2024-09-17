import type { Merge } from "@yamada-ui/utils"
import type * as React from "react"
import type { CSSProps, CSSUIObject, CSSUIProps } from "../css"
import type { StyledTheme } from "../theme.types"
import type { DOMElements } from "./element.types"

export type BaseStyle =
  | CSSUIObject
  | ((props: InterpolationProps) => CSSUIObject)

export interface StyledOptions {
  disableStyleProp?: (prop: string) => boolean
  shouldForwardProp?: (prop: string) => boolean
  label?: string
  baseStyle?: BaseStyle
}

export interface UIFactory {
  <Y extends As, M extends object = {}>(
    el: Y,
    options?: StyledOptions,
  ): UIComponent<Y, M>
}

export interface UIProps extends CSSProps, CSSUIProps {
  /**
   * The HTML element to render.
   */
  as?: As
}

export type WithoutAs<Y extends object> = Omit<Y, "as">

export type InterpolationProps = CSSUIObject &
  CSSProps & {
    theme: StyledTheme
  }

export type OmitProps<Y extends object = {}, M extends object = {}> = Omit<
  Y,
  keyof M | "as"
> &
  M

type ComponentConditionalProps<
  Y extends As,
  M extends As,
  D extends object = {},
> =
  | OmitProps<React.ComponentProps<Y>, D>
  | OmitProps<React.ComponentProps<M>, D>

type ComponentProps<
  Y extends As,
  M extends As,
  D extends object = {},
> = ComponentConditionalProps<Y, M, D> & {
  as?: M
}

export interface ComponentArgs
  extends Pick<
    React.FunctionComponent,
    "contextTypes" | "propTypes" | "defaultProps" | "displayName"
  > {}

export interface Component<Y extends As, D extends object = {}>
  extends ComponentArgs {
  <M extends As = Y>(props: ComponentProps<Y, M, D>): JSX.Element
}

export type As = React.ElementType

export type HTMLUIComponents = {
  [Y in DOMElements]: UIComponent<Y>
}

export interface UIComponent<Y extends As = As, M extends object = {}>
  extends Component<Y, Merge<UIProps, M>> {}

export type HTMLRef<Y extends DOMElements = "div"> =
  JSX.IntrinsicElements[Y]["ref"]

export interface HTMLRefAttributes<Y extends DOMElements = "div"> {
  ref?: HTMLRef<Y> | undefined
}

export type HTMLProps<Y extends DOMElements = "div"> = Omit<
  JSX.IntrinsicElements[Y],
  "ref" | "size" | keyof UIProps
>

export type HTMLUIProps<Y extends DOMElements = "div"> = Merge<
  HTMLProps<Y>,
  UIProps
>

export type HTMLUIPropsWithoutAs<Y extends DOMElements = "div"> = WithoutAs<
  HTMLUIProps<Y>
>

export type HTMLUIPropsWithRef<Y extends DOMElements = "div"> = HTMLUIProps<Y> &
  React.RefAttributes<any>

type ConditionalProps<Y> = Y extends DOMElements ? HTMLProps<Y> : Y

type DefinedProps<Y, M> = M extends undefined ? Y : M

export interface PropGetter<Y = "div", M = undefined> {
  (
    props?: ConditionalProps<Y>,
    ref?: React.Ref<any>,
  ): DefinedProps<ConditionalProps<Y>, M> & React.RefAttributes<any>
}

export interface RequiredPropGetter<Y = "div", M = undefined> {
  (
    props: ConditionalProps<Y>,
    ref?: React.Ref<any>,
  ): DefinedProps<ConditionalProps<Y>, M> & React.RefAttributes<any>
}
