import{r as s,U as d,aI as u,j as e,aH as S,ba as g,V as y,G as r}from"./iframe-BG38LAQ9.js";import{H as T}from"./h-stack-CVgeOc3Y.js";import{F as o}from"./for-1Jrr3mXT.js";import{B as m}from"./button-CfsqSZ9w.js";import{H as f}from"./heading-DSMkYvJJ.js";import{W as c}from"./wrap-D_uUB3Mo.js";import{B as k}from"./badge-HepOM2_Q.js";import{T as x}from"./tag-CUsEMgvG.js";import{C as j,a as C,b as B}from"./container-DS2QA9Tt.js";import"./use-ripple-MuLBmFKU.js";import"./rings-BXfyi9cx.js";import"./flex-BnFbM7LR.js";import"./index-COC_OSBC.js";import"./index-Cz5sG1WL.js";import"./x-icon-Cem_7L-6.js";import"./createLucideIcon-CsglGZ6M.js";const O={title:"Theme / Theming"},a=()=>{const i=s.useMemo(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),t=s.useMemo(()=>({...u,initialThemeScheme:"pink"}),[]),h=()=>{const{changeThemeScheme:p,themeScheme:l}=g();return e.jsxs(y,{children:[e.jsx(T,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>p(n),children:[r(n)," Theme"]},n)})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsxs(f,{children:[r(l)," Theme"]})}),e.jsxs(B,{gap:"md",children:[e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(k,{colorScheme:n,children:n},n)})}),e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(x,{colorScheme:n,children:r(n)},n)})}),e.jsx(c,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(S,{config:t,theme:i,children:e.jsx(h,{})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
