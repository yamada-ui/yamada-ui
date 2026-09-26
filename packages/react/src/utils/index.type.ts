export type ReactNodeOrFunction<Y = unknown> =
  | ((props: Y) => React.ReactNode)
  | React.ReactNode

export type TransformProps<Y = unknown, M = unknown> = ((props: M) => Y) | Y
