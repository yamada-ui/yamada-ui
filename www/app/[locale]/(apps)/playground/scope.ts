import { burger } from "@lucide/lab"
import * as YamadaUI from "@yamada-ui/react"
import { AnimatePresence } from "motion/react"
import React from "react"

export const scope = {
  import: {
    "@lucide/lab": { burger },
    "@yamada-ui/react": YamadaUI,
    "motion/react": { AnimatePresence },
    react: React,
  },
}
