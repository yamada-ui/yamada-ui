import{r as s,U as d,aH as u,j as e,aG as S,b9 as g,V as y,G as r}from"./iframe-DqV1pF0Y.js";import{H as T}from"./h-stack-p1IvkNNA.js";import{F as o}from"./for-Jc9KR5-P.js";import{B as m}from"./button-BhTpfwih.js";import{H as f}from"./heading-Bb3j_Ov5.js";import{W as c}from"./wrap-CipR2sIR.js";import{B as k}from"./badge-BovFiAT5.js";import{T as x}from"./tag-B7AkIZv_.js";import{C as j,a as C,b as B}from"./container-BnLRh4KV.js";import"./use-ripple-DSVVW1dc.js";import"./rings-sHcC8uPJ.js";import"./flex-BBgO32zm.js";import"./index-DnPfVbac.js";import"./index-BqODKfmt.js";import"./x-icon-CbMKLqhw.js";import"./createLucideIcon-dUf62_pT.js";const O={title:"Theme / Theming"},a=()=>{const i=s.useMemo(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),t=s.useMemo(()=>({...u,initialThemeScheme:"pink"}),[]),h=()=>{const{changeThemeScheme:p,themeScheme:l}=g();return e.jsxs(y,{children:[e.jsx(T,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>p(n),children:[r(n)," Theme"]},n)})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsxs(f,{children:[r(l)," Theme"]})}),e.jsxs(B,{gap:"md",children:[e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(k,{colorScheme:n,children:n},n)})}),e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(x,{colorScheme:n,children:r(n)},n)})}),e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(S,{config:t,theme:i,children:e.jsx(h,{})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const theme = useMemo(() => ({
    ...defaultTheme,
    themeSchemes: {
      blue: {
        semanticTokens: {
          colorSchemes: {
            primary: "blue",
            secondary: "cyan"
          }
        }
      },
      pink: {
        semanticTokens: {
          colorSchemes: {
            primary: "pink",
            secondary: "violet"
          }
        }
      },
      purple: {
        semanticTokens: {
          colorSchemes: {
            primary: "purple",
            secondary: "green"
          }
        }
      }
    }
  }), []);
  const config = useMemo(() => ({
    ...defaultConfig,
    initialThemeScheme: "pink" as ThemeScheme
  }), []);
  const App: FC = () => {
    const {
      changeThemeScheme,
      themeScheme
    } = useTheme<typeof theme>();
    return <VStack>
        <HStack>
          <For each={["base", "pink", "purple", "blue"] as const}>
            {themeScheme => <Button key={themeScheme} colorScheme={"base" === themeScheme ? "mono" : themeScheme} onClick={() => changeThemeScheme(themeScheme)}>
                {toTitleCase(themeScheme)} Theme
              </Button>}
          </For>
        </HStack>

        <Container.Root>
          <Container.Header>
            <Heading>{toTitleCase(themeScheme)} Theme</Heading>
          </Container.Header>

          <Container.Body gap="md">
            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Badge key={colorScheme} colorScheme={colorScheme}>
                    {colorScheme}
                  </Badge>}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Tag key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Tag>}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Button key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Button>}
              </For>
            </Wrap>
          </Container.Body>
        </Container.Root>
      </VStack>;
  };
  return <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>;
}`,...a.parameters?.docs?.source}}};const q=["SwitchTheming"];export{a as SwitchTheming,q as __namedExportsOrder,O as default};
