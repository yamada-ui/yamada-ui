export {
  ErrorMessage,
  FormControlPropsContext,
  FormControlRoot,
  HelperMessage,
  Label,
  Legend,
  useFormControlContext,
  useFormControlPropsContext,
} from "./form-control"
export type {
  ErrorMessageProps,
  FormControlProps,
  FormControlRootProps,
  HelperMessageProps,
  LabelProps,
  LegendProps,
} from "./form-control"

export * from "./form-control.style"

export * from "./use-form-control-props"

export * as FormControl from "./namespace"

/**
 * @deprecated
 */
export const formControlProperties = []

/**
 * @deprecated
 */
export const useFormControl = () => ({})
