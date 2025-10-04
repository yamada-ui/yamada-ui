import type { AutocompleteRootProps } from "@yamada-ui/react"
import { Autocomplete } from "@yamada-ui/react"
import { memo } from "react"

const ITEMS: Autocomplete.Item[] = [
  {
    label: "Grammatical Standard English",
    value: "Grammatical Standard English",
  },
  { label: "Summarize for a 2nd grader", value: "Summarize for a 2nd grader" },
  { label: "Text to command", value: "Text to command" },
  { label: "Q&A", value: "Q&A" },
  { label: "English to other languages", value: "English to other languages" },
  { label: "Parse unstructured data", value: "Parse unstructured data" },
  { label: "Classification", value: "Classification" },
  { label: "Natural language to Python", value: "Natural language to Python" },
  { label: "Explain code", value: "Explain code" },
  { label: "Chat", value: "Chat" },
]

export interface PresetProps extends AutocompleteRootProps {}

export const Preset = memo<PresetProps>(({ ...rest }) => {
  return (
    <Autocomplete.Root
      items={ITEMS}
      minW={{ base: "72" }}
      placeholder="Search presets…"
      {...rest}
    />
  )
})

Preset.displayName = "Preset"
