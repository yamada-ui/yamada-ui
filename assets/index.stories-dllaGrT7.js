import{r as s,a2 as f,j as p,R as h}from"./iframe-Brv718Ke.js";import{u as C}from"./index-13-NS8kI.js";import{W as x}from"./wrap-CJPla_PE.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-DhUoci5A.js";const L=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},B=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},j=(e,n)=>{const c="local-storage";return({key:o,defaultValue:r=void 0,deserialize:m=B,getInitialValueInEffect:w=!0,serialize:g=u=>L(u,n)})=>{const u=s.useCallback(t=>{if(typeof window>"u"||!(e in window)||window[e]==null||t)return r??"";const i=window[e].getItem(o);return i!==null?m(i):r??""},[o,m,r]),[l,a]=s.useState(u(w)),S=s.useCallback(t=>{f(t)?a(i=>{const v=t(i);return window[e].setItem(o,g(v)),window.dispatchEvent(new CustomEvent(c,{detail:{key:o,value:t(i)}})),v}):(window[e].setItem(o,g(t)),window.dispatchEvent(new CustomEvent(c,{detail:{key:o,value:t}})),a(t))},[o,g]),E=s.useCallback(()=>{window[e].removeItem(o),a(r)},[r,o]);return C("storage",t=>{t.storageArea===window[e]&&t.key===o&&a(m(t.newValue??void 0))}),C(c,t=>{t.detail.key===o&&a(t.detail.value)}),s.useEffect(()=>{r!==void 0&&l===void 0&&S(r)},[r,l,S]),s.useEffect(()=>{w&&a(u())},[w,u]),[l===void 0?r:l,S,E]}},N=e=>j("localStorage","use-local-storage")(e),k={title:"Hooks / useLocalStorage"},d=()=>{const[e,n,c]=N({key:"value",defaultValue:1});return p.jsxs(x,{gap:"md",children:[p.jsxs(h,{onClick:()=>n(o=>o+1),children:["Current Local Storage value: ",e]}),p.jsx(h,{colorScheme:"danger",onClick:c,children:"Reset Local Storage value"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const _=["Basic"];export{d as Basic,_ as __namedExportsOrder,k as default};
