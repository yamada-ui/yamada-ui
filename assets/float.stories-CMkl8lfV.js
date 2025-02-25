import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as C}from"./index-BwPxMuoB.js";import{f as I}from"./forward-ref-Ukjd1cIW.js";import{b as G,c as F,Q as N}from"./factory-DbNU74ts.js";import{G as y,a as h}from"./grid-UNukuGmB.js";import{B as v}from"./box-CKfluZfz.js";import{C as o}from"./center-B3pLLn64.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-ChqdwXGn.js";const B=(a="start-end",n="0")=>{const[s,i]=a.split("-"),[l,c]=N(n)?n:[n,n],t={};let x="0%",b="0%";return s==="start"?(t.insetBlockStart=l,t.insetBlockEnd="auto",b="-50%"):s==="end"?(t.insetBlockStart="auto",t.insetBlockEnd=l,b="50%"):t.insetBlock="50%",i==="start"?(t.insetInlineStart=c,t.insetInlineEnd="auto",x="-50%"):i==="end"?(t.insetInlineStart="auto",t.insetInlineEnd=c,x="50%"):t.insetInline="50%",t.translate=`${x} ${b}`,t},r=I(({className:a,offset:n,placement:s,...i},l)=>{const c=C.useMemo(()=>({alignItems:"center",display:"inline-flex",justifyContent:"center",position:"absolute",...B(s,n)}),[s,n]);return e.jsx(G.div,{ref:l,className:F("ui-float",a),__css:c,...i})});r.displayName="Float";r.__ui__="Float";const X={component:r,title:"Components / Layouts / Float"},d=()=>e.jsx(v,{bg:["blackAlpha.50","whiteAlpha.50"],boxSize:"3xs",position:"relative",children:e.jsx(r,{children:e.jsx(o,{bg:"primary",color:"white",fontSize:"sm",px:"1.5",rounded:"md",children:"New"})})}),m=()=>{const a=["start-start","start-center","start-end","center-start","center-center","center-end","end-start","end-center","end-end"];return e.jsx(y,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:a.map(n=>e.jsx(h,{bg:["blackAlpha.50","whiteAlpha.50"],boxSize:"3xs",position:"relative",children:e.jsx(r,{placement:n,children:e.jsx(o,{bg:"primary",color:"white",fontSize:"sm",px:"1.5",rounded:"md",children:"New"})})},n))})},p=()=>e.jsxs(y,{gap:"md",p:"md",templateColumns:"repeat(3, 1fr)",children:[e.jsx(h,{bg:["blackAlpha.50","whiteAlpha.50"],boxSize:"3xs",position:"relative",children:e.jsx(r,{offset:"md",placement:"start-start",children:e.jsx(o,{bg:"primary",color:"white",fontSize:"sm",px:"1.5",rounded:"md",children:"New"})})}),e.jsx(h,{bg:["blackAlpha.50","whiteAlpha.50"],boxSize:"3xs",position:"relative",children:e.jsx(r,{offset:["0","md"],placement:"center-start",children:e.jsx(o,{bg:"primary",color:"white",fontSize:"sm",px:"1.5",rounded:"md",children:"New"})})}),e.jsx(h,{bg:["blackAlpha.50","whiteAlpha.50"],boxSize:"3xs",position:"relative",children:e.jsx(r,{offset:["md","0"],placement:"end-end",children:e.jsx(o,{bg:"primary",color:"white",fontSize:"sm",px:"1.5",rounded:"md",children:"New"})})})]});var f,u,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Box bg={["blackAlpha.50", "whiteAlpha.50"]} boxSize="3xs" position="relative">
      <Float>
        <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
          New
        </Center>
      </Float>
    </Box>;
}`,...(w=(u=d.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,S,j;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const placements = ["start-start", "start-center", "start-end", "center-start", "center-center", "center-end", "end-start", "end-center", "end-end"] as const;
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      {placements.map(placement => <GridItem key={placement} bg={["blackAlpha.50", "whiteAlpha.50"]} boxSize="3xs" position="relative">
          <Float placement={placement}>
            <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
              New
            </Center>
          </Float>
        </GridItem>)}
    </Grid>;
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,z,k;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Grid gap="md" p="md" templateColumns="repeat(3, 1fr)">
      <GridItem bg={["blackAlpha.50", "whiteAlpha.50"]} boxSize="3xs" position="relative">
        <Float offset="md" placement="start-start">
          <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
            New
          </Center>
        </Float>
      </GridItem>

      <GridItem bg={["blackAlpha.50", "whiteAlpha.50"]} boxSize="3xs" position="relative">
        <Float offset={["0", "md"]} placement="center-start">
          <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
            New
          </Center>
        </Float>
      </GridItem>

      <GridItem bg={["blackAlpha.50", "whiteAlpha.50"]} boxSize="3xs" position="relative">
        <Float offset={["md", "0"]} placement="end-end">
          <Center bg="primary" color="white" fontSize="sm" px="1.5" rounded="md">
            New
          </Center>
        </Float>
      </GridItem>
    </Grid>;
}`,...(k=(z=p.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const Y=["basic","withPlacement","withOffset"];export{Y as __namedExportsOrder,d as basic,X as default,p as withOffset,m as withPlacement};
