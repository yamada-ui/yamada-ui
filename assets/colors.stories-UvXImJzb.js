import{j as e,bm as u,bn as g,T as i,bz as p,E as C,C as f,G as b}from"./iframe-CzCJWi2Q.js";import{H as l}from"./heading-Db76muhr.js";import{F as t}from"./for-B9vVJZhr.js";import{G as r}from"./grid-BgXiws5k.js";import{B as m}from"./box-B7HQRlfK.js";import{C as s,a,b as x}from"./container-C2hf7qd3.js";const w={title:"Theme / Tokens / Colors"},h=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"Colors"}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"2xl",children:"Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(t,{each:u,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${g.length}, 1fr)`,w:"full",children:e.jsx(t,{each:g,children:(d,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:`${n}.${d}`,h:"12",rounded:"md",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${d}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"2xl",children:"Semantic Tokens"})}),e.jsx(x,{gap:"sm",children:e.jsx(t,{each:p,children:(n,o)=>e.jsx(r,{gap:"sm",templateColumns:`repeat(${g.length}, 1fr)`,w:"full",children:e.jsx(t,{each:g,children:(d,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:`${n}.${d}`,h:"12",rounded:"md",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:`${n}.${d}`})]},c)})},o)})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Background"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(t,{each:["","subtle","overlay","muted","emphasized","contrast","panel","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:n?`bg.${n}`:"bg",borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"md",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`bg.${n}`:"bg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Foreground"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(t,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(C,{bg:n==="contrast"?"bg.contrast":void 0,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"md",w:"full",children:e.jsx(i,{color:n?`fg.${n}`:"fg",children:"Ag"})}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`fg.${n}`:"fg"})]},o)})})})]}),e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:"Border"})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(t,{each:["","subtle","muted","emphasized","contrast","info","success","warning","error"],children:(n,o)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{borderColor:n?`border.${n}`:"border",borderWidth:"3px",h:"24",rounded:"md",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:n?`border.${n}`:"border"})]},o)})})})]}),e.jsx(t,{each:f,children:(n,o)=>e.jsxs(s,{children:[e.jsx(a,{children:e.jsx(l,{size:"xl",children:b(n)})}),e.jsx(x,{gap:"sm",children:e.jsx(r,{gap:"sm",templateColumns:"repeat(6, 1fr)",w:"full",children:e.jsx(t,{each:["","contrast","fg","bg","ghost","subtle","muted","emphasized","solid","outline"],children:(d,c)=>e.jsxs(r,{gap:"xs",children:[e.jsx(m,{bg:d?`${n}.${d}`:n,borderColor:"border.muted",borderWidth:"1px",h:"24",rounded:"md",w:"full"}),e.jsx(i,{color:"muted",fontSize:"xs",lineClamp:1,textAlign:"center",children:d?`${n}.${d}`:n})]},c)})})})]},o)})]});h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="md" w="full" />
                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
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
                      <Box bg={\`\${colorScheme}.\${tone}\`} h="12" rounded="md" w="full" />
                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">{\`\${colorScheme}.\${tone}\`}</Text>
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
            <For each={["", "subtle", "overlay", "muted", "emphasized", "contrast", "panel", "info", "success", "warning", "error"]}>
              {(value, index) => <Grid key={index} gap="xs">
                  <Box bg={value ? \`bg.\${value}\` : "bg"} borderColor="border.muted" borderWidth="1px" h="24" rounded="md" w="full" />

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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
                  <Center bg={value === "contrast" ? "bg.contrast" : undefined} borderColor="border.muted" borderWidth="1px" h="24" rounded="md" w="full">
                    <Text color={value ? \`fg.\${value}\` : "fg"}>Ag</Text>
                  </Center>

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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
                  <Box borderColor={value ? \`border.\${value}\` : "border"} borderWidth="3px" h="24" rounded="md" w="full" />

                  <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
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
                      <Box bg={value ? \`\${colorScheme}.\${value}\` : colorScheme} borderColor="border.muted" borderWidth="1px" h="24" rounded="md" w="full" />

                      <Text color="muted" fontSize="xs" lineClamp={1} textAlign="center">
                        {value ? \`\${colorScheme}.\${value}\` : colorScheme}
                      </Text>
                    </Grid>}
                </For>
              </Grid>
            </Container.Body>
          </Container.Root>}
      </For>
    </>;
}`,...h.parameters?.docs?.source}}};const G=["Basic"];export{h as Basic,G as __namedExportsOrder,w as default};
