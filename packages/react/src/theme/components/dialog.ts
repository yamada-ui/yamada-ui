import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Modal } from "./modal"

export const Dialog: ComponentMultiStyle<"Dialog"> = mergeMultiStyle(Modal)()
