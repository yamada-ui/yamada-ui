import{j as S}from"./jsx-runtime-X2b_N9AH.js";import{u as f}from"./index-BoknWkbH.js";import{r as n}from"./index-uCp2LrAq.js";import{W as b}from"./factory-eGqOwxJN.js";import{W as B}from"./flex-XbqNDqP_.js";import{B as h}from"./button-Dg1r1tLc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-ripple-BL9M4SmM.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-D9P5qI5Q.js";import"./loading-RZrS9-iD.js";import"./icon-C4f_KbJN.js";import"./index-BAZmNyaF.js";import"./theme-provider-DBZuijdl.js";import"./use-component-style-DAcjH3Cb.js";const W=(o,i)=>{try{return JSON.stringify(o)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},j=o=>{if(!o)return o;try{return JSON.parse(o)}catch{return o}},N=(o,i)=>{const s="ui-local-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=j,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(e=>{if(typeof window>"u"||!(o in window)||window[o]===null||e)return r??"";const u=window[o].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[m,a]=n.useState(c(d)),g=n.useCallback(e=>{b(e)?a(u=>{const v=e(u);return window[o].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:e(u)}})),v}):(window[o].setItem(t,w(e)),window.dispatchEvent(new CustomEvent(s,{detail:{key:t,value:e}})),a(e))},[t,w]),L=n.useCallback(()=>{window[o].removeItem(t),a(r)},[r,t]);return f("storage",e=>{e.storageArea===window[o]&&e.key===t&&a(p(e.newValue??void 0))}),f(s,e=>{e.detail.key===t&&a(e.detail.value)}),n.useEffect(()=>{r!==void 0&&m===void 0&&g(r)},[r,m,g]),n.useEffect(()=>{d&&a(c())},[d,c]),[m===void 0?r:m,g,L]}},J=o=>N("localStorage","use-local-storage")(o),X={title:"Hooks / useLocalStorage"},l=()=>{const[o,i,s]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",o]}),S.jsx(h,{colorScheme:"danger",onClick:s,children:"Reset Local Storage value"})]})};var C,E,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue, resetValue] = useLocalStorage<number>({
    key: "value",
    defaultValue: 1
  });
  return <Wrap gap="md">
      <Button onClick={() => setValue(prev => prev + 1)}>
        Current Local Storage value: {value}
      </Button>

      <Button colorScheme="danger" onClick={resetValue}>
        Reset Local Storage value
      </Button>
    </Wrap>;
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const Y=["basic"];export{Y as __namedExportsOrder,l as basic,X as default};
