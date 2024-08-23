import type { HTMLUIProps } from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { ComponentProps, FC } from "react"

export type NativeImageProps = Omit<HTMLUIProps<"img">, "width" | "height"> &
  Pick<ComponentProps<"img">, "width" | "height">

/**
 * `NativeImage` it renders a `img` element.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/native-image
 */
export const NativeImage: FC<NativeImageProps> = ui("img", {
  disableStyleProp: (prop) => ["width", "height"].includes(prop),
})
