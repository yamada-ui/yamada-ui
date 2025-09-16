import{bN as l,j as t,bO as i}from"./iframe-Brv718Ke.js";import"./preload-helper-D9Z9MdNV.js";const m={component:l,title:"Components / Slot"},e=()=>{const r=({asChild:n,...s})=>{const a=n?l:"button";return t.jsx(a,{...s})};return t.jsx(r,{asChild:!0,onClick:n=>{n.defaultPrevented||console.log("Not logged because default is prevented.")},children:t.jsx("a",{href:"/about",onClick:n=>n.preventDefault(),children:"About"})})},o=()=>{const r=({asChild:n,children:s,endIcon:a,startIcon:u,...c})=>{const d=n?l:"button";return t.jsxs(d,{...c,children:[u,t.jsx(i,{children:s}),a]})};return t.jsx(r,{asChild:!0,children:t.jsx("a",{href:"/about",children:"About"})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  }> = ({
    asChild,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props} />;
  };
  return <Button asChild onClick={ev => {
    if (!ev.defaultPrevented) console.log("Not logged because default is prevented.");
  }}>
      <a href="/about" onClick={ev => ev.preventDefault()}>
        About
      </a>
    </Button>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const Button: FC<HTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
  }> = ({
    asChild,
    children,
    endIcon,
    startIcon,
    ...props
  }) => {
    const Component = asChild ? Slot : "button";
    return <Component {...props}>
        {startIcon}
        <Slottable>{children}</Slottable>
        {endIcon}
      </Component>;
  };
  return <Button asChild>
      <a href="/about">About</a>
    </Button>;
}`,...o.parameters?.docs?.source}}};const b=["Basic","MultipleChildren"];export{e as Basic,o as MultipleChildren,b as __namedExportsOrder,m as default};
