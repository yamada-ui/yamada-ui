export interface PlaygroundFile {
  id: string
  name: string
  code: string
}

export interface SavedSet {
  id: string
  name: string
  activeIndex: number
  files: PlaygroundFile[]
}
