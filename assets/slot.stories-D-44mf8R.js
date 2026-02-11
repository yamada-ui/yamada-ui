import{bV as l,j as t,bW as f}from"./iframe-FV6Pf4zG.js";import"./preload-helper-C1FmrZbK.js";const v={component:l,title:"Components / Slot"},e=()=>{const r=({asChild:n,...s})=>{const a=n?l:"button";return t.jsx(a,{...s})};return t.jsx(r,{asChild:!0,onClick:n=>{n.defaultPrevented||console.log("Not logged because default is prevented.")},children:t.jsx("a",{href:"/about",onClick:n=>n.preventDefault(),children:"About"})})},o=()=>{const r=({asChild:n,children:s,endIcon:a,startIcon:m,...b})=>{const h=n?l:"button";return t.jsxs(h,{...b,children:[m,t.jsx(f,{children:s}),a]})};return t.jsx(r,{asChild:!0,children:t.jsx("a",{href:"/about",children:"About"})})};var u,c,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,C;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(C=(p=o.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};const j=["Basic","MultipleChildren"];export{e as Basic,o as MultipleChildren,j as __namedExportsOrder,v as default};
