import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{U as g}from"./ui-provider-DO1NwXs6.js";import{e as S}from"./extend-theme-zWJdH8wk.js";import{e as y}from"./extend-config-IaC0xa80.js";import{u}from"./theme-provider-CJ7n5K3X.js";import{V as x,H as T}from"./stack-BPGCIIRz.js";import{B as n}from"./button-hJJyOv6z.js";import{C as B}from"./container-CWMXycT_.js";import{H as k}from"./heading-CK_Ge5mT.js";import{W as i}from"./flex-DAi4q4ic.js";import{B as o}from"./badge-XQbRPCxc.js";import{T as c}from"./tag-CxkKFQrV.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dq2FwSZw.js";import"./factory-QgPjGyGX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./environment-provider-BOjA_qdD.js";import"./motion-B93Hlbuy.js";import"./loading-provider-DKsY44mu.js";import"./index-CN4cNXcQ.js";import"./Combination-DJN7gWe0.js";import"./loading-BANDzD4q.js";import"./icon-BzYp-3aP.js";import"./index-NB1UEv68.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-Dz3o-zMC.js";import"./motion-TW7fLZQq.js";import"./index-D53P4PVU.js";import"./container-portal-D6XnX2zx.js";import"./index-B8XB3FuZ.js";import"./notice-BPJGdp4C.js";import"./alert-CGDWnj9Y.js";import"./close-button-Cz_XpwQt.js";import"./use-ripple-BYp28iIh.js";import"./index-DwTh8qPj.js";import"./index-DHmrSoXa.js";const me={title:"System / Theme / Switch Theming"},m=()=>{const h=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),p=y({initialThemeScheme:"pink"}),d=()=>{const{themeScheme:l,changeThemeScheme:r}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(i,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{theme:h,config:p,children:e.jsx(d,{})})};var a,s,t;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const ie=["basic"];export{ie as __namedExportsOrder,m as basic,me as default};
