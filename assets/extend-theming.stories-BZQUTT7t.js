import{j as t}from"./extends-CwFRzn3r.js";import{e as p,b,a as v,c as I,d as z,f as C,g as U}from"./extend-theme-CNQkXFaS.js";import{U as u}from"./ui-provider-n09sy5wb.js";import{m as l,F as d}from"./factory-CB2imrkD.js";import{W as F}from"./flex-DFuKYgFC.js";import{B as O}from"./badge-BxfSuwtf.js";import{T as E}from"./tag-C8nkEeOd.js";import{B as A}from"./button-D6MtFxez.js";import{C as W}from"./center-tpAwapBn.js";import{I as V}from"./image-Dh24_Zyc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C7I_pN7l.js";import"./theme-provider-D1j4LEQ9.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BppVNRPn.js";import"./index-CtiIN-rJ.js";import"./Combination-IUp2vs9T.js";import"./loading-6PAwx6O9.js";import"./icon-GDJ6YhRU.js";import"./use-component-style-CLkw4iG2.js";import"./use-var-D-eiJB8b.js";import"./forward-ref-BWI-Phbn.js";import"./factory-C3FBZMw9.js";import"./portal-DhKIhJFj.js";import"./index-Drt3gf4w.js";import"./notice-Dqn85RIz.js";import"./alert-CKoFoHX4.js";import"./close-button-DxeSp445.js";import"./use-ripple-D_F9Vz55.js";import"./index-LwS2tk1a.js";import"./index-C60CJblF.js";import"./use-image-Dw78bUOu.js";function _({size:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{size:e}}]))})}}function M({variant:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{variant:e}}]))})}}function R({colorScheme:e,components:n}){return function(o){let r=Object.keys(o.components??{});return d(n)&&(r=n),l(o,{components:Object.fromEntries(r.map(s=>[s,{defaultProps:{colorScheme:e}}]))})}}const we={title:"System / Theme / Extend Theming"},a=()=>{const e=p({})({merge:!0,omit:[],pick:[]});return t.jsx(u,{theme:e,children:t.jsx(f,{})})},m=()=>{const e=p({colors:{black:"#1F2123"}},{colors:{white:"#F6F6F6"}})();return t.jsx(u,{theme:e,children:t.jsx(f,{})})},i=()=>{const e=p(_({size:"lg",components:["Badge","Tag","Button"]}),M({variant:"solid",components:["Badge","Tag","Button"]}),R({colorScheme:"primary",components:["Badge","Tag","Button"]}))();return t.jsx(u,{theme:e,children:t.jsxs(F,{align:"flex-start",gap:"md",children:[t.jsx(O,{children:"Badge"}),t.jsx(E,{children:"Tag"}),t.jsx(A,{children:"Button"})]})})},c=()=>{const e=b("resetStyle",{}),n=v("colors",{}),o=I("Button",{}),r={baseStyle:{},sizes:z("Tag",{}),variants:C("Tag",{}),defaultProps:U("Tag",{})},s=p({colors:n,components:{Button:o,Tag:r},styles:{resetStyle:e}})({merge:!1});return t.jsx(u,{theme:s,children:t.jsx(f,{})})},f=()=>t.jsx(W,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:t.jsx(V,{src:"https://raw.githubusercontent.com/yamada-ui/yamada-ui/main/logo/logo-colored@2x.png",maxW:"32rem",w:"full"})});var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,T,B;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const theme = extendTheme({
    colors: {
      black: "#1F2123"
    }
  }, {
    colors: {
      white: "#F6F6F6"
    }
  })();
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var w,S,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  // Rewrite default props for specified component
  const theme = extendTheme(withDefaultSize({
    size: "lg",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultVariant({
    variant: "solid",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
  }), withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Badge", "Tag", "Button"] // If empty, rewrite for all components
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
      <Wrap align="flex-start" gap="md">
        <Badge>Badge</Badge>
        <Tag>Tag</Tag>
        <Button>Button</Button>
      </Wrap>
    </UIProvider>;
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var P,k,D;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const resetStyle: UIStyle = extendStyle("resetStyle", {
    /**
     * Define a new style
     */
  });
  const colors: ThemeTokens = extendToken("colors", {
    /**
     * Define the token you want to customize
     */
  });
  const Button: ComponentStyle = extendComponent("Button", {
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
    sizes: extendComponentSize("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    variants: extendComponentVariant("Tag", {
      /**
       * Define the token you want to customize
       */
    }),
    defaultProps: extendComponentDefaultProps("Tag", {
      /**
       * Define the default props you want to customize
       */
    })
  };
  const theme = extendTheme({
    colors,
    components: {
      Button,
      Tag
    },
    styles: {
      resetStyle
    }
  })({
    merge: false
  });
  return <UIProvider theme={theme}>
      <App />
    </UIProvider>;
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const Se=["basic","useMultiObject","rewriteDefaultProps","othersExtend"];export{Se as __namedExportsOrder,a as basic,we as default,c as othersExtend,i as rewriteDefaultProps,m as useMultiObject};
