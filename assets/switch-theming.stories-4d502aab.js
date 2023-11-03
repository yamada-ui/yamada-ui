import{a as e,j as r}from"./jsx-runtime-b08f8875.js";import{e as g}from"./extend-config-64cb4f9e.js";import{B as c}from"./badge-b298e472.js";import{e as S}from"./extend-theme-358aa36c.js";import{U as y}from"./ui-provider-ccaef44f.js";import{u}from"./theme-provider-1097130b.js";import{V as T,H as B}from"./stack-f811b10a.js";import{B as n}from"./button-3d1799ed.js";import{C as k}from"./container-d88817c5.js";import{H as f}from"./heading-bcd0bbae.js";import{W as i}from"./flex-eedf9e68.js";import{T as m}from"./tag-3bb010aa.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-19f25cb1.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-07e84389.js";import"./environment-provider-c01394a3.js";import"./loading-provider-ee662396.js";import"./index-76f20168.js";import"./loading-0bce3a59.js";import"./index-6cdd3cb8.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";import"./icon-1c0bf186.js";import"./motion-2d0d8241.js";import"./motion-5447b2d8.js";import"./index-709acde9.js";import"./container-portal-d647f37d.js";import"./index-8bf7f4ad.js";import"./notice-c6d0d044.js";import"./alert-96f995e0.js";import"./close-button-b4ee3b21.js";import"./index-b013f003.js";import"./index-a3b565a7.js";const ae={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=g({initialThemeScheme:"pink"});return e(y,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    themeSchemes: {
      pink: {
        semantics: {
          colors: {
            primary: 'pink.500',
            secondary: 'violet.500'
          },
          colorSchemes: {
            primary: 'pink',
            secondary: 'violet'
          }
        }
      },
      purple: {
        semantics: {
          colors: {
            primary: 'purple.500',
            secondary: 'teal.500'
          },
          colorSchemes: {
            primary: 'purple',
            secondary: 'teal'
          }
        }
      },
      green: {
        semantics: {
          colors: {
            primary: 'green.500',
            secondary: 'cyan.500'
          },
          colorSchemes: {
            primary: 'green',
            secondary: 'cyan'
          }
        }
      }
    }
  })();
  const config = extendConfig({
    initialThemeScheme: 'pink'
  });
  const App: FC = () => {
    const {
      themeScheme,
      changeThemeScheme
    } = useTheme();
    return <VStack>
        <HStack>
          <Button colorScheme='gray' onClick={() => changeThemeScheme('base')}>
            Base Theme
          </Button>
          <Button colorScheme='pink' onClick={() => changeThemeScheme('pink')}>
            Pink Theme
          </Button>
          <Button colorScheme='purple' onClick={() => changeThemeScheme('purple')}>
            Purple Theme
          </Button>
          <Button colorScheme='green' onClick={() => changeThemeScheme('green')}>
            Green Theme
          </Button>
        </HStack>

        <Container p='md' gap='md' rounded='md' border='1px solid' borderColor='inherit' boxShadow='md'>
          <Heading>{themeScheme} Theme</Heading>

          <Wrap gap='md'>
            <Badge colorScheme='primary'>Primary</Badge>
            <Badge colorScheme='secondary'>Secondary</Badge>
            <Badge colorScheme='warning'>Warning</Badge>
            <Badge colorScheme='danger'>Danger</Badge>
          </Wrap>

          <Wrap gap='md'>
            <Tag colorScheme='primary'>Primary</Tag>
            <Tag colorScheme='secondary'>Secondary</Tag>
            <Tag colorScheme='warning'>Warning</Tag>
            <Tag colorScheme='danger'>Danger</Tag>
          </Wrap>

          <Wrap gap='md'>
            <Button colorScheme='primary' size='sm'>
              Primary
            </Button>
            <Button colorScheme='secondary' size='sm'>
              Secondary
            </Button>
            <Button colorScheme='warning' size='sm'>
              Warning
            </Button>
            <Button colorScheme='danger' size='sm'>
              Danger
            </Button>
          </Wrap>
        </Container>
      </VStack>;
  };
  return <UIProvider theme={theme} config={config}>
      <App />
    </UIProvider>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const ie=["basic"];export{ie as __namedExportsOrder,a as basic,ae as default};
//# sourceMappingURL=switch-theming.stories-4d502aab.js.map
