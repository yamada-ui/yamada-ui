import{j as e}from"./jsx-runtime-DztICxWZ.js";import{U as g}from"./ui-provider-BhqK2kQi.js";import{e as S}from"./extend-theme-BbExOZ9-.js";import{e as y}from"./extend-config-PHBcbboa.js";import{u}from"./theme-provider-DsbwOWxu.js";import{V as x,H as T}from"./stack-DL8tKm2J.js";import{B as n}from"./button-nZ2ZqBRb.js";import{C as B}from"./container-Bjx_eJn4.js";import{H as k}from"./heading-DiAnMbcf.js";import{W as i}from"./flex-B0SWTXUi.js";import{B as o}from"./badge-Bg_-OHDb.js";import{T as c}from"./tag-CgF6Q1qr.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BylWRU36.js";import"./factory-7Z88KRtK.js";import"./i18n-provider-CmpcPFo-.js";import"./proxy-r-x5KraU.js";import"./loading-provider-DbAaOp8i.js";import"./index-CIBO3FO4.js";import"./Combination--fBz1e3g.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./use-var-Bz9rJ8_M.js";import"./forward-ref-DH6f5tnY.js";import"./memo-BZ69bafo.js";import"./index-B2HRqSdn.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./factory-UaNlpug7.js";import"./notice-BMy32cRJ.js";import"./alert-kLbVPxqu.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-BdmKGyZV.js";import"./index-BhIdR6KT.js";const ie={title:"System / Theme / Switch Theming"},m=()=>{const p=S({themeSchemes:{green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}},pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}}}})(),h=y({initialThemeScheme:"pink"}),d=()=>{const{changeThemeScheme:r,themeScheme:l}=u();return e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(n,{colorScheme:"gray",onClick:()=>r("base"),children:"Base Theme"}),e.jsx(n,{colorScheme:"pink",onClick:()=>r("pink"),children:"Pink Theme"}),e.jsx(n,{colorScheme:"purple",onClick:()=>r("purple"),children:"Purple Theme"}),e.jsx(n,{colorScheme:"green",onClick:()=>r("green"),children:"Green Theme"})]}),e.jsxs(B,{border:"1px solid",borderColor:"inherit",boxShadow:"md",gap:"md",p:"md",rounded:"md",children:[e.jsxs(k,{children:[l," Theme"]}),e.jsxs(i,{gap:"md",children:[e.jsx(o,{colorScheme:"primary",children:"Primary"}),e.jsx(o,{colorScheme:"secondary",children:"Secondary"}),e.jsx(o,{colorScheme:"warning",children:"Warning"}),e.jsx(o,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(c,{colorScheme:"primary",children:"Primary"}),e.jsx(c,{colorScheme:"secondary",children:"Secondary"}),e.jsx(c,{colorScheme:"warning",children:"Warning"}),e.jsx(c,{colorScheme:"danger",children:"Danger"})]}),e.jsxs(i,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e.jsx(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e.jsx(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})};return e.jsx(g,{config:h,theme:p,children:e.jsx(d,{})})};var a,s,t;m.parameters={...m.parameters,docs:{...(a=m.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(t=(s=m.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const ae=["basic"];export{ae as __namedExportsOrder,m as basic,ie as default};
