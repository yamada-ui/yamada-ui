import { CSSObject } from '@emotion/styled'
import {
  ComponentProps as ReactComponentProps,
  ElementType,
  ValidationMap,
  WeakValidationMap,
} from 'react'
import { DOMElements, CSSUIProps } from './'

export type UIProps = CSSUIProps & {
  isTruncated?: boolean
  __css?: CSSUIProps
  __sx?: CSSUIProps
  animation?: CSSObject | null | undefined | (CSSObject | null | undefined)[]
  css?: CSSObject
}

export type OmitProps<Y, M extends keyof any = never> = Omit<
  Y,
  'transition' | 'as' | 'color' | 'animation' | M
>

export type Props<Y extends object = {}, M extends object = {}> = OmitProps<Y, keyof M> & M

export type ComponentProps<
  Y extends object,
  M extends object,
  D extends object = {},
  H extends As = As,
> = Props<Y, D> &
  Props<M, D> & {
    as?: H
  }

export type Component<Y extends As, M extends object = {}> = {
  <D extends As = Y>(
    props: ComponentProps<ReactComponentProps<Y>, ReactComponentProps<D>, M, D>,
  ): JSX.Element

  displayName?: string
  propTypes?: WeakValidationMap<any>
  contextTypes?: ValidationMap<any>
  defaultProps?: Partial<any>
  id?: string
}

export type As<Y = any> = ElementType<Y>

export type HTMLUIComponents = {
  [Y in DOMElements]: UIComponent<Y, {}>
}

export type UIComponent<T extends As, P = {}> = Component<T, UIProps & P>
