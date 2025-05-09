import type {
  NoticeActionProps,
  NoticeDescriptionProps,
  NoticeIconProps,
  NoticeLoadingProps,
  NoticeRootProps,
  NoticeTitleProps,
} from "./notice"
import {
  NoticeAction,
  NoticeCloseButton,
  NoticeContent,
  NoticeDescription,
  NoticeIcon,
  NoticeLoading,
  NoticeRoot,
  NoticeTitle,
} from "./notice"
import { NoticePropsContext, useNoticePropsContext } from "./notice-provider"

export {
  NoticeAction as Action,
  NoticeCloseButton as CloseButton,
  NoticeContent as Content,
  NoticeDescription as Description,
  NoticeIcon as Icon,
  NoticeLoading as Loading,
  NoticePropsContext as PropsContext,
  NoticeRoot as Root,
  NoticeTitle as Title,
  useNoticePropsContext as usePropsContext,
}

export type {
  NoticeActionProps as ActionProps,
  NoticeDescriptionProps as DescriptionProps,
  NoticeIconProps as IconProps,
  NoticeLoadingProps as LoadingProps,
  NoticeRootProps as RootProps,
  NoticeTitleProps as TitleProps,
}
