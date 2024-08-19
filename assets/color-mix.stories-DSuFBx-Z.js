import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{C as r}from"./center-JvTjs6Qo.js";import{T as S}from"./theme-provider-Bt6-FvIL.js";import{T as z}from"./text-YMGHmnkp.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-Bw4mCpcs.js";import"./extends-CF3RwP-h.js";import"./forward-ref-BmTAT9U5.js";import"./use-component-style-CSU0rxou.js";const R={title:"System / Styles / Color Mix"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"mix(red.500, blue.500)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:'"in srgb" + "red.500" + "blue.500"'}),e.jsx(r,{bg:"mix(in srgb, green.500 50, #000000)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:'"in srgb" + "gree.500" + "#000000"'}),e.jsx(r,{bg:"mix(in lab, orange.500 80%, purple.500 20%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:'"in lab" + "orange.500 80%" + "purple.500 20%"'}),e.jsx(r,{bg:"mix(in lch longer hue, hsl(200deg 50% 80%), #000000)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:'"in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"'})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"tint(red.500, 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Tint color"}),e.jsx(r,{bg:"tint(green, 50)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Tint color"}),e.jsx(r,{bg:"tint(rgb(255, 0, 0), 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Tint color"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"shade(red.500, 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Shade color"}),e.jsx(r,{bg:"shade(green, 50)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Shade color"}),e.jsx(r,{bg:"shade(rgb(255, 0, 0), 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Shade color"})]}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"transparentize(red.500, 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(green, 50)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(rgb(255, 0, 0), 50%)",w:"full",height:"2xs",p:"md",rounded:"md",color:"white",children:"Transparentize color"})]}),s=()=>e.jsx(e.Fragment,{children:S.map(n=>e.jsx(r,{bg:`tone(purple.500, ${n})`,w:"full",height:"5xs",p:"md",rounded:"md",color:"white",children:e.jsxs(z,{color:`tone(purple.500, ${n})`,as:"span",filter:"invert(100%) grayscale(100%) contrast(100)",children:["Tone ",n]})},n))});var i,h,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Center bg="mix(red.500, blue.500)" w="full" height="2xs" p="md" rounded="md" color="white">
        "in srgb" + "red.500" + "blue.500"
      </Center>

      <Center bg="mix(in srgb, green.500 50, #000000)" w="full" height="2xs" p="md" rounded="md" color="white">
        "in srgb" + "gree.500" + "#000000"
      </Center>

      <Center bg="mix(in lab, orange.500 80%, purple.500 20%)" w="full" height="2xs" p="md" rounded="md" color="white">
        "in lab" + "orange.500 80%" + "purple.500 20%"
      </Center>

      <Center bg="mix(in lch longer hue, hsl(200deg 50% 80%), #000000)" w="full" height="2xs" p="md" rounded="md" color="white">
        "in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"
      </Center>
    </>;
}`,...(a=(h=t.parameters)==null?void 0:h.docs)==null?void 0:a.source}}};var c,m,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <Center bg="tint(red.500, 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Tint color
      </Center>

      <Center bg="tint(green, 50)" w="full" height="2xs" p="md" rounded="md" color="white">
        Tint color
      </Center>

      <Center bg="tint(rgb(255, 0, 0), 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Tint color
      </Center>
    </>;
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <>
      <Center bg="shade(red.500, 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Shade color
      </Center>

      <Center bg="shade(green, 50)" w="full" height="2xs" p="md" rounded="md" color="white">
        Shade color
      </Center>

      <Center bg="shade(rgb(255, 0, 0), 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Shade color
      </Center>
    </>;
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var w,b,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <Center bg="transparentize(red.500, 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Transparentize color
      </Center>

      <Center bg="transparentize(green, 50)" w="full" height="2xs" p="md" rounded="md" color="white">
        Transparentize color
      </Center>

      <Center bg="transparentize(rgb(255, 0, 0), 50%)" w="full" height="2xs" p="md" rounded="md" color="white">
        Transparentize color
      </Center>
    </>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,j,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      {TONES.map(tone => <Center key={tone} bg={\`tone(purple.500, \${tone})\`} w="full" height="5xs" p="md" rounded="md" color="white">
          <Text color={\`tone(purple.500, \${tone})\`} as="span" filter="invert(100%) grayscale(100%) contrast(100)">
            Tone {tone}
          </Text>
        </Center>)}
    </>;
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const q=["basic","tint","shade","transparentize","tone"];export{q as __namedExportsOrder,t as basic,R as default,d as shade,o as tint,s as tone,l as transparentize};
