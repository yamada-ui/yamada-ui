import{j as e,Z as r,bY as i,T as h}from"./iframe-DJ0yX4dv.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Styled System / Color Mix"},l=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"mix(red.500, blue.500)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in srgb" + "red.500" + "blue.500"'}),e.jsx(r,{bg:"mix(in srgb, green.500 50, #000000)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in srgb" + "gree.500" + "#000000"'}),e.jsx(r,{bg:"mix(in lab, orange.500 80%, purple.500 20%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in lab" + "orange.500 80%" + "purple.500 20%"'}),e.jsx(r,{bg:"mix(in lch longer hue, hsl(200deg 50% 80%), #000000)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:'"in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"'})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"tint(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"}),e.jsx(r,{bg:"tint(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Tint color"})]}),t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"shade(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"}),e.jsx(r,{bg:"shade(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Shade color"})]}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{bg:"blue.500/50",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(red.500, 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(green, 50)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"}),e.jsx(r,{bg:"transparentize(rgb(255, 0, 0), 50%)",color:"white",height:"2xs",p:"md",rounded:"l2",w:"full",children:"Transparentize color"})]}),d=()=>e.jsx(e.Fragment,{children:i.map(n=>e.jsx(r,{bg:`tone(purple.500, ${n})`,color:"white",height:"5xs",p:"md",rounded:"l2",w:"full",children:e.jsxs(h,{as:"span",color:`tone(purple.500, ${n})`,filter:"invert(100%) grayscale(100%) contrast(100)",children:["Tone ",n]})},n))});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <>
      {TONES.map(tone => <Center key={tone} bg={\`tone(purple.500, \${tone})\`} color="white" height="5xs" p="md" rounded="l2" w="full">
          <Text as="span" color={\`tone(purple.500, \${tone})\`} filter="invert(100%) grayscale(100%) contrast(100)">
            Tone {tone}
          </Text>
        </Center>)}
    </>;
}`,...d.parameters?.docs?.source}}};const u=["Basic","Tint","Shade","Transparentize","Tone"];export{l as Basic,t as Shade,o as Tint,d as Tone,s as Transparentize,u as __namedExportsOrder,g as default};
