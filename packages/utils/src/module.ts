export const interopDefault = <T extends unknown>(module: T): T =>
  (module as { default: T }).default || module
