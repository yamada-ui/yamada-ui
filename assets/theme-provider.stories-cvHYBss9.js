import{r as s,af as d,c6 as u,j as e,ba as g,c4 as S,V as y,Q as m,P as r}from"./iframe-D0k82VKj.js";import{H as T}from"./h-stack-2JM7Wrl-.js";import{F as o}from"./for-VxQ1P6BR.js";import{H as f}from"./heading-Z6IrjMgv.js";import{W as a}from"./wrap-CSHnAtYr.js";import{B as k}from"./badge-BB60GYsk.js";import{T as x}from"./tag-CZFeL4cO.js";import{C as j,a as C,b}from"./container-D5DFSGaB.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-DfSuxPUO.js";import"./index-BHg7HjQl.js";import"./index-BwXxpkL8.js";const I={title:"Theme / Theming"},c=()=>{const i=s.useMemo(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),t=s.useMemo(()=>({...u,initialThemeScheme:"pink"}),[]),h=()=>{const{changeThemeScheme:p,themeScheme:l}=S();return e.jsxs(y,{children:[e.jsx(T,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>p(n),children:[r(n)," Theme"]},n)})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsxs(f,{children:[r(l)," Theme"]})}),e.jsxs(b,{gap:"md",children:[e.jsx(a,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(k,{colorScheme:n,children:n},n)})}),e.jsx(a,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(x,{colorScheme:n,children:r(n)},n)})}),e.jsx(a,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(g,{config:t,theme:i,children:e.jsx(h,{})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const U=["SwitchTheming"];export{c as SwitchTheming,U as __namedExportsOrder,I as default};
