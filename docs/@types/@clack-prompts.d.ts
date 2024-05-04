import type * as p from "@clack/prompts"

declare module "@clack/prompts" {
  type Prompts = typeof p

  type Spinner = ReturnType<typeof p.spinner>

  type Runner<T extends any[] = any[], K extends any = any> = (
    ...args: T
  ) => (p?: Prompts, s?: Spinner) => K

  type RequiredRunner<T extends any[] = any[], K extends any = any> = (
    ...args: T
  ) => (p: Prompts, s: Spinner) => K
}
