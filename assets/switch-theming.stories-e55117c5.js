import{a as e,j as r}from"./jsx-runtime-03b4ddbf.js";import{e as g}from"./extend-config-14f84a21.js";import{B as c}from"./badge-1a3e7eed.js";import{e as S}from"./extend-theme-a5bd99b1.js";import{U as y}from"./ui-provider-7eed32e1.js";import{u}from"./theme-provider-87f127bc.js";import{V as T,H as B}from"./stack-4ddf0d37.js";import{B as n}from"./button-55a1630a.js";import{C as k}from"./container-f45ab7ca.js";import{H as f}from"./heading-14cd9b3e.js";import{W as i}from"./flex-24e3ba3b.js";import{T as m}from"./tag-79137200.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-3ac48b38.js";import"./factory-b055fecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-f62022c6.js";import"./environment-provider-0fcba816.js";import"./loading-provider-727a0c58.js";import"./index-9495b79b.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-dc7fd126.js";import"./motion-90200a2f.js";import"./loading-9bbac61f.js";import"./index-f35d6182.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./icon-4b40a161.js";import"./index-033cf86e.js";import"./container-portal-995940dd.js";import"./index-d3ea75b5.js";import"./notice-cce46d8a.js";import"./alert-cc355271.js";import"./close-button-c1250682.js";import"./index-69fece7f.js";import"./index-164135f7.js";const te={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=g({initialThemeScheme:"pink"});return e(y,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const pe=["basic"];export{pe as __namedExportsOrder,a as basic,te as default};
//# sourceMappingURL=switch-theming.stories-e55117c5.js.map
