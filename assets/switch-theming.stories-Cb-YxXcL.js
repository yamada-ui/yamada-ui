import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{U as g}from"./ui-provider-DWDElRDz.js";import{e as S}from"./extend-theme-B8nwPMEr.js";import{e as y}from"./extend-config-BsOI7cVm.js";import{u}from"./theme-provider-jjrI8DS5.js";import{V as x,H as T}from"./stack-Bfvcm7oc.js";import{B as n}from"./button-Ct3RLDFk.js";import{C as B}from"./container-DneXHRgN.js";import{H as k}from"./heading-D2p3oV73.js";import{W as i}from"./flex-DE1vjCwo.js";import{B as o}from"./badge-BNmwO1q8.js";import{T as c}from"./tag-BEO-S6Rj.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFMnyllO.js";import"./factory-BskLObbI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./environment-provider-CcIf9lIw.js";import"./motion-BNFRb361.js";import"./loading-provider-CDdYOLF-.js";import"./index-BvZw_CpU.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./loading-saJjm8M-.js";import"./icon-fvknOP9v.js";import"./index-H5wmSkhu.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-component-style-CgbLkkPD.js";import"./motion-CrGhO2Op.js";import"./index-DSHhgXSs.js";import"./container-portal-JDqPBgzp.js";import"./index-CqS9fqXy.js";import"./notice-DoZw1b4v.js";import"./alert-Di5w-WcJ.js";import"./close-button-CWeEuSm2.js";import"./use-ripple-CZ_-Qqh5.js";import"./index-CKCcTrZV.js";import"./index-DdtYzkfd.js";const ie={title:"System / Theme / Switch Theming"},m=()=>{const p=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),h=y({initialThemeScheme:"pink"}),d=()=>{const{themeScheme:l,changeThemeScheme:r}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(i,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{theme:p,config:h,children:e.jsx(d,{})})};var a,s,t;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const ae=["basic"];export{ae as __namedExportsOrder,m as basic,ie as default};
