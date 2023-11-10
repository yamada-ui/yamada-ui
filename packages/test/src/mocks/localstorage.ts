export const localStorage = (value: string) => {
  Object.defineProperty(window, "localStorage", {
    writable: true,
    value: {
      getItem: () => value,
      setItem: jest.fn(),
    },
  })
}
