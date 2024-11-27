import{j as s}from"./jsx-runtime-CfatFE5O.js";import{f as I}from"./forward-ref-D13m8o2p.js";import{u as W,o as C}from"./theme-provider-DSx3k1bh.js";import{a as D}from"./use-component-style-fOirb5M1.js";import{b as i,c as L}from"./factory-Dfrbb1EY.js";import{H as l,S as P}from"./stack-DgGWIYtK.js";import{F as R}from"./for-CnGs9sZj.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T={error:{colorScheme:"danger"},info:{colorScheme:"info"},success:{colorScheme:"success"},warning:{colorScheme:"warning"}},M=(r,a)=>{var t;return((t=a==null?void 0:a[r])==null?void 0:t.colorScheme)??T[r].colorScheme},e=I(({colorScheme:r,value:a="info",indicatorProps:t,labelProps:w,...k},z)=>{var m,S;const{theme:H}=W(),b=((S=(m=H.__config)==null?void 0:m.status)==null?void 0:S.statuses)??{};r??(r=M(a,b));const[u,E]=D("Status",{...k,colorScheme:r}),{className:N,children:y,...F}=C(E);return s.jsxs(i.div,{className:L("ui-status",N),__css:{...u.container},...F,children:[s.jsx(i.div,{ref:z,className:"ui-status__indicator",__css:{...u.indicator},...t}),s.jsx(i.p,{className:"ui-status__label",__css:{...u.label},...w,children:y})]})});e.displayName="Status";e.__ui__="Status";const V={component:e,title:"Components / Data Display / Status"},n=()=>s.jsxs(l,{children:[s.jsx(e,{value:"info"}),s.jsx(e,{value:"success"}),s.jsx(e,{value:"warning"}),s.jsx(e,{value:"error"})]}),c=()=>s.jsxs(l,{children:[s.jsx(e,{value:"info",children:"Info"}),s.jsx(e,{value:"success",children:"Success"}),s.jsx(e,{value:"warning",children:"Warning"}),s.jsx(e,{value:"error",children:"Error"})]}),o=()=>s.jsx(P,{children:s.jsx(R,{each:["sm","md","lg"],children:r=>s.jsxs(l,{children:[s.jsx(e,{size:r,value:"info",children:"Info"}),s.jsx(e,{size:r,value:"success",children:"Success"}),s.jsx(e,{size:r,value:"warning",children:"Warning"}),s.jsx(e,{size:r,value:"error",children:"Error"})]})})});var d,p,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info" />
      <Status value="success" />
      <Status value="warning" />
      <Status value="error" />
    </HStack>;
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,v,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <HStack>
      <Status value="info">Info</Status>
      <Status value="success">Success</Status>
      <Status value="warning">Warning</Status>
      <Status value="error">Error</Status>
    </HStack>;
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,g,_;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Stack>
      <For each={["sm", "md", "lg"]}>
        {size => <HStack>
            <Status size={size} value="info">
              Info
            </Status>

            <Status size={size} value="success">
              Success
            </Status>

            <Status size={size} value="warning">
              Warning
            </Status>

            <Status size={size} value="error">
              Error
            </Status>
          </HStack>}
      </For>
    </Stack>;
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const X=["basic","withLabel","withSize"];export{X as __namedExportsOrder,n as basic,V as default,c as withLabel,o as withSize};
