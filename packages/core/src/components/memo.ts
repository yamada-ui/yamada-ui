import * as React from "react"
import { ComponentArgs } from "./component.types"

export function memo<Y extends object>(
  Component: React.FunctionComponent<Y>,
  propsAreEqual?: (prevProps: Readonly<Y>, nextProps: Readonly<Y>) => boolean,
): React.NamedExoticComponent<Y> & ComponentArgs

export function memo<Y extends React.ComponentType<any>>(
  Component: Y,
  propsAreEqual?: (
    prevProps: Readonly<React.ComponentProps<Y>>,
    nextProps: Readonly<React.ComponentProps<Y>>,
  ) => boolean,
) {
  return React.memo<Y>(
    Component,
    propsAreEqual,
  ) as unknown as React.MemoExoticComponent<Y> & ComponentArgs
}
