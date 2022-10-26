import * as React from 'react'
import { DOMElements } from './'
import { CSSUIProps, CSSUIObject, StylesProps, CSSObject, Interpolation } from '@yamada-ui/styled'

export type UIProps = CSSUIProps & {
  isTruncated?: boolean
  __css?: CSSUIObject
  __sx?: CSSUIObject
  css?: Interpolation<{}>
}

export type OmitProps<Y, M extends keyof any = never> = Omit<Y, 'transition' | 'as' | 'color' | M>

export type IntersectionProps<Y extends object = {}, M extends object = {}> = OmitProps<
  Y,
  keyof M
> &
  M

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As
}

export type ComponentProps<
  Y extends object,
  M extends object,
  D extends object = {},
  H extends As = As,
> = IntersectionProps<Y, D> &
  IntersectionProps<M, D> & {
    as?: H
  }

export type Component<Y extends As, M extends object = {}> = {
  <D extends As = Y>(
    props: ComponentProps<React.ComponentProps<Y>, React.ComponentProps<D>, M, D>,
  ): JSX.Element

  displayName?: string
  propTypes?: React.WeakValidationMap<any>
  contextTypes?: React.ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export type As<Y = any> = React.ElementType<Y>

export type HTMLUIComponents = {
  [Y in DOMElements]: UIComponent<Y, {}>
}

export type UIComponent<T extends As, P = {}> = Component<T, UIProps & P>

export type HTMLUIProps<T extends As> = Omit<
  PropsOf<T>,
  T extends 'svg' ? 'ref' | 'children' | keyof StylesProps : 'ref' | keyof StylesProps
> &
  UIProps & { as?: As }
