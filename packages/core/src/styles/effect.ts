import type * as CSS from "csstype"
import { Token } from "../css"
import { Configs, configs } from "./config"

export const effect: Configs = {
  boxShadow: configs.shadow("boxShadow"),
  mixBlendMode: true,
  blendMode: configs.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: configs.prop("backgroundBlendMode"),
  opacity: true,
}

Object.assign(effect, {
  shadow: effect.boxShadow,
})

export type EffectProps = {
  /**
   * The `box-shadow` property.
   */
  boxShadow?: Token<CSS.Property.BoxShadow | number, "shadows">
  /**
   * The `box-shadow` property.
   */
  shadow?: Token<CSS.Property.BoxShadow | number, "shadows">
  /**
   * The `mix-blend-mode` property.
   */
  mixBlendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The `mix-blend-mode` property.
   */
  blendMode?: Token<CSS.Property.MixBlendMode>
  /**
   * The CSS `background-blend-mode` property.
   */
  backgroundBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `background-blend-mode` property.
   */
  bgBlendMode?: Token<CSS.Property.BackgroundBlendMode>
  /**
   * The CSS `opacity` property.
   */
  opacity?: Token<CSS.Property.Opacity>
}
