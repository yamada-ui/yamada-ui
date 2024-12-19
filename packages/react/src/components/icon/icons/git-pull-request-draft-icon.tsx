import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GitPullRequestDraft } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GitPullRequestDraftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GitPullRequestDraftIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GitPullRequestDraft}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
