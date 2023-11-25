import type { StringLiteral } from "@yamada-ui/utils"
import type * as CSS from "csstype"
import type { Token } from "../css"
import type { Configs } from "./config"
import { configs, transforms } from "./config"

export const filter: Configs = {
  filter: { transform: transforms.filter() },
  blur: configs.blur("--ui-blur"),
  brightness: {
    properties: "--ui-brightness",
    transform: transforms.function("brightness"),
  },
  contrast: {
    properties: "--ui-contrast",
    transform: transforms.function("contrast"),
  },
  dropShadow: configs.prop(
    "--ui-drop-shadow",
    "shadows",
    transforms.function("drop-shadow"),
  ),
  grayscale: {
    properties: "--ui-grayscale",
    transform: transforms.function("grayscale"),
  },
  hueRotate: {
    properties: "--ui-hue-rotate",
    transform: transforms.function("hue-rotate", transforms.deg),
  },
  invert: {
    properties: "--ui-invert",
    transform: transforms.function("invert"),
  },
  saturate: {
    properties: "--ui-saturate",
    transform: transforms.function("saturate"),
  },
  sepia: {
    properties: "--ui-sepia",
    transform: transforms.function("sepia"),
  },
  backdropFilter: { transform: transforms.filter("backdrop") },
  backdropBlur: configs.blur("--ui-backdrop-blur"),
  backdropBrightness: {
    properties: "--ui-backdrop-brightness",
    transform: transforms.function("brightness"),
  },
  backdropContrast: {
    properties: "--ui-backdrop-contrast",
    transform: transforms.function("contrast"),
  },
  backdropDropShadow: configs.prop(
    "--ui-backdrop-drop-shadow",
    "shadows",
    transforms.function("drop-shadow"),
  ),
  backdropGrayscale: {
    properties: "--ui-backdrop-grayscale",
    transform: transforms.function("grayscale"),
  },
  backdropHueRotate: {
    properties: "--ui-backdrop-hue-rotate",
    transform: transforms.function("hue-rotate", transforms.deg),
  },
  backdropInvert: {
    properties: "--ui-backdrop-invert",
    transform: transforms.function("invert"),
  },
  backdropSaturate: {
    properties: "--ui-backdrop-saturate",
    transform: transforms.function("saturate"),
  },
  backdropSepia: {
    properties: "--ui-backdrop-sepia",
    transform: transforms.function("sepia"),
  },
}

export type FilterProps = {
  /**
   * The CSS `filter` property.
   */
  filter?: Token<CSS.Property.Filter | "auto">
  /**
   * If `filter=auto`, sets the value of `--ui-blur`.
   */
  blur?: Token<StringLiteral, "blurs">
  /**
   * If `filter=auto`, sets the value of `--ui-brightness`.
   */
  brightness?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-contrast`.
   */
  contrast?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-drop-shadow`.
   */
  dropShadow?: Token<StringLiteral, "shadows">
  /**
   * If `filter=auto`, sets the value of `--ui-grayscale`.
   */
  grayscale?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-hue-rotate`.
   */
  hueRotate?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-invert`.
   */
  invert?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-saturate`.
   */
  saturate?: Token<StringLiteral>
  /**
   * If `filter=auto`, sets the value of `--ui-sepia`.
   */
  sepia?: Token<StringLiteral>
  /**
   * The CSS `backdrop-filter` property.
   */
  backdropFilter?: Token<CSS.Property.BackdropFilter | "auto">
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-blur`.
   */
  backdropBlur?: Token<StringLiteral, "blurs">
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-brightness`.
   */
  backdropBrightness?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-contrast`.
   */
  backdropContrast?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-drop-shadow`.
   */
  backdropDropShadow?: Token<StringLiteral, "shadows">
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-grayscale`.
   */
  backdropGrayscale?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-hue-rotate`.
   */
  backdropHueRotate?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-invert`.
   */
  backdropInvert?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-saturate`.
   */
  backdropSaturate?: Token<StringLiteral>
  /**
   * If `backdropBlur=auto`, sets the value of `--ui-backdrop-sepia`.
   */
  backdropSepia?: Token<StringLiteral>
}
