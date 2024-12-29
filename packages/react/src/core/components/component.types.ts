import type * as React from "react"
import type { Merge } from "../../utils"
import type { CSSModifierObject, CSSPropObject, CSSProps } from "../css"
import type { ComponentStyle, StyledTheme } from "../theme.types"

export type DOMElement = keyof React.JSX.IntrinsicElements

export type ShouldForwardProp = (prop: string) => boolean

export interface StyledOptions<
  Y extends CSSPropObject = CSSPropObject,
  M extends CSSModifierObject = CSSModifierObject,
  D extends CSSModifierObject = CSSModifierObject,
  H extends number | string | symbol = string,
> extends ComponentStyle<Y, M, D> {
  name?: string
  target?: string
  label?: string
  shouldForwardProp?: boolean | ShouldForwardProp
  forwardProps?: string[]
  transferProps?: H[]
}

export interface UIFactory {
  <Y extends As, M extends object = {}>(
    el: React.FC<M> | Y,
    options?: StyledOptions,
  ): UIComponent<Y, M>
}

export interface UIProps extends CSSProps {
  /**
   * The HTML element to render.
   */
  as?: As
}

export type WithoutAs<Y extends object> = Omit<Y, "as">

export type InterpolationProps = {
  theme: StyledTheme
} & CSSProps

export type OmitProps<Y extends object = {}, M extends object = {}> = M &
  Omit<Y, "as" | keyof M>

type ComponentConditionalProps<
  Y extends As,
  M extends As,
  D extends object = {},
> =
  | OmitProps<React.ComponentProps<M>, D>
  | OmitProps<React.ComponentProps<Y>, D>

type ComponentProps<Y extends As, M extends As, D extends object = {}> = {
  as?: M
} & ComponentConditionalProps<Y, M, D>

export interface ComponentArgs
  extends Pick<React.FunctionComponent, "displayName" | "propTypes"> {
  __ui__?: string
}

export interface Component<Y extends As, D extends object = {}>
  extends ComponentArgs {
  <M extends As = Y>(props: ComponentProps<Y, M, D>): React.ReactNode
}

export type FC<Y extends object = {}> = FunctionComponent<Y>

export interface FunctionComponent<Y = {}> extends ComponentArgs {
  (props: Y): React.ReactNode
}

export type As = React.ElementType

export type HTMLUIComponents = {
  [Y in DOMElement]: UIComponent<Y>
}

export interface UIComponent<Y extends As = As, M extends object = {}>
  extends Component<Y, Merge<UIProps, M>> {}

export interface HTMLRefAttributes<Y extends DOMElement = "div"> {
  ref?: React.ComponentRef<Y>
}

export type HTMLProps<Y extends DOMElement = "div"> = Omit<
  React.JSX.IntrinsicElements[Y],
  "size" | keyof UIProps
>

export type HTMLUIProps<Y extends DOMElement = "div"> = Merge<
  HTMLProps<Y>,
  UIProps
>

export type HTMLUIPropsWithoutAs<Y extends DOMElement = "div"> = WithoutAs<
  HTMLUIProps<Y>
>

export type HTMLUIPropsWithoutRef<Y extends DOMElement = "div"> = Omit<
  HTMLUIProps<Y>,
  "ref"
>

type ConditionalProps<Y> = Y extends DOMElement ? HTMLProps<Y> : Y

type DefinedProps<Y, M> = M extends undefined ? Y : M

export interface PropGetter<Y = "div", M = undefined> {
  (props?: ConditionalProps<Y>): DefinedProps<ConditionalProps<Y>, M>
}

export interface RequiredPropGetter<Y = "div", M = undefined> {
  (props: ConditionalProps<Y>): DefinedProps<ConditionalProps<Y>, M>
}
