"use client"

import type { HTMLStyledProps } from "../../core"
// import type { LoadingScheme } from "../loading"
import type { CloseButtonProps } from "../close-button"
import type { NoticeStyle } from "./notice.style"
import type { UseNoticeOptions } from "./use-notice"
import { toast } from "sonner"
import { createSlotComponent } from "../../core"
import { Alert } from "../alert"
import { CloseButton } from "../close-button"
import { noticeStyle } from "./notice.style"

export interface NoticeContext {}

export const {
  component,
  ComponentContext,
  PropsContext: NoticePropsContext,
  useComponentContext,
  usePropsContext: useNoticePropsContext,
  withContext,
  withProvider,
} = createSlotComponent<UseNoticeOptions, NoticeStyle, NoticeContext>(
  "notice",
  noticeStyle,
)

interface NoticeProps extends UseNoticeOptions {
  t: number | string
}

export const Notice = withProvider<"div", NoticeProps>(
  ({ variant, closable, description, icon, status, t, title }) => {
    return (
      <Alert.Root variant={variant}>
        {status === "loading" ? (
          <Alert.Loading loadingScheme={icon?.variant} />
        ) : (
          <Alert.Icon />
        )}
        {title || description ? (
          <NoticeContent>
            {title ? <Alert.Title>{title}</Alert.Title> : null}
            {description ? (
              <Alert.Description>{description}</Alert.Description>
            ) : null}
          </NoticeContent>
        ) : null}
        {closable ? (
          <NoticeCloseButton onClick={() => toast.dismiss(t)} />
        ) : null}
      </Alert.Root>
    )
  },
  "root",
)()

// export interface NoticeRootProps
//   extends HTMLStyledProps,
//     ThemeProps<NoticeStyle> {
// }

// /**
//  * `Notice` is a component that conveys information to the user.
//  *
//  * @see https://yamada-ui.com/components/notice
//  */
// export const NoticeRoot = withContext<"div", NoticeRootProps>(
//   (props) => <Alert.Root {...props} />,
//   "root",
// )()

export interface NoticeContentProps extends HTMLStyledProps {}

export const NoticeContent = withContext<"div", NoticeContentProps>(
  "div",
  "content",
)()

// export interface NoticeIconProps extends HTMLStyledProps<"svg"> {}

// export const NoticeIcon = withContext<"svg", NoticeIconProps>(
//   (props) => <Alert.Icon {...props} />,
//   "icon",
// )()

// export interface NoticeLoadingProps extends HTMLStyledProps<"svg"> {
//   /**
//    * The loading scheme.
//    *
//    * @default 'oval'
//    */
//   loadingScheme?: LoadingScheme
// }

// export const NoticeLoading = withContext<"svg", NoticeLoadingProps>(
//   ({ loadingScheme, ...props }) => <Alert.Loading loadingScheme={loadingScheme} {...props} />,
//   "loading",
// )()

// export interface NoticeTitleProps extends HTMLStyledProps<"p"> {}

// export const NoticeTitle = withContext<"p", NoticeTitleProps>(
//   (props) => <Alert.Title {...props} />,
//   "title",
// )()

// export interface NoticeDescriptionProps extends HTMLStyledProps<"span"> {}

// export const NoticeDescription = withContext<"span", NoticeDescriptionProps>(
//   (props) => <Alert.Description {...props} />,
//   "description",
// )()

export interface NoticeCloseButtonProps extends CloseButtonProps {}

export const NoticeCloseButton = withContext<"button", NoticeCloseButtonProps>(
  CloseButton,
  "closeButton",
)()
