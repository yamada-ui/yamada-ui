import type { ComponentStyle } from "../../core"
import { mergeStyle } from "../../core"
import { Airy } from "./airy"

export const Rotate: ComponentStyle<"Rotate"> = mergeStyle(Airy)()
