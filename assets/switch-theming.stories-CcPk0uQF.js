import{j as e}from"./extends-CwFRzn3r.js";import{U as g}from"./ui-provider-yMwBxUIm.js";import{e as S}from"./extend-theme-7mkSnG70.js";import{e as y}from"./extend-config-BEVeWXMv.js";import{u}from"./theme-provider-Bw55Thfs.js";import{V as x,H as T}from"./stack-BgPwn3nO.js";import{B as n}from"./button-CrM87X6c.js";import{C as B}from"./container-BvGlRIYM.js";import{H as k}from"./heading-dk96vHPE.js";import{W as a}from"./flex-Boa2DUBc.js";import{B as o}from"./badge-rRFzTe0F.js";import{T as c}from"./tag-DiuQgi_F.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_KRzJwV.js";import"./factory-DfCPDZht.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-CXnmHf9o.js";import"./index-BMx7qnvq.js";import"./Combination-IUp2vs9T.js";import"./loading-BhlblpEj.js";import"./icon-BY9dMEpR.js";import"./index-DOyhBR5n.js";import"./use-component-style-D0DGb12b.js";import"./forward-ref-BWI-Phbn.js";import"./factory-B9-LT_yD.js";import"./portal-CQMr5Yur.js";import"./index-Drt3gf4w.js";import"./notice-DTPWb24k.js";import"./alert-B68M2OPG.js";import"./close-button-nW1Gs_LT.js";import"./use-ripple-C-c72TCS.js";import"./index-Bq6qUkKi.js";import"./index-DX1ItL2L.js";const re={title:"System / Theme / Switch Theming"},m=()=>{const h=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),p=y({initialThemeScheme:"pink"}),d=()=>{const{themeScheme:l,changeThemeScheme:r}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(a,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(a,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(a,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{theme:h,config:p,children:e.jsx(d,{})})};var i,s,t;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const oe=["basic"];export{oe as __namedExportsOrder,m as basic,re as default};
