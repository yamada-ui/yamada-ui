import{j as t,a as v}from"./jsx-runtime-276775ef.js";import{B as I}from"./badge-9f940459.js";import{e as c,b as z,a as C,c as j,d as U,f as O,g as F}from"./extend-theme-705433c9.js";import{m as u,l as d}from"./factory-75cc801c.js";import{U as l}from"./ui-provider-ca506ecd.js";import{W as E}from"./flex-d10357f1.js";import{T as A}from"./tag-872610ea.js";import{B as W}from"./button-aae638aa.js";import{C as V}from"./center-f24092aa.js";import{I as _}from"./image-152f5a48.js";import"./index-1cdf6ce0.js";import"./forward-ref-86842115.js";import"./use-component-style-9ee8741d.js";import"./theme-8f32df8a.js";import"./index-412d5463.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./environment-provider-f0cd95a3.js";import"./loading-provider-8657b718.js";import"./index-7320e9bd.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-53506941.js";import"./motion-1ef152f4.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./index-f3237c2b.js";import"./container-portal-1f9dc5e6.js";import"./index-a01a9712.js";import"./notice-ba0e8aa8.js";import"./alert-185d7d3c.js";import"./close-button-a6b70db7.js";import"./index-a7a7f4ec.js";import"./index-2c974345.js";import"./use-image-21444f3a.js";const M=({size:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})},R=({variant:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})},q=({colorScheme:e,components:n})=>o=>{let r=Object.keys(o.components??{});return d(n)&&(r=n),u(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})},be={title:"System / Theme / Extend Theming"},a=()=>{const e=c({})({merge:!0,omit:[],pick:[]});return t(l,{theme:e,children:t(h,{})})},m=()=>{const e=c({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t(l,{theme:e,children:t(h,{})})},i=()=>{const e=c(M({size:"lg",components:["Badge","Tag","Button"]}),R({variant:"solid",components:["Badge","Tag","Button"]}),q({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t(l,{theme:e,children:v(E,{gap:"md",align:"flex-start",children:[t(I,{children:"Badge"}),t(A,{children:"Tag"}),t(W,{children:"Button"})]})})},p=()=>{const e=z("resetStyle",{}),n=C("colors",{}),o=j("Button",{}),r={baseStyle:{},variants:U("Tag",{}),sizes:O("Tag",{}),defaultProps:F("Tag",{})},s=c({styles:{resetStyle:e},colors:n,components:{Button:o,Tag:r}})({merge:!1});return t(l,{theme:s,children:t(h,{})})},h=()=>t(V,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:t(_,{w:"full",maxW:"32rem",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})});var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(b=(D=p.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const ve=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{ve as __namedExportsOrder,a as basic,be as default,p as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
//# sourceMappingURL=extend-theming.stories-eaa1699d.js.map
