import{j as e}from"./jsx-runtime-CfatFE5O.js";import{U as g}from"./ui-provider-DsKQbJxr.js";import{e as S}from"./extend-theme-BoH28M9N.js";import{e as y}from"./extend-config-e1OIr_b_.js";import{u}from"./theme-provider-B08WIPTu.js";import{V as x,H as T}from"./stack-C-NTCosl.js";import{B as n}from"./button-CP_V-DFs.js";import{C as B}from"./container-Df493Kde.js";import{H as k}from"./heading-BVBVXWj5.js";import{W as i}from"./flex-ZeDiVseB.js";import{B as o}from"./badge-BwnvY0eV.js";import{T as c}from"./tag-CNvAmfZ9.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-3WpywC.js";import"./factory-ZSnRp-09.js";import"./i18n-provider-hIJzsxvZ.js";import"./proxy-Cmv22F1b.js";import"./loading-provider--y3RkBPg.js";import"./index-B2YNaAAX.js";import"./Combination-CkmEMpJG.js";import"./loading-YSmVr9V5.js";import"./icon-D-mdHq7J.js";import"./use-component-style-Bj6hwx_Q.js";import"./use-var-BqMKFNOM.js";import"./forward-ref-D13m8o2p.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-g1ZPYqox.js";import"./notice-DvQqbFbR.js";import"./alert-B_-MDf54.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CGbpPqLk.js";import"./index-DX5Nxq0F.js";const me={title:"System / Theme / Switch Theming"},m=()=>{const h=S({themeSchemes:{green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}},pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}}}})(),p=y({initialThemeScheme:"pink"}),d=()=>{const{changeThemeScheme:r,themeScheme:l}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(i,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{config:p,theme:h,children:e.jsx(d,{})})};var a,s,t;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    themeSchemes: {
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
      },
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
      }
    }
  })();
  const config = extendConfig({
    initialThemeScheme: "pink"
  });
  const App: FC = () => {
    const {
      changeThemeScheme,
      themeScheme
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

        <Container border="1px solid" borderColor="inherit" boxShadow="md" gap="md" p="md" rounded="md">
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
  return <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>;
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const ie=["basic"];export{ie as __namedExportsOrder,m as basic,me as default};
