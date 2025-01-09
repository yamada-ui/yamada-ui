import type { CSSModifierObject, CSSPropObject, CSSSlotObject } from "../css"
import type { ComponentStyle } from "../theme.types"
import type { ComponentSlotStyle } from "../theme.types"

export interface DefineComponentStyle {
  <
    Y extends CSSPropObject = CSSPropObject,
    M extends CSSModifierObject = CSSModifierObject,
    D extends CSSModifierObject = CSSModifierObject,
  >(
    value: ComponentStyle<Y, M, D>,
  ): ComponentStyle<Y, M, D>
}

export const defineComponentStyle: DefineComponentStyle = (value) => value

export interface DefineComponentSlotStyle {
  <
    Y extends string = string,
    M extends CSSPropObject<CSSSlotObject<Y>> = CSSPropObject<CSSSlotObject<Y>>,
    D extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
      CSSSlotObject<Y>
    >,
    H extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
      CSSSlotObject<Y>
    >,
  >(
    value: ComponentSlotStyle<Y, M, D, H>,
  ): ComponentSlotStyle<Y, M, D, H>
}

export const defineComponentSlotStyle: DefineComponentSlotStyle = (value) =>
  value
