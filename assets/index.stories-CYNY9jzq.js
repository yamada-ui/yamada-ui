import{r as a,L as E,j as p}from"./iframe-B58gGoPv.js";import{u as h}from"./index-uf2yAJCK.js";import{W as L}from"./wrap-BNoIPCiC.js";import{B as C}from"./button-ByKXnJ56.js";import"./flex-Col0vMQb.js";import"./use-ripple-mP-I-Ewm.js";import"./rings-Dx-JdLv3.js";const x=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},B=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},j=(e,n)=>{const c="local-storage";return({key:t,defaultValue:r=void 0,deserialize:m=B,getInitialValueInEffect:w=!0,serialize:g=u=>x(u,n)})=>{const u=a.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]==null||o)return r??"";const i=window[e].getItem(t);return i!==null?m(i):r??""},[t,m,r]),[l,s]=a.useState(u(w)),S=a.useCallback(o=>{E(o)?s(i=>{const v=o(i);return window[e].setItem(t,g(v)),window.dispatchEvent(new CustomEvent(c,{detail:{key:t,value:o(i)}})),v}):(window[e].setItem(t,g(o)),window.dispatchEvent(new CustomEvent(c,{detail:{key:t,value:o}})),s(o))},[t,g]),f=a.useCallback(()=>{window[e].removeItem(t),s(r)},[r,t]);return h("storage",o=>{o.storageArea===window[e]&&o.key===t&&s(m(o.newValue??void 0))}),h(c,o=>{o.detail.key===t&&s(o.detail.value)}),a.useEffect(()=>{r!==void 0&&l===void 0&&S(r)},[r,l,S]),a.useEffect(()=>{w&&s(u())},[w,u]),[l===void 0?r:l,S,f]}},N=e=>j("localStorage","use-local-storage")(e),A={title:"Hooks / useLocalStorage"},d=()=>{const[e,n,c]=N({key:"value",defaultValue:1});return p.jsxs(L,{gap:"md",children:[p.jsxs(C,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",e]}),p.jsx(C,{colorScheme:"danger",onClick:c,children:"Reset Local Storage value"})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const H=["Basic"];export{d as Basic,H as __namedExportsOrder,A as default};
