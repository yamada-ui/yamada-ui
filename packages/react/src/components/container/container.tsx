import type { HTMLUIProps, ThemeProps } from "../../core"
import type { ContainerStyle } from "./container.style"
import { createComponent } from "../../core"
import { containerStyle } from "./container.style"

export interface ContainerProps
  extends HTMLUIProps<"section">,
    ThemeProps<ContainerStyle> {}

export const {
  PropsContext: ContainerPropsContext,
  usePropsContext: useContainerPropsContext,
  withContext,
} = createComponent<ContainerProps, ContainerStyle>("container", containerStyle)

/**
 * `Container` is a component used as a general division element. By default, it renders the `section` element.
 *
 * @see Docs https://yamada-ui.com/components/layouts/container
 */
export const Container = withContext("section")()
