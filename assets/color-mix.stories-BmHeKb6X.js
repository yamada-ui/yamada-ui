import{n as e}from"./chunk-zsgVPwQN.js";import{Cu as t,Du as n,Ep as r,Eu as i,dp as a,pp as o,wu as s}from"./iframe-BMT_Rpw5.js";var c,l,u,d,f,p,m,h;e((()=>{t(),i(),a(),c=o(),l={title:`Styled System / Color Mix`},u=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{bg:`mix(red.500, blue.500)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`"in srgb" + "red.500" + "blue.500"`}),(0,c.jsx)(s,{bg:`mix(in srgb, green.500 50, #000000)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`"in srgb" + "gree.500" + "#000000"`}),(0,c.jsx)(s,{bg:`mix(in lab, orange.500 80%, purple.500 20%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`"in lab" + "orange.500 80%" + "purple.500 20%"`}),(0,c.jsx)(s,{bg:`mix(in lch longer hue, hsl(200deg 50% 80%), #000000)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`"in lch longer hue" + "hsl(200deg 50% 80%)" + "#000000"`})]}),d=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{bg:`tint(red.500, 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Tint color`}),(0,c.jsx)(s,{bg:`tint(green, 50)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Tint color`}),(0,c.jsx)(s,{bg:`tint(rgb(255, 0, 0), 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Tint color`})]}),f=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{bg:`shade(red.500, 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Shade color`}),(0,c.jsx)(s,{bg:`shade(green, 50)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Shade color`}),(0,c.jsx)(s,{bg:`shade(rgb(255, 0, 0), 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Shade color`})]}),p=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{bg:`blue.500/50`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Transparentize color`}),(0,c.jsx)(s,{bg:`transparentize(red.500, 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Transparentize color`}),(0,c.jsx)(s,{bg:`transparentize(green, 50)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Transparentize color`}),(0,c.jsx)(s,{bg:`transparentize(rgb(255, 0, 0), 50%)`,color:`white`,height:`2xs`,p:`md`,rounded:`l2`,w:`full`,children:`Transparentize color`})]}),m=()=>(0,c.jsx)(c.Fragment,{children:r.map(e=>(0,c.jsx)(s,{bg:`tone(purple.500, ${e})`,color:`white`,height:`5xs`,p:`md`,rounded:`l2`,w:`full`,children:(0,c.jsxs)(n,{as:`span`,color:`tone(purple.500, ${e})`,filter:`invert(100%) grayscale(100%) contrast(100)`,children:[`Tone `,e]})},e))}),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <>
      {TONES.map(tone => <Center key={tone} bg={\`tone(purple.500, \${tone})\`} color="white" height="5xs" p="md" rounded="l2" w="full">
          <Text as="span" color={\`tone(purple.500, \${tone})\`} filter="invert(100%) grayscale(100%) contrast(100)">
            Tone {tone}
          </Text>
        </Center>)}
    </>;
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`Tint`,`Shade`,`Transparentize`,`Tone`]}))();export{u as Basic,f as Shade,d as Tint,m as Tone,p as Transparentize,h as __namedExportsOrder,l as default};