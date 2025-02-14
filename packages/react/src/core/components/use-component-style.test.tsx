describe.skip("useComponentStyle", () => {
  // const theme = {
  //   breakpoints: {
  //     sm: "30em",
  //     md: "48em",
  //     lg: "61em",
  //     xl: "80em",
  //     "2xl": "90em",
  //   },
  //   components: {
  //     Button: {
  //       baseStyle: {
  //         borderRadius: "4px",
  //         padding: "8px 12px",
  //       },
  //       sizes: {
  //         sm: {
  //           fontSize: "sm",
  //           padding: "4px 8px",
  //         },
  //         md: {
  //           fontSize: "md",
  //           padding: "8px 12px",
  //         },
  //       },
  //       variants: {
  //         outline: {
  //           border: "1px solid",
  //           borderColor: "blue.500",
  //           color: "blue.500",
  //         },
  //         solid: {
  //           bg: "blue.500",
  //           color: "white",
  //         },
  //       },
  //       defaultProps: {
  //         size: "md",
  //         variant: "solid",
  //       },
  //     },
  //   },
  // }
  // beforeAll(() => {
  //   vi.spyOn(window, "getComputedStyle").mockImplementation(
  //     () =>
  //       ({
  //         fontSize: "16px",
  //       }) as CSSStyleDeclaration,
  //   )
  // })
  // afterAll(() => {
  //   vi.spyOn(window, "getComputedStyle").mockRestore()
  // })
  // test("returns the correct styles for a component", () => {
  //   const { result } = renderHook(() => useComponentStyle("Button", {}), {
  //     wrapper: ({ children }) => (
  //       <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //     ),
  //   })
  //   expect(result.current[0]).toStrictEqual({
  //     bg: "blue.500",
  //     borderRadius: "4px",
  //     color: "white",
  //     fontSize: "md",
  //     padding: "8px 12px",
  //   })
  // })
  // test("overrides default props with provided props", () => {
  //   const { result } = renderHook(
  //     () => useComponentStyle("Button", { size: "sm", variant: "outline" }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     border: "1px solid",
  //     borderColor: "blue.500",
  //     borderRadius: "4px",
  //     color: "blue.500",
  //     fontSize: "sm",
  //     padding: "4px 8px",
  //   })
  // })
  // test("returns dark mode styles.", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: "sm",
  //         variant: ["solid", "outline"],
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     ".ui-dark &:not([data-mode]), [data-mode=dark] &:not([data-mode]), &[data-mode=dark]":
  //       { border: "1px solid", borderColor: "blue.500", color: "blue.500" },
  //     borderRadius: "4px",
  //     fontSize: "sm",
  //     padding: "4px 8px",
  //     [pseudos._light]: { bg: "blue.500", color: "white" },
  //   })
  // })
  // test("returns responsive styles", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: "sm",
  //         variant: { base: "solid", md: "outline" },
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     "@media screen and (max-width: 768px)": {
  //       border: "1px solid",
  //       borderColor: "blue.500",
  //       color: "blue.500",
  //     },
  //     "@media screen and (min-width: 769px)": {
  //       bg: "blue.500",
  //       color: "white",
  //     },
  //     borderRadius: "4px",
  //     fontSize: "sm",
  //     padding: "4px 8px",
  //   })
  // })
  // test("returns base styles when only 'base' key is provided in responsive object", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: { base: "sm" },
  //         variant: { base: "solid" },
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     bg: "blue.500",
  //     borderRadius: "4px",
  //     color: "white",
  //     fontSize: "sm",
  //     padding: "4px 8px",
  //   })
  // })
  // test("applies size styles correctly", () => {
  //   const { result } = renderHook(
  //     () => useComponentStyle("Button", { size: "sm" }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     bg: "blue.500",
  //     borderRadius: "4px",
  //     color: "white",
  //     fontSize: "sm",
  //     padding: "4px 8px",
  //   })
  // })
  // test("returns correct styles for multiple breakpoints", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: { sm: "sm", md: "md", lg: "lg" },
  //         variant: { sm: "solid", md: "outline", lg: "solid" },
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     "@media screen and (max-width: 480px)": {
  //       bg: "blue.500",
  //       color: "white",
  //       fontSize: "sm",
  //       padding: "4px 8px",
  //     },
  //     "@media screen and (min-width: 481px) and (max-width: 768px)": {
  //       border: "1px solid",
  //       borderColor: "blue.500",
  //       color: "blue.500",
  //       fontSize: "md",
  //       padding: "8px 12px",
  //     },
  //     "@media screen and (min-width: 769px) and (max-width: 976px)": {
  //       bg: "blue.500",
  //       color: "white",
  //     },
  //     borderRadius: "4px",
  //     padding: "8px 12px",
  //   })
  // })
  // test("returns correct styles for color modes", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: "md",
  //         variant: ["solid", "outline"],
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     borderRadius: "4px",
  //     fontSize: "md",
  //     padding: "8px 12px",
  //     [pseudos._dark]: {
  //       border: "1px solid",
  //       borderColor: "blue.500",
  //       color: "blue.500",
  //     },
  //     [pseudos._light]: {
  //       bg: "blue.500",
  //       color: "white",
  //     },
  //   })
  // })
  // test("returns correct styles for color modes and breakpoints", () => {
  //   const { result } = renderHook(
  //     () =>
  //       useComponentStyle("Button", {
  //         size: { base: ["md", "sm"], md: ["sm", "md"] },
  //         variant: [
  //           { base: "solid", md: "outline" },
  //           { base: "outline", md: "solid" },
  //         ],
  //       }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     "@media screen and (max-width: 768px)": {
  //       [pseudos._dark]: { fontSize: "md", padding: "8px 12px" },
  //       [pseudos._light]: { fontSize: "sm", padding: "4px 8px" },
  //     },
  //     "@media screen and (min-width: 769px)": {
  //       [pseudos._dark]: { fontSize: "sm", padding: "4px 8px" },
  //       [pseudos._light]: { fontSize: "md", padding: "8px 12px" },
  //     },
  //     borderRadius: "4px",
  //     padding: "8px 12px",
  //     [pseudos._dark]: {
  //       "@media screen and (max-width: 768px)": {
  //         bg: "blue.500",
  //         color: "white",
  //       },
  //       "@media screen and (min-width: 769px)": {
  //         border: "1px solid",
  //         borderColor: "blue.500",
  //         color: "blue.500",
  //       },
  //     },
  //     [pseudos._light]: {
  //       "@media screen and (max-width: 768px)": {
  //         border: "1px solid",
  //         borderColor: "blue.500",
  //         color: "blue.500",
  //       },
  //       "@media screen and (min-width: 769px)": {
  //         bg: "blue.500",
  //         color: "white",
  //       },
  //     },
  //   })
  // })
})

describe.skip("useComponentMultiStyle", () => {
  // const theme = {
  //   breakpoints: {
  //     sm: "30em",
  //     md: "48em",
  //     lg: "61em",
  //     xl: "80em",
  //     "2xl": "90em",
  //   },
  //   components: {
  //     Button: {
  //       baseStyle: {
  //         container: { borderRadius: "4px", padding: "8px 12px" },
  //       },
  //       sizes: {
  //         sm: {
  //           container: { fontSize: "sm", padding: "4px 8px" },
  //         },
  //         md: {
  //           container: { fontSize: "md", padding: "8px 12px" },
  //         },
  //       },
  //       variants: {
  //         outline: {
  //           container: {
  //             border: "1px solid",
  //             borderColor: "blue.500",
  //             color: "blue.500",
  //           },
  //         },
  //         solid: {
  //           container: { bg: "blue.500", color: "white" },
  //         },
  //       },
  //       defaultProps: {
  //         size: "md",
  //         variant: "solid",
  //       },
  //     },
  //   },
  // }
  // test("returns the correct styles for multi-variant components", () => {
  //   const { result } = renderHook(
  //     () => useComponentMultiStyle("Button", { size: "sm", variant: "solid" }),
  //     {
  //       wrapper: ({ children }) => (
  //         <ThemeProvider theme={theme}>{children}</ThemeProvider>
  //       ),
  //     },
  //   )
  //   expect(result.current[0]).toStrictEqual({
  //     container: {
  //       bg: "blue.500",
  //       borderRadius: "4px",
  //       color: "white",
  //       fontSize: "sm",
  //       padding: "4px 8px",
  //     },
  //   })
  // })
})
