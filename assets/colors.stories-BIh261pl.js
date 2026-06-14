import{i as e}from"./preload-helper-usAeo7Bx.js";import{Cv as t,Ev as n,Fa as r,Ff as i,Fl as a,Gv as o,Hv as s,Iv as c,Lf as l,Ma as u,Pa as d,Pf as f,Pl as p,Rf as m,Uv as h,Wv as g,cs as _,ja as v,ls as y,of as b,os as x,rf as S,ss as C}from"./iframe-4z85howq.js";var w,T,E,D;e((()=>{p(),f(),x(),d(),S(),v(),l(),t(),w=n(),T={title:`Theme / Tokens`},E=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{children:`Colors`}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`2xl`,children:`Tokens`})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(r,{each:h,children:(e,t)=>(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(${o.length}, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:o,children:(t,n)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(a,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`2xl`,children:`Semantic Tokens`})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(r,{each:g,children:(e,t)=>(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(${o.length}, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:o,children:(t,n)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(a,{bg:`${e}.${t}`,h:`12`,rounded:`l2`,w:`full`}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:`${e}.${t}`})]},n)})},t)})})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`xl`,children:`Background`})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:[``,`subtle`,`overlay`,`ghost`,`muted`,`emphasized`,`contrast`,`panel`,`float`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(a,{bg:e?`bg.${e}`:`bg`,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`bg.${e}`:`bg`})]},t)})})})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`xl`,children:`Foreground`})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(i,{bg:e===`contrast`?`bg.contrast`:void 0,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`,children:(0,w.jsx)(m,{color:e?`fg.${e}`:`fg`,children:`Ag`})}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`fg.${e}`:`fg`})]},t)})})})]}),(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`xl`,children:`Border`})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:[``,`subtle`,`muted`,`emphasized`,`contrast`,`info`,`success`,`warning`,`error`],children:(e,t)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(a,{borderColor:e?`border.${e}`:`border`,borderWidth:`3px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:e?`border.${e}`:`border`})]},t)})})})]}),(0,w.jsx)(r,{each:s,children:(e,t)=>(0,w.jsxs)(y,{children:[(0,w.jsx)(_,{children:(0,w.jsx)(u,{size:`xl`,children:c(e)})}),(0,w.jsx)(C,{gap:`sm`,children:(0,w.jsx)(b,{gap:`sm`,templateColumns:`repeat(6, 1fr)`,w:`full`,children:(0,w.jsx)(r,{each:[``,`contrast`,`fg`,`bg`,`ghost`,`subtle`,`muted`,`emphasized`,`solid`,`outline`],children:(t,n)=>(0,w.jsxs)(b,{gap:`xs`,children:[(0,w.jsx)(a,{bg:t?`${e}.${t}`:e,borderColor:`border.muted`,borderWidth:`1px`,h:`24`,rounded:`l2`,w:`full`}),(0,w.jsx)(m,{color:`fg.muted`,fontSize:`xs`,lineClamp:1,textAlign:`center`,children:t?`${e}.${t}`:e})]},n)})})})]},t)})]}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D=[`Colors`]}))();export{E as Colors,D as __namedExportsOrder,T as default};