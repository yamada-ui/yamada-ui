import{r as s,a1 as B,j as p,Q as h}from"./iframe-Bh9OJiMa.js";import{u as C}from"./index-Ib95gyNA.js";import{W as j}from"./wrap-BLv8Ry5J.js";import"./preload-helper-C1FmrZbK.js";import"./flex-Cq9fG4Y2.js";const N=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},W=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},b=(e,n)=>{const c="local-storage";return({key:o,defaultValue:r=void 0,deserialize:m=W,getInitialValueInEffect:w=!0,serialize:g=u=>N(u,n)})=>{const u=s.useCallback(t=>{if(typeof window>"u"||!(e in window)||window[e]==null||t)return r??"";const i=window[e].getItem(o);return i!==null?m(i):r??""},[o,m,r]),[l,a]=s.useState(u(w)),S=s.useCallback(t=>{B(t)?a(i=>{const v=t(i);return window[e].setItem(o,g(v)),window.dispatchEvent(new CustomEvent(c,{detail:{key:o,value:t(i)}})),v}):(window[e].setItem(o,g(t)),window.dispatchEvent(new CustomEvent(c,{detail:{key:o,value:t}})),a(t))},[o,g]),L=s.useCallback(()=>{window[e].removeItem(o),a(r)},[r,o]);return C("storage",t=>{t.storageArea===window[e]&&t.key===o&&a(m(t.newValue??void 0))}),C(c,t=>{t.detail.key===o&&a(t.detail.value)}),s.useEffect(()=>{r!==void 0&&l===void 0&&S(r)},[r,l,S]),s.useEffect(()=>{w&&a(u())},[w,u]),[l===void 0?r:l,S,L]}},J=e=>b("localStorage","use-local-storage")(e),H={title:"Hooks / useLocalStorage"},d=()=>{const[e,n,c]=J({key:"value",defaultValue:1});return p.jsxs(j,{gap:"md",children:[p.jsxs(h,{onClick:()=>n(o=>o+1),children:["Current Local Storage value: ",e]}),p.jsx(h,{colorScheme:"danger",onClick:c,children:"Reset Local Storage value"})]})};var E,f,x;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const Q=["Basic"];export{d as Basic,Q as __namedExportsOrder,H as default};
