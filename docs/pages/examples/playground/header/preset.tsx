import { Autocomplete } from "@yamada-ui/react"
import type { AutocompleteItem, AutocompleteProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"

const OPTIONS: AutocompleteItem[] = [
  {
    label: "Grammatical Standard English",
    value: "Grammatical Standard English",
  },
  { label: "Summarize for a 2nd grader", value: "Summarize for a 2nd grader" },
  { label: "Text to command", value: "Text to command" },
  { label: "Q&amp;A", value: "Q&amp;A" },
  { label: "English to other languages", value: "English to other languages" },
  { label: "Parse unstructured data", value: "Parse unstructured data" },
  { label: "Classification", value: "Classification" },
  { label: "Natural language to Python", value: "Natural language to Python" },
  { label: "Explain code", value: "Explain code" },
  { label: "Chat", value: "Chat" },
]

export type PresetProps = AutocompleteProps & {}

export const Preset: FC<PresetProps> = memo(({ ...rest }) => {
  return (
    <Autocomplete
      placeholder="Search presets…"
      items={OPTIONS}
      minW={{ base: "72" }}
      {...rest}
    />
  )
})

Preset.displayName = "Preset"
