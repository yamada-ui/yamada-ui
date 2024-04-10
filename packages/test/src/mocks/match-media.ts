import MatchMediaMock from "vitest-matchmedia-mock"

export { MatchMediaMock }

export const matchMedia = () => new MatchMediaMock()
