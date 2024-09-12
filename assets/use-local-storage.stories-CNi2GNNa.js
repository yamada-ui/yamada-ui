import{j as S}from"./jsx-runtime-Nms4Y4qS.js";import{u as f}from"./index-y0KOQ9r6.js";import{r as a}from"./index-BwDkhjyp.js";import{Z as b}from"./factory-C2Uq3ahE.js";import{W as B}from"./flex-DUnpOgsS.js";import{B as h}from"./button-Bi9n-vY3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./forward-ref-DKTvpK5d.js";import"./use-ripple-Cy0wrTvg.js";import"./factory-uWFUvYzf.js";import"./motion-Bd6WkMzw.js";import"./loading-BNVTi1QG.js";import"./icon-sIHrqgYT.js";import"./index-UM7KnhWq.js";import"./theme-provider-jP6jS-pg.js";import"./use-component-style-Bx1vUO5y.js";const j=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},N=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},W=(e,n)=>{const i="ui-local-storage";return({key:t,defaultValue:r=void 0,getInitialValueInEffect:d=!0,deserialize:p=N,serialize:w=c=>j(c,n)})=>{const c=a.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]===null||o)return r??"";const u=window[e].getItem(t);return u!==null?p(u):r??""},[t,p,r]),[l,s]=a.useState(c(d)),g=a.useCallback(o=>{b(o)?s(u=>{const v=o(u);return window[e].setItem(t,w(v)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o(u)}})),v}):(window[e].setItem(t,w(o)),window.dispatchEvent(new CustomEvent(i,{detail:{key:t,value:o}})),s(o))},[t,w]),L=a.useCallback(()=>{window[e].removeItem(t),s(r)},[r,t]);return f("storage",o=>{o.storageArea===window[e]&&o.key===t&&s(p(o.newValue??void 0))}),f(i,o=>{o.detail.key===t&&s(o.detail.value)}),a.useEffect(()=>{r!==void 0&&l===void 0&&g(r)},[r,l,g]),a.useEffect(()=>{d&&s(c())},[d,c]),[l===void 0?r:l,g,L]}},J=e=>W("localStorage","use-local-storage")(e),T={title:"Hooks / useLocalStorage"},m=()=>{const[e,n,i]=J({key:"value",defaultValue:1});return S.jsxs(B,{gap:"md",children:[S.jsxs(h,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",e]}),S.jsx(h,{colorScheme:"danger",onClick:i,children:"Reset Local Storage value"})]})};var C,E,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(x=(E=m.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};const U=["basic"];export{U as __namedExportsOrder,m as basic,T as default};
