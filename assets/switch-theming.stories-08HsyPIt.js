import{j as e,a as r}from"./jsx-runtime-TtYKBvr-.js";import{U as g}from"./ui-provider-AMqlO7Oo.js";import{e as S}from"./extend-theme-XHYNKnXa.js";import{e as y}from"./extend-config-Ceua1bq8.js";import{u}from"./theme-provider-WG22_9xQ.js";import{V as T,H as B}from"./stack-XHxpxtOw.js";import{B as n}from"./button-OhYCiCfe.js";import{C as k}from"./container-JCrX3Nfo.js";import{H as f}from"./heading-FSvTS39O.js";import{W as i}from"./flex-euEh5ill.js";import{B as c}from"./badge-tLHZ6jK8.js";import{T as m}from"./tag-dKVpnbxp.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-K2EgzEzN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-5dfMCWdR.js";import"./motion-AgWUVtfu.js";import"./loading-provider-rGODioNK.js";import"./index-c230YMEh.js";import"./component-G3mliOEp.js";import"./loading-ubMXvBrR.js";import"./index-3YLteYYa.js";import"./index-IiCOgs8R.js";import"./index-fr2XEHwU.js";import"./icon-yFQ9IdhB.js";import"./forward-ref-6T0UNPU-.js";import"./motion-IA6mdqBG.js";import"./index-GPdqE8CR.js";import"./container-portal-xiQGrDEm.js";import"./index-xIHD0DlW.js";import"./notice-4BhmFOzq.js";import"./alert-tqfoW4Zy.js";import"./use-component-style-SBdvRTzg.js";import"./close-button-v1XSz0IO.js";import"./use-ripple-WyPsLtJa.js";import"./index-ykno15jz.js";import"./index-gvcGOgrq.js";const ie={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=y({initialThemeScheme:"pink"});return e(g,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    themeSchemes: {
      pink: {
        semantics: {
          colors: {
            primary: "pink.500",
            secondary: "violet.500"
          },
          colorSchemes: {
            primary: "pink",
            secondary: "violet"
          }
        }
      },
      purple: {
        semantics: {
          colors: {
            primary: "purple.500",
            secondary: "teal.500"
          },
          colorSchemes: {
            primary: "purple",
            secondary: "teal"
          }
        }
      },
      green: {
        semantics: {
          colors: {
            primary: "green.500",
            secondary: "cyan.500"
          },
          colorSchemes: {
            primary: "green",
            secondary: "cyan"
          }
        }
      }
    }
  })();
  const config = extendConfig({
    initialThemeScheme: "pink"
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme="gray" onClick={() => changeThemeScheme("base")}>
            Base Theme
          </Button>
          <Button colorScheme="pink" onClick={() => changeThemeScheme("pink")}>
            Pink Theme
          </Button>
          <Button colorScheme="purple" onClick={() => changeThemeScheme("purple")}>
            Purple Theme
          </Button>
          <Button colorScheme="green" onClick={() => changeThemeScheme("green")}>
            Green Theme
          </Button>
        </HStack>

        <Container p="md" gap="md" rounded="md" border="1px solid" borderColor="inherit" boxShadow="md">
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap="md">
            <Badge colorScheme="primary">Primary</Badge>
            <Badge colorScheme="secondary">Secondary</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="danger">Danger</Badge>
          </Wrap>

          <Wrap gap="md">
            <Tag colorScheme="primary">Primary</Tag>
            <Tag colorScheme="secondary">Secondary</Tag>
            <Tag colorScheme="warning">Warning</Tag>
            <Tag colorScheme="danger">Danger</Tag>
          </Wrap>

          <Wrap gap="md">
            <Button colorScheme="primary" size="sm">
              Primary
            </Button>
            <Button colorScheme="secondary" size="sm">
              Secondary
            </Button>
            <Button colorScheme="warning" size="sm">
              Warning
            </Button>
            <Button colorScheme="danger" size="sm">
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>;
  };
  return <UIProvider theme={theme} config={config}>
      <App />
    </UIProvider>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const te=["basic"];export{te as __namedExportsOrder,a as basic,ie as default};
