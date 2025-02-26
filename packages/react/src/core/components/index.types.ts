import type * as React from "react"
import type { Merge } from "../../utils"
import type { CSSProps } from "../css"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { StyledTheme, UsageTheme } from "../theme"

export type DOMElement = keyof React.JSX.IntrinsicElements

export interface UIProps extends CSSProps {
  /**
   * The HTML element to render.
   */
  as?: As
  /**
   * Merges its props onto its immediate child.
   */
  asChild?: boolean
}

export type WithoutAs<Y extends object> = Omit<Y, "as">

export interface InterpolationProps extends StyleProps, PseudoProps {
  theme: StyledTheme<UsageTheme>
}

export type OmitProps<Y extends object = {}, M extends object = {}> = M &
  Omit<Y, "as" | keyof M>

type ComponentConditionalProps<
  Y extends As,
  M extends As,
  D extends object = {},
> =
  | OmitProps<React.ComponentProps<M>, D>
  | OmitProps<React.ComponentProps<Y>, D>

type ComponentProps<
  Y extends As,
  M extends As,
  D extends object = {},
> = ComponentConditionalProps<Y, M, D> & {
  as?: M
}

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

export interface UIComponent<Y extends As = As, M extends object = {}>
  extends Component<Y, Merge<UIProps, M>> {}

export interface HTMLRefAttributes<Y extends DOMElement = "div"> {
  ref?: React.ComponentRef<Y>
}

export interface HTMLDataAttributes {
  [key: `data-${string}`]: boolean | string
}

export type HTMLProps<Y extends DOMElement = "div"> = HTMLDataAttributes &
  Omit<React.JSX.IntrinsicElements[Y], "size" | keyof UIProps>

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

type MergedProps<Y, M> = M extends undefined ? Y : Merge<Y, M>

type DefinedProps<Y, M> = M extends undefined ? Y : M

export interface PropGetter<Y = "div", M = undefined, D = undefined> {
  (
    props?: MergedProps<ConditionalProps<Y>, M>,
  ): DefinedProps<ConditionalProps<Y>, D>
}

export interface RequiredPropGetter<Y = "div", M = undefined, D = undefined> {
  (
    props: MergedProps<ConditionalProps<Y>, M>,
  ): DefinedProps<ConditionalProps<Y>, D>
}
