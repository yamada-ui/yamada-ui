import{r as a,af as S,c7 as y,j as e,bb as T,c5 as f,V as k,Q as m,P as r}from"./iframe-C1QqsVA9.js";import{H as x}from"./h-stack-jgSIB3-v.js";import{F as o}from"./for-Be_orN7T.js";import{H as j}from"./heading-V-V_Ybpq.js";import{W as s}from"./wrap-3wPTj9O4.js";import{B as C}from"./badge-DFsVFpaC.js";import{T as b}from"./tag-DPkOrl1g.js";import{C as B,a as F,b as H}from"./container-DHUXeB0u.js";import"./preload-helper-C1FmrZbK.js";import"./flex-Bs-NHhmm.js";import"./index-CeHKNIfO.js";import"./index-B7LYMO55.js";const $={title:"Theme / Theming"},c=()=>{const p=a.useMemo(()=>({...S,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),l=a.useMemo(()=>({...y,initialThemeScheme:"pink"}),[]),d=()=>{const{changeThemeScheme:u,themeScheme:g}=f();return e.jsxs(k,{children:[e.jsx(x,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>u(n),children:[r(n)," Theme"]},n)})}),e.jsxs(B,{children:[e.jsx(F,{children:e.jsxs(j,{children:[r(g)," Theme"]})}),e.jsxs(H,{gap:"md",children:[e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(C,{colorScheme:n,children:n},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(b,{colorScheme:n,children:r(n)},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(T,{config:l,theme:p,children:e.jsx(d,{})})};var i,t,h;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(h=(t=c.parameters)==null?void 0:t.docs)==null?void 0:h.source}}};const O=["SwitchTheming"];export{c as SwitchTheming,O as __namedExportsOrder,$ as default};
