import { Dict } from '@yamada-ui/utils'
import * as React from 'react'
import {
  CSSUIProps,
  CSSUIObject,
  StylesProps,
  StyledTheme,
  CSSObject,
  Interpolation,
} from '..'
import { DOMElements } from '.'

export type StyledOptions = {
  shouldForwardProp?: (prop: string) => boolean
  label?: string
  baseStyle?: CSSUIProps | ((props: StyledResolverProps) => CSSUIProps)
}

export type UIFactory = {
  <T extends As, P extends object = {}>(
    component: T,
    options?: StyledOptions,
  ): UIComponent<T, P>
}

export type StyledResolverProps = CSSUIObject & {
  theme: StyledTheme<Dict>
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
  css?: CSSObject
}

export type UIProps = CSSUIProps & {
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

export type OmitProps<Y, M extends keyof any = never> = Omit<
  Y,
  'as' | 'color' | M
>

export type IntersectionProps<
  Y extends object = {},
  M extends object = {},
> = OmitProps<Y, keyof M> & M

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type ComponentProps<
  Y extends object,
  M extends object,
  D extends object = {},
  H extends As = As,
> = (IntersectionProps<Y, D> | IntersectionProps<M, D>) & {
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

type Assign<T, U> = Omit<T, keyof U> & U

export type UIComponent<Y extends As, M extends object = {}> = Component<
  Y,
  Assign<UIProps, M>
>

export type HTMLUIProps<Y extends As> = Omit<
  PropsOf<Y>,
  Y extends 'svg'
    ? 'ref' | 'children' | keyof StylesProps
    : 'ref' | keyof StylesProps
> &
  UIProps & { as?: As }
