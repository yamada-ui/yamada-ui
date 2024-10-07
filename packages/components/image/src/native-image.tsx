import type { HTMLUIProps } from "@yamada-ui/core"
import type { ComponentProps, FC } from "react"
import { ui } from "@yamada-ui/core"

export interface NativeImageProps
  extends Omit<HTMLUIProps<"img">, "height" | "width">,
    Pick<ComponentProps<"img">, "height" | "width"> {}

/**
 * `NativeImage` is renders a `img` element.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/native-image
 */
export const NativeImage: FC<NativeImageProps> = ui("img", {
  disableStyleProp: (prop) => ["height", "width"].includes(prop),
})
