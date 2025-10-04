import type { AutocompleteRootProps } from "@yamada-ui/react"
import { Autocomplete, Field } from "@yamada-ui/react"
import { memo } from "react"

const OPTIONS = [
  {
    items: [
      { label: "gpt-4-0125-preview", value: "gpt-4-0125-preview" },
      { label: "gpt-4-turbo-preview", value: "gpt-4-turbo-preview" },
      { label: "gpt-4-1106-preview", value: "gpt-4-1106-preview" },
      { label: "gpt-4-vision-preview", value: "gpt-4-vision-preview" },
      {
        label: "gpt-4-1106-vision-preview",
        value: "gpt-4-1106-vision-preview",
      },
      { label: "gpt-4", value: "gpt-4" },
      { label: "gpt-4-0613", value: "gpt-4-0613" },
      { label: "gpt-4-32k", value: "gpt-4-32k" },
      { label: "gpt-4-32k-0613", value: "gpt-4-32k-0613" },
    ],
    label: "GPT-4 and GPT-4 Turbo",
  },
  {
    items: [
      { label: "gpt-3.5-turbo-0125", value: "gpt-3.5-turbo-0125" },
      { label: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
      { label: "gpt-3.5-turbo-1106", value: "gpt-3.5-turbo-1106" },
      { label: "gpt-3.5-turbo-instruct", value: "gpt-3.5-turbo-instruct" },
    ],
    label: "GPT-3.5 Turbo",
  },
  {
    items: [
      { label: "dall-e-3", value: "dall-e-3" },
      { label: "dall-e-2", value: "dall-e-2" },
    ],
    label: "DALL·E",
  },
  {
    items: [
      { label: "code-davinci-002", value: "code-davinci-002" },
      { label: "code-davinci-001", value: "code-davinci-001" },
      { label: "code-cushman-002", value: "code-cushman-002" },
      { label: "code-cushman-001", value: "code-cushman-001" },
    ],
    label: "Codex",
  },
]

export interface ModelProps extends AutocompleteRootProps {}

export const Model = memo<ModelProps>(({ ...rest }) => {
  return (
    <Field.Root label="Model">
      <Autocomplete.Root defaultValue="gpt-4-0125-preview" {...rest}>
        {OPTIONS.map(({ items, label }) => (
          <Autocomplete.Group key={label} label={label}>
            {items.map(({ label, value }) => (
              <Autocomplete.Option key={value} value={value}>
                {label}
              </Autocomplete.Option>
            ))}
          </Autocomplete.Group>
        ))}
      </Autocomplete.Root>
    </Field.Root>
  )
})

Model.displayName = "Model"
