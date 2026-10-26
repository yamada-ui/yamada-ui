import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{An as t,Mn as n,Nn as r,Rn as i,Sn as a,gn as o,jn as s}from"./props-BGlEPbcT.js";import{t as c}from"./jsx-runtime-BdxMnOeJ.js";import{n as l,t as u}from"./text-BrExu5sf.js";import{n as d,t as f}from"./center-Dm40Q1AZ.js";import{n as p,t as m}from"./grid-Bh-ak6fo.js";import{n as h,t as g}from"./box-B2f0z7II.js";import{i as _,n as v,r as y,t as b}from"./container-KN6llHHz.js";import{n as x,t as S}from"./for-Dqkq8hvn.js";import{n as C,t as w}from"./heading-efDv_fE7.js";var T,E,D,O;function k(){return(k=e((()=>{h(),d(),_(),x(),p(),C(),l(),i(),o(),T=c(),E={title:`Theme / Tokens`},D=()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(w,{children:`Colors`}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`2xl`,children:`Tokens`})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(S,{each:s,children:(e,t)=>(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(${r.length}, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:r,children:(t,n)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(g,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`2xl`,children:`Semantic Tokens`})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(S,{each:n,children:(e,t)=>(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(${r.length}, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:r,children:(t,n)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(g,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`xl`,children:`Background`})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:[``,`subtle`,`overlay`,`ghost`,`muted`,`emphasized`,`contrast`,`panel`,`float`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(g,{bg:e?`bg.${e}`:`bg`,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`bg.${e}`:`bg`})]},t)})})})]}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`xl`,children:`Foreground`})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(f,{bg:e===`contrast`?`bg.contrast`:void 0,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`,children:(0,T.jsx)(u,{color:e?`fg.${e}`:`fg`,children:`Ag`})}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`fg.${e}`:`fg`})]},t)})})})]}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`xl`,children:`Border`})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(g,{borderColor:e?`border.${e}`:`border`,borderWidth:`3px`,h:`24`,rounded:`l2`,w:`full`}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`border.${e}`:`border`})]},t)})})})]}),(0,T.jsx)(S,{each:t,children:(e,t)=>(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{children:(0,T.jsx)(w,{size:`xl`,children:a(e)})}),(0,T.jsx)(b,{gap:`sm`,children:(0,T.jsx)(m,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,T.jsx)(S,{each:[``,`contrast`,`fg`,`bg`,`ghost`,`subtle`,`muted`,`emphasized`,`solid`,`outline`],children:(t,n)=>(0,T.jsxs)(m,{gap:`xs`,children:[(0,T.jsx)(g,{bg:t?`${e}.${t}`:e,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,T.jsx)(u,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:t?`${e}.${t}`:e})]},n)})})})]},t)})]}),O=[`Colors`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Heading>Colors</Heading>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={DEFAULT_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="2xl">Semantic Tokens</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <For each={SEMANTIC_COLOR_SCHEMES}>
            {(colorScheme, index) => <Grid key={index} gap="sm" templateColumns={\`repeat(\${TONES.length}, 1fr)\`} w="full">
                <For each={TONES}>
                  {(tone, index) => <Grid key={index} gap="xs">
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="l2" w="full" />
                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
                    </Grid>}
                </For>
              </Grid>}
          </For>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Background</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "overlay", "ghost", "muted", "emphasized", "contrast", "panel", "float", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box bg={value ? \`bg.\${value}\` : "bg"} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`bg.\${value}\` : "bg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Foreground</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Center bg={value === "contrast" ? "bg.contrast" : undefined} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full">
                    <Text color={value ? \`fg.\${value}\` : "fg"}>Ag</Text>
                  </Center>

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`fg.\${value}\` : "fg"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <Container.Root>
        <Container.Header>
          <Heading size="xl">Border</Heading>
        </Container.Header>

        <Container.Body gap="sm">
          <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
            <For each={["", "subtle", "muted", "emphasized", "contrast", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box borderColor={value ? \`border.\${value}\` : "border"} borderWidth="3px" h="24" rounded="l2" w="full" />

                  <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                    {value ? \`border.\${value}\` : "border"}
                  </Text>
                </Grid>}
            </For>
          </Grid>
        </Container.Body>
      </Container.Root>

      <For each={COLOR_SCHEMES}>
        {(colorScheme, index) => <Container.Root key={index}>
            <Container.Header>
              <Heading size="xl">{toTitleCase(colorScheme)}</Heading>
            </Container.Header>

            <Container.Body gap="sm">
              <Grid gap="sm" templateColumns="repeat(6, 1fr)" w="full">
                <For each={["", "contrast", "fg", "bg", "ghost", "subtle", "muted", "emphasized", "solid", "outline"]}>
                  {(value, index) => <Grid key={index} gap="xs">
                      <Box bg={value ? \`\${colorScheme}.\${value}\` : colorScheme} borderColor="border.muted" borderWidth="1px" h="24" rounded="l2" w="full" />

                      <Text color="fg.muted" fontSize="xs" lineClamp={1} textAlign="center">
                        {value ? \`\${colorScheme}.\${value}\` : colorScheme}
                      </Text>
                    </Grid>}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>}
      </For>
    </>;
}`,...D.parameters?.docs?.source}}}})))()}k();export{D as Colors,O as __namedExportsOrder,E as default};