import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { Modal } from "./modal"

export const Dialog: ComponentMultiStyle<"Dialog"> = mergeMultiStyle(Modal)()
