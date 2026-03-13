import { afterEach, beforeEach, vi } from "vitest"

vi.mock("prompts", () => ({
  default: vi.fn().mockResolvedValue({}),
}))

vi.mock("ora", () => {
  const spinner = {
    fail: vi.fn().mockReturnThis(),
    start: vi.fn().mockReturnThis(),
    succeed: vi.fn().mockReturnThis(),
    warn: vi.fn().mockReturnThis(),
  }
  return { default: () => spinner }
})

vi.mock("listr2", () => ({
  Listr: class {
    private tasks: any[]
    constructor(tasks: any[] = []) {
      this.tasks = tasks
    }
    add(tasks: any) {
      if (Array.isArray(tasks)) {
        this.tasks.push(...tasks)
      } else {
        this.tasks.push(tasks)
      }
    }
    async run() {
      for (const task of this.tasks) {
        await task.task({}, { title: task.title })
      }
    }
  },
}))

let consoleLogSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  vi.clearAllMocks()
  consoleLogSpy = vi.spyOn(console, "log").mockImplementation(vi.fn())
})

afterEach(() => {
  consoleLogSpy.mockRestore()
})
