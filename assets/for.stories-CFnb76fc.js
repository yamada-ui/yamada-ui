import{n as w,o as q,I as Z,r as d,j as e,V as m,T as a}from"./iframe-C1QqsVA9.js";import{f as t}from"./chunk-3WUZ46N3-DFjLhHGD.js";import{F as i}from"./for-Be_orN7T.js";import{C as l,a as c,b as x}from"./card-CtXJo_f_.js";import{E as D}from"./empty-state-ULxO5GYt.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],J=w("box",G),K=q(Z)({as:J}),ee={component:i,title:"Components / For"},h=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},u=()=>e.jsx(m,{children:e.jsx(i,{each:[],fallback:e.jsx(D,{description:"There are no items to show",indicator:e.jsx(K,{})}),children:(s,n)=>e.jsx(a,{children:s},n)})}),p=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,filter:({email:n})=>n.includes("gmail"),children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},f=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,sort:(n,r)=>n.name.localeCompare(r.name),children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},j=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,offset:5,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},k=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,limit:5,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})},C=()=>{const s=d.useMemo(()=>Array.from({length:10},(n,r)=>({id:r,name:`${t.person.firstName()} ${t.person.lastName()}`,email:t.internet.email()})),[]);return e.jsx(m,{children:e.jsx(i,{each:s,reverse:!0,children:({id:n,name:r,email:o})=>e.jsxs(l,{size:"md",variant:"outline",children:[e.jsx(c,{children:e.jsx(a,{as:"h1",fontSize:"lg",children:r})}),e.jsxs(x,{pt:"sm",children:[e.jsxs(a,{color:"muted",children:["Id (Index): ",n]}),e.jsxs(a,{color:"muted",children:["Email: ",o]})]})]},n)})})};var T,y,S;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(S=(y=h.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var g,I,N;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <VStack>
      <For each={[]} fallback={<EmptyState.Root description="There are no items to show" indicator={<BoxIcon />} />}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>;
}`,...(N=(I=u.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var z,$,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(F=($=p.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var B,E,R;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(R=(E=f.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var v,V,_;j.parameters={...j.parameters,docs:{...(v=j.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(_=(V=j.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,M,H;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(H=(M=k.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var b,L,O;C.parameters={...C.parameters,docs:{...(b=C.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(O=(L=C.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const ne=["Basic","FallBack","Filter","Sort","Offset","Limit","Reverse"];export{h as Basic,u as FallBack,p as Filter,k as Limit,j as Offset,C as Reverse,f as Sort,ne as __namedExportsOrder,ee as default};
