"use client"

import type { HTMLProps } from "../../core"
import { useCallback } from "react"
import { useI18n } from "../../providers/i18n-provider"
import { dataAttr, valueToPercent } from "../../utils"

export interface UseProgressProps {
  /**
   * The maximum value of the progress.
   *
   * @default 100
   */
  max?: number
  /**
   * The minimum value of the progress.
   *
   * @default 0
   */
  min?: number
  /**
   * The value of the progress. If `null`, the progress will be indeterminate.
   *
   * @default 0
   */
  value?: null | number
}

export const useProgress = <Y extends "div" | "svg" = "div">({
  max = 100,
  min = 0,
  value,
}: UseProgressProps = {}) => {
  const indeterminate = value === null
  const percent = valueToPercent(value ?? 0, min, max)
  const { t } = useI18n("progress")

  const getRootProps = useCallback(
    (props?: HTMLProps<Y>) => ({
      "aria-label": indeterminate
        ? t("loading")
        : t("percent", { value: percent }),
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value ?? undefined,
      "data-indeterminate": dataAttr(indeterminate),
      role: "progressbar",
      ...props,
    }),
    [max, min, percent, value, indeterminate, t],
  )

  const getTrackProps = useCallback(
    (props?: HTMLProps<Y extends "svg" ? "circle" : "div">) => ({
      "data-indeterminate": dataAttr(indeterminate),
      ...props,
    }),
    [indeterminate],
  )

  const getRangeProps = useCallback(
    (props?: HTMLProps<Y extends "svg" ? "circle" : "div">) => ({
      "data-indeterminate": dataAttr(indeterminate),
      ...props,
    }),
    [indeterminate],
  )

  return {
    percent,
    getRangeProps,
    getRootProps,
    getTrackProps,
  }
}

export type UseProgressReturn = ReturnType<typeof useProgress>
