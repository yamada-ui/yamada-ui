import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{U as g}from"./ui-provider-CegOqY5F.js";import{e as S}from"./extend-theme-fAOsuOMa.js";import{e as y}from"./extend-config-C_BeZzXM.js";import{u}from"./theme-provider-CVa4tFyh.js";import{V as x,H as T}from"./stack-CTDErg2_.js";import{B as n}from"./button-CLAnfRTj.js";import{C as B}from"./container-cD9zL-A5.js";import{H as k}from"./heading-D1HN36hc.js";import{W as i}from"./flex-CYrDLswJ.js";import{B as o}from"./badge-DNtQdwW1.js";import{T as c}from"./tag-_ibtkHFD.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BY_szq1e.js";import"./factory-DB2JyeD8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./environment-provider-B_j58KoN.js";import"./motion-B93Hlbuy.js";import"./loading-provider-C84VWPLn.js";import"./index-DfKVCsmU.js";import"./Combination-DJN7gWe0.js";import"./loading-qhJXVDYI.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-eZPQMXFE.js";import"./motion-DWzc3n8e.js";import"./index-D53P4PVU.js";import"./container-portal-Dedn3QCZ.js";import"./index-B8XB3FuZ.js";import"./notice-iR7cp8Fj.js";import"./alert-oZh_Z9zi.js";import"./close-button-BMomi7bd.js";import"./use-ripple-BNFWROsb.js";import"./index-CvIo7w-w.js";import"./index-X30eDiIt.js";const me={title:"System / Theme / Switch Theming"},m=()=>{const h=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),p=y({initialThemeScheme:"pink"}),d=()=>{const{themeScheme:l,changeThemeScheme:r}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(i,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{theme:h,config:p,children:e.jsx(d,{})})};var a,s,t;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
