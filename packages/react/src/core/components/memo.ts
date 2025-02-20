import type { As, Component } from "./index.types"
import * as React from "react"

export function memo<Y extends object, M extends As = "div">(
  Component: React.FunctionComponent<Y>,
  propsAreEqual?: (prevProps: Readonly<Y>, nextProps: Readonly<Y>) => boolean,
): Component<M, Y>

export function memo<Y extends React.ComponentType<any>, M extends As = "div">(
  Component: Y,
  propsAreEqual?: (
    prevProps: Readonly<React.ComponentProps<Y>>,
    nextProps: Readonly<React.ComponentProps<Y>>,
  ) => boolean,
) {
  return React.memo<Y>(Component, propsAreEqual) as unknown as Component<M, Y>
}
