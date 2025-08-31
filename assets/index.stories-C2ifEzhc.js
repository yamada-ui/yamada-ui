import{r as a,S as E,j as S}from"./iframe-COpE3uSe.js";import{u as h}from"./index-DlXupBbH.js";import{W as x}from"./wrap-U7FUxPEU.js";import{B as C}from"./button-C1iRx7Aw.js";import"./preload-helper-D9Z9MdNV.js";import"./flex-v97S7pBb.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";const B=(e,n)=>{try{return JSON.stringify(e)}catch{throw new Error(`useLocalStorage ${n}: Failed to serialize the value`)}},L=e=>{if(!e)return e;try{return JSON.parse(e)}catch{return e}},j=(e,n)=>{const c="local-storage";return({key:t,defaultValue:r=void 0,deserialize:d=L,getInitialValueInEffect:w=!0,serialize:g=u=>B(u,n)})=>{const u=a.useCallback(o=>{if(typeof window>"u"||!(e in window)||window[e]==null||o)return r??"";const i=window[e].getItem(t);return i!==null?d(i):r??""},[t,d,r]),[l,s]=a.useState(u(w)),p=a.useCallback(o=>{E(o)?s(i=>{const v=o(i);return window[e].setItem(t,g(v)),window.dispatchEvent(new CustomEvent(c,{detail:{key:t,value:o(i)}})),v}):(window[e].setItem(t,g(o)),window.dispatchEvent(new CustomEvent(c,{detail:{key:t,value:o}})),s(o))},[t,g]),f=a.useCallback(()=>{window[e].removeItem(t),s(r)},[r,t]);return h("storage",o=>{o.storageArea===window[e]&&o.key===t&&s(d(o.newValue??void 0))}),h(c,o=>{o.detail.key===t&&s(o.detail.value)}),a.useEffect(()=>{r!==void 0&&l===void 0&&p(r)},[r,l,p]),a.useEffect(()=>{w&&s(u())},[w,u]),[l===void 0?r:l,p,f]}},N=e=>j("localStorage","use-local-storage")(e),$={title:"Hooks / useLocalStorage"},m=()=>{const[e,n,c]=N({key:"value",defaultValue:1});return S.jsxs(x,{gap:"md",children:[S.jsxs(C,{onClick:()=>n(t=>t+1),children:["Current Local Storage value: ",e]}),S.jsx(C,{colorScheme:"danger",onClick:c,children:"Reset Local Storage value"})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const q=["Basic"];export{m as Basic,q as __namedExportsOrder,$ as default};
