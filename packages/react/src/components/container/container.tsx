import type { HTMLUIProps, ThemeProps } from "../../core"
import type { ContainerStyle } from "./container.style"
import { createSlotComponent } from "../../core"
import { containerStyle } from "./container.style"

export interface ContainerRootProps
  extends HTMLUIProps<"section">,
    ThemeProps<ContainerStyle> {}

export const {
  PropsContext: ContainerPropsContext,
  usePropsContext: useContainerPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ContainerRootProps, ContainerStyle>(
  "container",
  containerStyle,
)

/**
 * `Container` is a component used as a general division element. By default, it renders the `section` element.
 *
 * @see Docs https://yamada-ui.com/components/container
 */
export const ContainerRoot = withProvider("section", "root")()

export interface ContainerHeaderProps extends HTMLUIProps<"header"> {}

export const ContainerHeader = withContext("header", "header")()

export interface ContainerBodyProps extends HTMLUIProps {}

export const ContainerBody = withContext("div", "body")()

export interface ContainerFooterProps extends HTMLUIProps<"footer"> {}

export const ContainerFooter = withContext("footer", "footer")()
