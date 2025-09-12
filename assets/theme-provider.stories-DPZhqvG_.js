import{r as a,$ as d,bH as u,j as e,aY as g,bk as S,V as y,J as r}from"./iframe-Bn8cMbTR.js";import{H as T}from"./h-stack-D5UyLZfX.js";import{F as o}from"./for-DbXOaV0m.js";import{B as m}from"./button-BuVkzRhm.js";import{H as k}from"./heading-Dcpj3_ac.js";import{W as s}from"./wrap-DwiabKAS.js";import{B as f}from"./badge-BnfVv0gw.js";import{T as x}from"./tag-uNNJf31p.js";import{C as j,a as C,b}from"./container-KR0ffown.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";import"./flex-MN_M9PAs.js";import"./index-C5LqjgOW.js";import"./index-D0aT385A.js";import"./x-icon-CUNqek_Z.js";import"./createLucideIcon-C--YS6xs.js";const Y={title:"Theme / Theming"},c=()=>{const i=a.useMemo(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),t=a.useMemo(()=>({...u,initialThemeScheme:"pink"}),[]),h=()=>{const{changeThemeScheme:p,themeScheme:l}=S();return e.jsxs(y,{children:[e.jsx(T,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>p(n),children:[r(n)," Theme"]},n)})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsxs(k,{children:[r(l)," Theme"]})}),e.jsxs(b,{gap:"md",children:[e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(f,{colorScheme:n,children:n},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(x,{colorScheme:n,children:r(n)},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(g,{config:t,theme:i,children:e.jsx(h,{})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const q=["SwitchTheming"];export{c as SwitchTheming,q as __namedExportsOrder,Y as default};
