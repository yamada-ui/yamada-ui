import type { HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, dataAttr, handlerAll, mergeRefs } from "../../utils"
import { GripIcon } from "../icon"
import { useReorderContext, useReorderItemContext } from "./reorder-context"

export interface ReorderTriggerProps extends HTMLUIProps {}

export const ReorderTrigger = forwardRef<ReorderTriggerProps, "div">(
  ({ className, children = <GripIcon />, ...rest }, ref) => {
    const { styles } = useReorderContext()
    const { drag, dragControls, register } = useReorderItemContext()

    return (
      <ui.div
        ref={mergeRefs(register, ref)}
        className={cx("ui-reorder__trigger", className)}
        __css={styles.trigger}
        {...rest}
        data-selected={dataAttr(drag)}
        onPointerDown={handlerAll(rest.onPointerDown, (ev) =>
          dragControls.start(ev),
        )}
      >
        {children}
      </ui.div>
    )
  },
)

ReorderTrigger.displayName = "ReorderTrigger"
ReorderTrigger.__ui__ = "ReorderTrigger"
