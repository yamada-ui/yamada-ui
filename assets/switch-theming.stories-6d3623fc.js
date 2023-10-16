import{a as e,j as r}from"./jsx-runtime-03b4ddbf.js";import{e as g}from"./extend-config-16536748.js";import{B as c}from"./badge-8f6cf5bf.js";import{e as S}from"./extend-theme-3add308f.js";import{U as y}from"./ui-provider-8b6b80fd.js";import{u}from"./theme-provider-89b34f8f.js";import{V as T,H as B}from"./stack-ed57c18e.js";import{B as n}from"./button-88fe2c22.js";import{C as k}from"./container-e8088bea.js";import{H as f}from"./heading-8b38c266.js";import{W as i}from"./flex-4bbc55fe.js";import{T as m}from"./tag-af32064b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-dd23880e.js";import"./factory-0b90ba06.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-c6f16384.js";import"./environment-provider-871250b3.js";import"./loading-provider-a6c580af.js";import"./index-04a58079.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-0f98ef71.js";import"./motion-90200a2f.js";import"./loading-a0c81de9.js";import"./index-8dce054c.js";import"./index-1560c0d4.js";import"./index-a6848ad8.js";import"./icon-583bdc7e.js";import"./index-033cf86e.js";import"./container-portal-53fb233b.js";import"./index-d3ea75b5.js";import"./notice-8072a30d.js";import"./alert-358915f8.js";import"./close-button-28c625ae.js";import"./index-042574bb.js";import"./index-57da3535.js";const te={title:"System / Theme / Switch Theming"},a=()=>{const s=S({themeSchemes:{pink:{semantics:{colors:{primary:"pink.500",secondary:"violet.500"},colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semantics:{colors:{primary:"purple.500",secondary:"teal.500"},colorSchemes:{primary:"purple",secondary:"teal"}}},green:{semantics:{colors:{primary:"green.500",secondary:"cyan.500"},colorSchemes:{primary:"green",secondary:"cyan"}}}}})(),d=g({initialThemeScheme:"pink"});return e(y,{theme:s,config:d,children:e(()=>{const{themeScheme:l,changeThemeScheme:o}=u();return r(T,{children:[r(B,{children:[e(n,{colorScheme:"gray",onClick:()=>o("base"),children:"Base Theme"}),e(n,{colorScheme:"pink",onClick:()=>o("pink"),children:"Pink Theme"}),e(n,{colorScheme:"purple",onClick:()=>o("purple"),children:"Purple Theme"}),e(n,{colorScheme:"green",onClick:()=>o("green"),children:"Green Theme"})]}),r(k,{p:"md",gap:"md",rounded:"md",border:"1px solid",borderColor:"inherit",boxShadow:"md",children:[r(f,{children:[l," Theme"]}),r(i,{gap:"md",children:[e(c,{colorScheme:"primary",children:"Primary"}),e(c,{colorScheme:"secondary",children:"Secondary"}),e(c,{colorScheme:"warning",children:"Warning"}),e(c,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(m,{colorScheme:"primary",children:"Primary"}),e(m,{colorScheme:"secondary",children:"Secondary"}),e(m,{colorScheme:"warning",children:"Warning"}),e(m,{colorScheme:"danger",children:"Danger"})]}),r(i,{gap:"md",children:[e(n,{colorScheme:"primary",size:"sm",children:"Primary"}),e(n,{colorScheme:"secondary",size:"sm",children:"Secondary"}),e(n,{colorScheme:"warning",size:"sm",children:"Warning"}),e(n,{colorScheme:"danger",size:"sm",children:"Danger"})]})]})]})},{})})};var t,p,h;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=switch-theming.stories-6d3623fc.js.map
