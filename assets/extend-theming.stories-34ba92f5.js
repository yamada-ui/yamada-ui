import{j as t,a as v}from"./jsx-runtime-29545a09.js";import{m as u,n as d}from"./factory-1df513a8.js";import{e as c,b as I,a as z,c as C,d as j,f as U,g as O}from"./extend-theme-fc25bde9.js";import{U as l}from"./ui-provider-21ac57d6.js";import{W as F}from"./flex-f0d8bdcf.js";import{B as E}from"./badge-f5ef178b.js";import{T as A}from"./tag-be94ae2f.js";import{B as W}from"./button-2639d6b4.js";import{C as V}from"./center-facc508f.js";import{I as _}from"./image-464ec023.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-e2c50b53.js";import"./theme-provider-201f3628.js";import"./environment-provider-e20dee61.js";import"./loading-provider-2402bb2a.js";import"./index-1e93c2ad.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./motion-caa3a75b.js";import"./motion-90200a2f.js";import"./forward-ref-8b7d2a6f.js";import"./loading-dd0961b1.js";import"./index-55fd3e44.js";import"./index-f101e08f.js";import"./index-ce24d1ad.js";import"./icon-da3614f7.js";import"./index-033cf86e.js";import"./container-portal-7f7245ed.js";import"./index-d3ea75b5.js";import"./notice-1815e49b.js";import"./alert-9c57737d.js";import"./use-component-style-89c5560c.js";import"./close-button-e4c105dd.js";import"./index-f7615ed6.js";import"./index-0bddc11e.js";import"./use-image-36f2478a.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},ve={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(F,{gap:"md",align:"flex-start",children:[t(E,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=I("resetStyle",{}),n=z("colors",{}),o=C("Button",{}),r={baseStyle:{},variants:j("Tag",{}),sizes:U("Tag",{}),defaultProps:O("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    /**
     * Define the theme you want to customize, merging them with the default theme
     */
  })({
    merge: true,
    // If false, not merge default themes
    omit: [],
    // Tokens of default themes you want to omit in the merge
    pick: [] // Tokens of default themes you want to pick in the merge
  });

  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,x,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: '#1F2123'
    }
  }, {
    colors: {
      white: '#F6F6F6'
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(x=m.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var w,S,P;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: 'lg',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: 'solid',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: 'primary',
    components: ['Badge', 'Tag', 'Button'] // If empty, rewrite for all components
  })
  // or
  // withDefaultProps({
  //   defaultProps: {
  //     size: 'xl',
  //     variant: 'outline',
  //     colorScheme: 'primary',
  //   },
  //   components: ['Badge', 'Tag', 'Button'],
  // }),
  )();

  return <UIProvider theme={theme}>
      <Wrap gap='md' align='flex-start'>
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,D,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle('resetStyle', {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken('colors', {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent('Button', {
    /**
     * Define the layout you want to customize
     */
  });
  const Tag: ComponentStyle = {
    baseStyle: {
      /**
       * Define a new style
       */
    },
    variants: extendComponentVariant('Tag', {
      /**
       * Define the token you want to customize
       */
    }),
    sizes: extendComponentSize('Tag', {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps('Tag', {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    styles: {
      resetStyle
    },
    colors,
    components: {
      Button,
      Tag
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const Ie=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{Ie as __namedExportsOrder,a as basic,ve as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
//# sourceMappingURL=extend-theming.stories-34ba92f5.js.map
