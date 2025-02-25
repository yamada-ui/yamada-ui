import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{C as r}from"./center-B3pLLn64.js";import{T as S}from"./theme-provider-ChqdwXGn.js";import{T as z}from"./text-DKjBQKmK.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";const k={title:"System / Styles / Color Mix"},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"mix(red.500, blue.500)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:'"in srgb" + "red.500" + "blue.500"'}),e.jsx(r,{bg:"mix(in srgb, green.500 50, #000000)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:'"in srgb" + "gree.500" + "#000000"'}),e.jsx(r,{bg:"mix(in lab, orange.500 80%, purple.500 20%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:'"in lab" + "orange.500 80%" + "purple.500 20%"'}),e.jsx(r,{bg:"mix(in lch longer hue, hsl(200deg 50% 80%), #000000)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:'"in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"'})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"tint(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(green, 50)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Tint color"})]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"shade(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(green, 50)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Shade color"})]}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"transparentize(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(green, 50)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"md",w:"full",children:"Transparentize color"})]}),s=()=>e.jsx(e.Fragment,{children:S.map(n=>e.jsx(r,{bg:`tone(purple.500, ${n})`,color:"white",height:"5xs",p:"md",rounded:"md",w:"full",children:e.jsxs(z,{as:"span",color:`tone(purple.500, ${n})`,filter:"invert(100%) grayscale(100%) contrast(100)",children:["Tone ",n]})},n))});var i,h,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Center bg="mix(red.500, blue.500)" color="white" height="2xs" p="md" rounded="md" w="full">
        "in srgb" + "red.500" + "blue.500"
      </Center>

      <Center bg="mix(in srgb, green.500 50, #000000)" color="white" height="2xs" p="md" rounded="md" w="full">
        "in srgb" + "gree.500" + "#000000"
      </Center>

      <Center bg="mix(in lab, orange.500 80%, purple.500 20%)" color="white" height="2xs" p="md" rounded="md" w="full">
        "in lab" + "orange.500 80%" + "purple.500 20%"
      </Center>

      <Center bg="mix(in lch longer hue, hsl(200deg 50% 80%), #000000)" color="white" height="2xs" p="md" rounded="md" w="full">
        "in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"
      </Center>
    </>;
}`,...(a=(h=t.parameters)==null?void 0:h.docs)==null?void 0:a.source}}};var c,m,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <Center bg="tint(red.500, 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Tint color
      </Center>

      <Center bg="tint(green, 50)" color="white" height="2xs" p="md" rounded="md" w="full">
        Tint color
      </Center>

      <Center bg="tint(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Tint color
      </Center>
    </>;
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <>
      <Center bg="shade(red.500, 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Shade color
      </Center>

      <Center bg="shade(green, 50)" color="white" height="2xs" p="md" rounded="md" w="full">
        Shade color
      </Center>

      <Center bg="shade(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Shade color
      </Center>
    </>;
}`,...(x=(p=d.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var w,b,f;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <Center bg="transparentize(red.500, 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Transparentize color
      </Center>

      <Center bg="transparentize(green, 50)" color="white" height="2xs" p="md" rounded="md" w="full">
        Transparentize color
      </Center>

      <Center bg="transparentize(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="md" w="full">
        Transparentize color
      </Center>
    </>;
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,j,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      {TONES.map(tone => <Center key={tone} bg={\`tone(purple.500, \${tone})\`} color="white" height="5xs" p="md" rounded="md" w="full">
          <Text as="span" color={\`tone(purple.500, \${tone})\`} filter="invert(100%) grayscale(100%) contrast(100)">
            Tone {tone}
          </Text>
        </Center>)}
    </>;
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const R=["basic","tint","shade","transparentize","tone"];export{R as __namedExportsOrder,t as basic,k as default,d as shade,o as tint,s as tone,l as transparentize};
