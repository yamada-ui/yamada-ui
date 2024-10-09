import type { ComponentArgs } from "./component.types"
import * as React from "react"

export function memo<Y extends object>(
  Component: React.FunctionComponent<Y>,
  propsAreEqual?: (prevProps: Readonly<Y>, nextProps: Readonly<Y>) => boolean,
): ComponentArgs & React.NamedExoticComponent<Y>

export function memo<Y extends React.ComponentType<any>>(
  Component: Y,
  propsAreEqual?: (
    prevProps: Readonly<React.ComponentProps<Y>>,
    nextProps: Readonly<React.ComponentProps<Y>>,
  ) => boolean,
) {
  return React.memo<Y>(Component, propsAreEqual) as unknown as ComponentArgs &
    React.MemoExoticComponent<Y>
}
