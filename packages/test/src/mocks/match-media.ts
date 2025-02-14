import MatchMediaMock from "vitest-matchmedia-mock"

export function matchMedia() {
  return new MatchMediaMock()
}

export type { MatchMediaMock }
