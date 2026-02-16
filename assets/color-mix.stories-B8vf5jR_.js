import{j as e,W as r,c8 as S,T as z}from"./iframe-Bh9OJiMa.js";import"./preload-helper-C1FmrZbK.js";const E={title:"Styled System / Color Mix"},l=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"mix(red.500, blue.500)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in srgb" + "red.500" + "blue.500"'}),e.jsx(r,{bg:"mix(in srgb, green.500 50, #000000)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in srgb" + "gree.500" + "#000000"'}),e.jsx(r,{bg:"mix(in lab, orange.500 80%, purple.500 20%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in lab" + "orange.500 80%" + "purple.500 20%"'}),e.jsx(r,{bg:"mix(in lch longer hue, hsl(200deg 50% 80%), #000000)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"'})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"tint(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"})]}),t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"shade(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"})]}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"blue.500/50",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"})]}),d=()=>e.jsx(e.Fragment,{children:S.map(n=>e.jsx(r,{bg:`tone(purple.500, ${n})`,color:"white",height:"5xs",p:"md",rounded:"l2",w:"full",children:e.jsxs(z,{as:"span",color:`tone(purple.500, ${n})`,filter:"invert(100%) grayscale(100%) contrast(100)",children:["Tone ",n]})},n))});var i,h,a;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Center bg="mix(red.500, blue.500)" color="white" height="2xs" p="md" rounded="l2" w="full">
        "in srgb" + "red.500" + "blue.500"
      </Center>

      <Center bg="mix(in srgb, green.500 50, #000000)" color="white" height="2xs" p="md" rounded="l2" w="full">
        "in srgb" + "gree.500" + "#000000"
      </Center>

      <Center bg="mix(in lab, orange.500 80%, purple.500 20%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        "in lab" + "orange.500 80%" + "purple.500 20%"
      </Center>

      <Center bg="mix(in lch longer hue, hsl(200deg 50% 80%), #000000)" color="white" height="2xs" p="md" rounded="l2" w="full">
        "in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"
      </Center>
    </>;
}`,...(a=(h=l.parameters)==null?void 0:h.docs)==null?void 0:a.source}}};var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <Center bg="tint(red.500, 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Tint color
      </Center>

      <Center bg="tint(green, 50)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Tint color
      </Center>

      <Center bg="tint(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Tint color
      </Center>
    </>;
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,m,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <Center bg="shade(red.500, 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Shade color
      </Center>

      <Center bg="shade(green, 50)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Shade color
      </Center>

      <Center bg="shade(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Shade color
      </Center>
    </>;
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var w,b,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <>
      <Center bg="blue.500/50" color="white" height="2xs" p="md" rounded="l2" w="full">
        Transparentize color
      </Center>

      <Center bg="transparentize(red.500, 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Transparentize color
      </Center>

      <Center bg="transparentize(green, 50)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Transparentize color
      </Center>

      <Center bg="transparentize(rgb(255, 0, 0), 50%)" color="white" height="2xs" p="md" rounded="l2" w="full">
        Transparentize color
      </Center>
    </>;
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,T,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>
      {TONES.map(tone => <Center key={tone} bg={\`tone(purple.500, \${tone})\`} color="white" height="5xs" p="md" rounded="l2" w="full">
          <Text as="span" color={\`tone(purple.500, \${tone})\`} filter="invert(100%) grayscale(100%) contrast(100)">
            Tone {tone}
          </Text>
        </Center>)}
    </>;
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const $=["Basic","Tint","Shade","Transparentize","Tone"];export{l as Basic,t as Shade,o as Tint,d as Tone,s as Transparentize,$ as __namedExportsOrder,E as default};
