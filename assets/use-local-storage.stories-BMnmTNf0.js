import{j as S}from"./jsx-runtime-BpbtHYHY.js";import{u as f}from"./index-BrvU4IlU.js";import{r as s}from"./index-BwPxMuoB.js";import{ab as b}from"./factory-B_KMcXyW.js";import{W as B}from"./flex-DvtQc3o-.js";import{B as h}from"./button-Dm54j0EP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-Ukjd1cIW.js";import"./use-ripple-DqSHYmP8.js";import"./index-2ihZSkad.js";import"./proxy-qc5arozF.js";import"./factory-CplEbptb.js";import"./loading-C3oE1vJx.js";import"./icon-DIzRaLo1.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";import"./use-var-Tj-aA0qb.js";const j=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},N=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},W=(e,n)=>{const i="ui-local-storage";return({key:t,defaultValue:r=void 0,deserialize:d=N,getInitialValueInEffect:p=!0,serialize:w=c=>j(c,n)})=>{const c=s.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]==null||o)return r??"";const u=window[e].getItem(t);return u!==null?d(u):r??""},[t,d,r]),[l,a]=s.useState(c(p)),g=s.useCallback(o=>{b(o)?a(u=>{const v=o(u);return window[e].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o(u)}})),v}):(window[e].setItem(t,w(o)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o}})),a(o))},[t,w]),L=s.useCallback(()=>{window[e].removeItem(t),a(r)},[r,t]);return f("storage",o=>{o.storageArea===window[e]&&o.key===t&&a(d(o.newValue??void 0))}),f(i,o=>{o.detail.key===t&&a(o.detail.value)}),s.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),s.useEffect(()=>{p&&a(c())},[p,c]),[l===void 0?r:l,g,L]}},J=e=>W("localStorage","use-local-storage")(e),U={title:"Hooks / useLocalStorage"},m=()=>{const[e,n,i]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",e]}),S.jsx(h,{colorScheme:"danger",onClick:i,children:"Reset Local Storage value"})]})};var C,E,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const X=["basic"];export{X as __namedExportsOrder,m as basic,U as default};
