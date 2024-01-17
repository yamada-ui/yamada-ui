import{j as e,a as r}from"./jsx-runtime-5BUNAZ9W.js";import{U as g}from"./ui-provider-VNXlvV5z.js";import{e as S}from"./extend-theme-u8DLQRtf.js";import{e as y}from"./extend-config-oaUD_kK1.js";import{u}from"./theme-provider-4KOeReOn.js";import{V as T,H as B}from"./stack-gftUt5we.js";import{B as n}from"./button-BwFPDuN6.js";import{C as k}from"./container-wTCqe5ma.js";import{H as f}from"./heading-gHweg89h.js";import{W as i}from"./flex-Jsp1c9BN.js";import{B as c}from"./badge-rZeN5aJ7.js";import{T as m}from"./tag-kD8VjpEw.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./environment-provider-fkDixBz8.js";import"./motion-ukEXpwwk.js";import"./loading-provider-tfeo5hBk.js";import"./index-B4ddhKBr.js";import"./Combination-8oCz4vin.js";import"./loading-6RwEQblT.js";import"./index-2fdIbPpW.js";import"./index-F6j05pB5.js";import"./index-DKGSNMBl.js";import"./icon-VHqa4iO4.js";import"./forward-ref-A-8Arhkk.js";import"./motion-rimQiqxs.js";import"./index-EargzzxG.js";import"./container-portal-e1Mvj3y3.js";import"./index-jmm5gWkb.js";import"./notice-mCuNJqL1.js";import"./alert-3duH9q4H.js";import"./use-component-style-a9Y1koMB.js";import"./close-button-rjaFJeax.js";import"./use-ripple-iEFkrfzn.js";import"./index-sz5IJH3R.js";import"./index-6ZiV4iA-.js";const ie={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=y({initialThemeScheme:"pink"});return e(g,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
