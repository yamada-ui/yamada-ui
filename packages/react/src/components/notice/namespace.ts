import type {
  NoticeDescriptionProps,
  NoticeIconProps,
  NoticeLoadingProps,
  NoticeRootProps,
  NoticeTitleProps,
} from "./notice"
import {
  NoticeCloseButton,
  NoticeDescription,
  NoticeIcon,
  NoticeLoading,
  NoticeRoot,
  NoticeTitle,
} from "./notice"
import { NoticePropsContext, useNoticePropsContext } from "./notice-provider"

export {
  NoticeCloseButton as CloseButton,
  NoticeDescription as Description,
  NoticeIcon as Icon,
  NoticeLoading as Loading,
  NoticePropsContext as PropsContext,
  NoticeRoot as Root,
  NoticeTitle as Title,
  useNoticePropsContext as usePropsContext,
}

export type {
  NoticeDescriptionProps as DescriptionProps,
  NoticeIconProps as IconProps,
  NoticeLoadingProps as LoadingProps,
  NoticeRootProps as RootProps,
  NoticeTitleProps as TitleProps,
}
