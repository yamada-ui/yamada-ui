import type {
  AutocompleteItem,
  AutocompleteProps,
  FormControlProps,
  Merge,
} from "@yamada-ui/react"
import type { FC } from "react"
import { Autocomplete, FormControl } from "@yamada-ui/react"
import { memo } from "react"

const OPTIONS: AutocompleteItem[] = [
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

export interface ModelProps
  extends Merge<FormControlProps, AutocompleteProps> {}

export const Model: FC<ModelProps> = memo(
  ({
    disabled,
    errorMessage,
    helperMessage,
    invalid,
    label = "Model",
    readOnly,
    replace,
    required,
    ...rest
  }) => {
    return (
      <FormControl
        {...{
          disabled,
          errorMessage,
          helperMessage,
          invalid,
          label,
          readOnly,
          replace,
          required,
        }}
      >
        <Autocomplete
          defaultValue="gpt-4-0125-preview"
          items={OPTIONS}
          {...rest}
        />
      </FormControl>
    )
  },
)

Model.displayName = "Model"
