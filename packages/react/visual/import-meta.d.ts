interface ImportMeta {
  glob<T>(pattern: string, options: { eager: true }): { [path: string]: T }
}
