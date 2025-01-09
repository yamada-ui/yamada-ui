import type { ThemeProps } from "../theme.types"
import { omitObject } from "@yamada-ui/utils"

export function omitThemeProps<
  Y extends ThemeProps,
  M extends Exclude<keyof Y, "size" | "variant"> = never,
>(props: Y, keys: M[] = []) {
  return omitObject(props, ["size", "variant", ...keys])
}
