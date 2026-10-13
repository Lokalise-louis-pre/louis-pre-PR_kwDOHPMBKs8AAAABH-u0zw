import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i}from"./SvgIcon-DdodcY4Y.js";import{i as c}from"./iconsStoryArray-DsJhg1YV.js";const l="_iconsList_zsw2f_1",m="_iconsListItem_zsw2f_7",n={iconsList:l,iconsListItem:m},p=["LoadingSignIcon","TranslatingIcon"],t=({icon:s,...o})=>e.jsx(s,{...o}),a={tags:["!dev","!autodocs"],render:()=>e.jsx("ul",{className:n.iconsList,children:c.filter(([s])=>!s.startsWith("Deprecated")&&!p.includes(s)).map(([s,o])=>e.jsx("li",{className:n.iconsListItem,children:e.jsx(o,{size:"20px",ariaLabel:s})},s))})},r={tags:["!dev","!autodocs"],render:()=>e.jsx("ul",{className:n.iconsList,children:c.filter(([s])=>s.startsWith("Deprecated")).map(([s,o])=>e.jsx("li",{className:n.iconsListItem,children:e.jsx(o,{size:"20px",ariaLabel:s})},s))})},d={title:"Foundations/Icons",component:i,args:{icon:"AddIcon",size:"64px"},argTypes:{icon:{options:c.map(([s])=>s),mapping:Object.fromEntries(c),control:{type:"select"}},color:{control:{type:"color"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  icon: Component,
  ...args
}) => <Component {...args} />`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <ul className={styles.iconsList}>
            {iconsStoryArray.filter(([iconName]) => !iconName.startsWith('Deprecated') && !animatedIcons.includes(iconName)).map(([iconName, Component]) => <li className={styles.iconsListItem} key={iconName}>
                        <Component size="20px" ariaLabel={iconName} />
                    </li>)}
        </ul>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs'],
  render: () => <ul className={styles.iconsList}>
            {iconsStoryArray.filter(([iconName]) => iconName.startsWith('Deprecated')).map(([iconName, Component]) => <li className={styles.iconsListItem} key={iconName}>
                        <Component size="20px" ariaLabel={iconName} />
                    </li>)}
        </ul>
}`,...r.parameters?.docs?.source}}};const u=["Playground","AllIcons","AllDeprecatedIcons"],I=Object.freeze(Object.defineProperty({__proto__:null,AllDeprecatedIcons:r,AllIcons:a,Playground:t,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{I as s};
