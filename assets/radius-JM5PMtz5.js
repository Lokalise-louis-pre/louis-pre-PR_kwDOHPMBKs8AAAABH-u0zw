import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import"./index-DT_f3JHH.js";import{r}from"./index-MPVjHJeJ.js";import{g as h}from"./tokenValues-BQyP9yJ8.js";import{t as m,T as x}from"./ThemeSwitcher-DtENVPJS.js";import{M as u,U as j}from"./index-DjnbTMjp.js";import"./preview-EMD9rg85.js";import"./iframe-BLiBCL7k.js";import"./DocsRenderer-CFRXHY34-CODBhzlk.js";import"./react-18-BlUjvyv-.js";import"./index-Bzm33-PM.js";import"./index-vJCRx9DD.js";import"./index-CFeRKNTJ.js";import"./index-DrFu-skq.js";const p="_container_fqx9h_1",f="_block_fqx9h_10",o={container:p,block:f},g=()=>{const i={code:"code",div:"div",span:"span",...s()},[n,l]=r.useState("themeLokaliseLight"),d=h(m[n].radius);return e.jsxs(e.Fragment,{children:[e.jsx(x,{selectedTheme:n,onSelectTheme:l}),e.jsx(i.div,{className:o.container,children:d.map(({key:t,tokenValue:c})=>e.jsxs(r.Fragment,{children:[e.jsx(i.span,{children:e.jsxs(i.code,{children:["value('radius.",t,"')"]})}),e.jsx(i.div,{className:o.block,style:{borderRadius:c}})]},t))})]})};function a(i){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Foundations/Radius"}),`
`,e.jsx(n.h1,{id:"radius",children:"Radius"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#figma-design-file",children:"Figma Design File"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radius-options",children:"Radius Options"})}),`
`]}),`
`,e.jsx("h2",{id:"overview",children:"Overview"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @lokalise/louis
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const StyledDiv = () => (
	<div
		style={{
			border-radius: 'var(--lok-radius-m)',
		}}
	></div>
);
`})}),`
`,e.jsx("h2",{id:"figma-design-file",children:"Figma Design File"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=5398%3A24541",rel:"nofollow",children:"Figma Source File | Radius"})}),`
`]}),`
`,e.jsx("h2",{id:"radius-options",children:"Radius Options"}),`
`,e.jsx(j,{children:e.jsx(g,{})})]})}function N(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{g as Radii,N as default};
