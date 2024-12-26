import type { CSSUIObject, HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, dataAttr, handlerAll, mergeRefs } from "../../utils"
import { GripIcon } from "../icon"
import { useReorderContext, useReorderItemContext } from "./reorder-context"

export interface ReorderTriggerProps extends HTMLUIProps {}

export const ReorderTrigger = forwardRef<ReorderTriggerProps, "div">(
  ({ className, children = <GripIcon />, ...rest }, ref) => {
    const { styles } = useReorderContext()
    const { dragControls, isDrag, register } = useReorderItemContext()

    const css: CSSUIObject = {
      alignItems: "center",
      cursor: "grab",
      display: "flex",
      justifyContent: "center",
      _selected: {
        cursor: "grabbing",
      },
      ...styles.trigger,
    }

    return (
      <ui.div
        ref={mergeRefs(register, ref)}
        className={cx("ui-reorder__trigger", className)}
        __css={css}
        {...rest}
        data-selected={dataAttr(isDrag)}
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
