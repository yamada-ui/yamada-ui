import type { HTMLUIProps, ThemeProps } from "../../core"
import type { CardStyle } from "./card.style"
import { createSlotComponent } from "../../core"
import { cardStyle } from "./card.style"

export interface CardRootProps
  extends HTMLUIProps<"article">,
    ThemeProps<CardStyle> {}

export const {
  PropsContext: CardPropsContext,
  usePropsContext: useCardPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<CardRootProps, CardStyle>("card", cardStyle)

/**
 * `Card` is a component that groups and displays related information. By default, it renders a `article` element.
 *
 * @see Docs https://yamada-ui.com/components/card
 */
export const CardRoot = withProvider("article", "root")()

export interface CardHeaderProps extends HTMLUIProps<"header"> {}

export const CardHeader = withContext("header", "header")()

export interface CardBodyProps extends HTMLUIProps {}

export const CardBody = withContext("div", "body")()

export interface CardFooterProps extends HTMLUIProps<"footer"> {}

export const CardFooter = withContext("footer", "footer")()
