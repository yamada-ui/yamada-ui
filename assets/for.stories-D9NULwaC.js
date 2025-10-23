import{n as T,o as y,I as S,r as d,j as e,V as m,T as a}from"./iframe-DJ0yX4dv.js";import{f as t}from"./chunk-3WUZ46N3-CXZkDYP_.js";import{F as i}from"./for-DYqikCUI.js";import{C as l,a as c,b as x}from"./card-DYltdQBn.js";import{E as g}from"./empty-state-CIAVAZnh.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],N=T("box",I),z=y(S)({as:N}),V={component:i,title:"Components / For"},h=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},u=()=>e.jsx(m,{children:e.jsx(i,{each:[],fallback:e.jsx(g,{description:"There are no items to show",indicator:e.jsx(z,{})}),children:(s,n)=>e.jsx(a,{children:s},n)})}),p=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,filter:({email:n})=>n.includes("gmail"),children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},f=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,sort:(n,r)=>n.name.localeCompare(r.name),children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},j=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,offset:5,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},k=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,limit:5,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},C=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,reverse:!0,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={[]} fallback={<EmptyState.Root description="There are no items to show" indicator={<BoxIcon />} />}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} filter={({
      email
    }) => email.includes("gmail")}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} sort={(a, b) => a.name.localeCompare(b.name)}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} offset={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} limit={5}>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const items = useMemo(() => Array.from({
    length: 10
  }, (_, index) => ({
    id: index,
    name: \`\${faker.person.firstName()} \${faker.person.lastName()}\`,
    email: faker.internet.email()
  })), []);
  return <VStack>
      <For each={items} reverse>
        {({
        id,
        name,
        email
      }) => <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>}
      </For>
    </VStack>;
}`,...C.parameters?.docs?.source}}};const _=["Basic","FallBack","Filter","Sort","Offset","Limit","Reverse"];export{h as Basic,u as FallBack,p as Filter,k as Limit,j as Offset,C as Reverse,f as Sort,_ as __namedExportsOrder,V as default};
