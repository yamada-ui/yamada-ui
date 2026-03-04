import{r as a,b1 as S,cg as y,j as e,bQ as T,a5 as k,V as f,Q as m,P as r}from"./iframe-DCHNIl-i.js";import{H as x}from"./h-stack-Bw9lrtZe.js";import{F as o}from"./for-l6zekFpA.js";import{H as j}from"./heading-DU3CbpU3.js";import{W as s}from"./wrap-CMws3eF9.js";import{B as C}from"./badge-nuLKPF3Q.js";import{T as b}from"./tag-CZ5c-3r3.js";import{C as B,a as F,b as H}from"./container-C5vY4QKw.js";import"./preload-helper-C1FmrZbK.js";import"./flex-Ca2J1XPh.js";import"./index-CON8u8WX.js";import"./index-BZgz1XXS.js";const Q={title:"Theme / Theming"},c=()=>{const p=a.useMemo(()=>({...S,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),l=a.useMemo(()=>({...y,initialThemeScheme:"pink"}),[]),d=()=>{const{changeThemeScheme:g,themeScheme:u}=k();return e.jsxs(f,{children:[e.jsx(x,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>g(n),children:[r(n)," Theme"]},n)})}),e.jsxs(B,{children:[e.jsx(F,{children:e.jsxs(j,{children:[r(u)," Theme"]})}),e.jsxs(H,{gap:"md",children:[e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(C,{colorScheme:n,children:n},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(b,{colorScheme:n,children:r(n)},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(T,{config:l,theme:p,children:e.jsx(d,{})})};var i,t,h;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(h=(t=c.parameters)==null?void 0:t.docs)==null?void 0:h.source}}};const $=["SwitchTheming"];export{c as SwitchTheming,$ as __namedExportsOrder,Q as default};
