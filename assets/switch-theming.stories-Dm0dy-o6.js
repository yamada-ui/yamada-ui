import{j as e}from"./extends-CwFRzn3r.js";import{U as g}from"./ui-provider-CR3qLfhM.js";import{e as S}from"./extend-theme-Dsyd7FnU.js";import{e as y}from"./extend-config-Ka7_o5dC.js";import{u}from"./theme-provider-CXgbrDrx.js";import{V as x,H as T}from"./stack-CekQ0zhE.js";import{B as n}from"./button-DIEsmS57.js";import{C as B}from"./container-BlIYaC_j.js";import{H as k}from"./heading-CAQzQLMC.js";import{W as a}from"./flex-CLuTGFgR.js";import{B as o}from"./badge-uWKyKRyX.js";import{T as c}from"./tag-BraOchAi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-9x5uvn4t.js";import"./factory-uBtAHRUq.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BLWcNkD_.js";import"./index-BQx3ENRf.js";import"./Combination-IUp2vs9T.js";import"./loading-B8wvkUDD.js";import"./icon-fUKD81HD.js";import"./use-component-style-Dk4hKw8J.js";import"./use-var-OedIQrNj.js";import"./forward-ref-BWI-Phbn.js";import"./factory-BoNL08IU.js";import"./portal-DePa0xuj.js";import"./index-Drt3gf4w.js";import"./notice-BlPHBy7w.js";import"./alert-CXSVmj5E.js";import"./close-button-C86qv8Qn.js";import"./use-ripple-B-yka01P.js";import"./index-CMM3kl6L.js";import"./index-JkdTfK17.js";const re={title:"System / Theme / Switch Theming"},m=()=>{const h=S({themeSchemes:{green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}},pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}}}})(),p=y({initialThemeScheme:"pink"}),d=()=>{const{changeThemeScheme:r,themeScheme:l}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(a,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(a,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(a,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{config:p,theme:h,children:e.jsx(d,{})})};var i,s,t;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const oe=["basic"];export{oe as __namedExportsOrder,m as basic,re as default};
