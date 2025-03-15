import type * as React from "react"
import type { Merge } from "../../utils"
import type { CSSProps } from "../css"
import type { PseudoProps } from "../pseudos"
import type { StyleProps } from "../styles"
import type { StyledTheme, UsageTheme } from "../theme"

export type DOMElement = keyof React.JSX.IntrinsicElements

export interface StyledProps extends CSSProps {
  // /**
  //  * The HTML element to render.
  //  */
  // as?: As
  /**
   * Merges its props onto its immediate child.
   */
  asChild?: boolean
}

export type WithoutAs<Y extends object> = Omit<Y, "as">

export type WithoutRef<Y extends object> = Omit<Y, "ref">

export interface InterpolationProps extends StyleProps, PseudoProps {
  theme: StyledTheme<UsageTheme>
}

export type OmitProps<Y extends object = {}, M extends object = {}> = M &
  Omit<Y, "as" | keyof M>

type ComponentConditionalProps<
  Y extends As,
  M extends As,
  D extends object = {},
> = Y extends M
  ? OmitProps<React.ComponentProps<Y>, D>
  : OmitProps<React.ComponentProps<M>, D>

type ComponentProps<
  Y extends As,
  M extends As,
  D extends object = {},
> = ComponentConditionalProps<Y, M, WithoutRef<D>> & {
  as?: M
}

export interface ComponentArgs
  extends Pick<React.FunctionComponent, "displayName" | "propTypes"> {
  __styled__?: string
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

export interface StyledComponent<Y extends As = As, M extends object = {}>
  extends Component<Y, Merge<StyledProps, M>> {}

export interface HTMLRefAttributes<Y extends DOMElement = "div"> {
  ref?: React.Ref<React.ComponentRef<Y>>
}

export interface HTMLDataAttributes {
  [key: `data-${string}`]: boolean | string
}

export type HTMLProps<Y extends DOMElement = "div"> = HTMLDataAttributes &
  Omit<React.JSX.IntrinsicElements[Y], "size" | keyof StyledProps>

export type HTMLStyledProps<Y extends DOMElement = "div"> = Merge<
  HTMLProps<Y>,
  StyledProps
>

export type HTMLStyledPropsWithoutAs<Y extends DOMElement = "div"> = WithoutAs<
  HTMLStyledProps<Y>
>

export type HTMLStyledPropsWithoutRef<Y extends DOMElement = "div"> = Omit<
  HTMLStyledProps<Y>,
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
