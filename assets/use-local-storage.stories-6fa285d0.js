import{j as v,a as B}from"./jsx-runtime-03b4ddbf.js";import{u as f}from"./index-32f122cf.js";import{r as n}from"./index-76fb7be0.js";import{L as x}from"./factory-94a21dd6.js";import{W as N}from"./flex-2330e9b7.js";import{B as h}from"./button-139bace1.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9f71b7cc.js";import"./index-79f0243f.js";import"./theme-provider-8a6e6dcc.js";import"./index-f5d80254.js";import"./index-d0666609.js";import"./icon-78aec9fa.js";import"./use-component-style-9258d34a.js";const W=(e,i)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${i}: Failed to serialize the value`)}},J=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},V=(e,i)=>{const a=e==="localStorage"?"ui-local-storage":"ui-session-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=J,serialize:w=c=>W(c,i)})=>{const c=n.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]===null||o)return r??"";const u=window[e].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=n.useState(c(d)),g=n.useCallback(o=>{x(o)?s(u=>{const S=o(u);return window[e].setItem(t,w(S)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:o(u)}})),S}):(window[e].setItem(t,w(o)),window.dispatchEvent(new CustomEvent(a,{detail:{key:t,value:o}})),s(o))},[t,w]),b=n.useCallback(()=>{window[e].removeItem(t),s(r)},[r,t]);return f("storage",o=>{o.storageArea===window[e]&&o.key===t&&s(p(o.newValue??void 0))}),f(a,o=>{o.detail.key===t&&s(o.detail.value)}),n.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),n.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,b]}},j=e=>V("localStorage","use-local-storage")(e),T={title:"Hooks / useLocalStorage"},m=()=>{const[e,i,a]=j({key:"value",defaultValue:1});return v(N,{gap:"md",children:[v(h,{onClick:()=>i(t=>t+1),children:["Current Local Storage value: ",e]}),B(h,{colorScheme:"danger",onClick:a,children:"Reset Local Storage value"})]})};var C,L,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const U=["basic"];export{U as __namedExportsOrder,m as basic,T as default};
//# sourceMappingURL=use-local-storage.stories-6fa285d0.js.map
