import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as L}from"./clsx-B-dksMZM.js";import{I as b}from"./IconButton-DH8gHv83.js";import{C as x}from"./Close-CbSJyKiw.js";import{B as M}from"./Button-D-IpMAX6.js";import{L as S}from"./Link-bU2Mscgh.js";import"./index-MPVjHJeJ.js";import"./index-DUj0Aiku.js";import"./Tooltip-C3mkGPYQ.js";import"./Popover-BIobbZJL.js";import"./Portal-C0rvGOAr.js";import"./index-vJCRx9DD.js";import"./index-Bzm33-PM.js";import"./useMergeRefs-CgiA6E4I.js";import"./index-Bdtxe6rI.js";import"./SvgIcon-DdodcY4Y.js";const W="_container_19hei_1",j="_alignCenter_19hei_9",N="_error_19hei_13",w="_warning_19hei_17",A="_info_19hei_21",F="_content_19hei_25",l={container:W,alignCenter:j,error:N,warning:w,info:A,content:F},c=({status:n="warning",align:a="top",onClose:t,children:_,className:C,...v})=>e.jsxs("div",{className:L(l.container,C,{[l.alignCenter]:a==="center",[l[n]]:n}),...v,children:[e.jsx("div",{className:l.content,children:_}),typeof t=="function"&&e.jsx(b,{ariaLabel:"Close",onClick:t,children:e.jsx(x,{})})]});c.displayName="TopBanner";try{c.displayName="TopBanner",c.__docgenInfo={description:"",displayName:"TopBanner",props:{status:{defaultValue:{value:"warning"},description:"Changes background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},align:{defaultValue:{value:"top"},description:"Aligns the content and the close button.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},onClose:{defaultValue:null,description:"Allows to close the banner.",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const I="_topBannerLink_1etmm_1",E={topBannerLink:I},s=({children:n,...a})=>e.jsx(S,{className:E.topBannerLink,...a,children:n});s.displayName="TopBannerLink";try{s.displayName="TopBannerLink",s.__docgenInfo={description:"",displayName:"TopBannerLink",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}}}catch{}const i=({variant:n="secondary",appearance:a="accent",children:t,..._})=>e.jsx(M,{appearance:a,type:"button",variant:n,..._,children:t});i.displayName="TopBannerButton";try{i.displayName="TopBannerButton",i.__docgenInfo={description:"",displayName:"TopBannerButton",props:{variant:{defaultValue:{value:"secondary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},appearance:{defaultValue:{value:"accent"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"accent"'},{value:'"danger"'}]}}}}}catch{}const Z={title:"Components/TopBanner",component:c,args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}},onClose:{action:"onClose"}},parameters:{docs:{description:{component:"TopBanner is used to display messages on the top of the page. It takes the full width of the page.\n\nTopBanner exports 2 components:\n- `TopBanner`: Main component.\n- `TopBannerLink`: Link that is meant to be used within `TopBanner`.\n- `TopBannerButton`: Button that is meant to be used within `TopBanner`."}}}},k="Important Notice: This is a global info notification.",o="Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",r=n=>{const{onCloseFunction:a,...t}=n;return e.jsx(c,{...t,onClose:a?n.onClose:void 0})},p={args:{children:k,status:"warning"},render:r},d={args:{children:o,status:"info"},render:r},u={name:"Error",args:{children:o,status:"error"},render:r},m={args:{children:o,onCloseFunction:!0},render:r},g={args:{children:[o,e.jsx(s,{children:"This is a link"},"link")],onCloseFunction:!0},render:r},h={args:{children:[k,e.jsx(s,{children:"This is a link"},"link")]},render:r},B={args:{children:[o,e.jsx(i,{variant:"primary",children:"Label"},"button")]},render:r},T={args:{children:[k,e.jsx(i,{variant:"primary",children:"Label"},"button")]},render:r},y={args:{status:"error",onCloseFunction:!0,children:[o,e.jsx(i,{variant:"primary",appearance:"danger",children:"Label"},"button")]},render:r},f={args:{children:[o,e.jsx(s,{children:"This is a link"},"link")],onCloseFunction:!0,align:"center"},render:r};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: shortMessage,
    status: 'warning'
  },
  render: TopBannerTemplate
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: longMessage,
    status: 'info'
  },
  render: TopBannerTemplate
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    children: longMessage,
    status: 'error'
  },
  render: TopBannerTemplate
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: longMessage,
    onCloseFunction: true
  },
  render: TopBannerTemplate
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: [longMessage, <TopBannerLink key="link">This is a link</TopBannerLink>],
    onCloseFunction: true
  },
  render: TopBannerTemplate
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: [shortMessage, <TopBannerLink key="link">This is a link</TopBannerLink>]
  },
  render: TopBannerTemplate
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: [longMessage, <TopBannerButton key="button" variant="primary">
                Label
            </TopBannerButton>]
  },
  render: TopBannerTemplate
}`,...B.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: [shortMessage, <TopBannerButton key="button" variant="primary">
                Label
            </TopBannerButton>]
  },
  render: TopBannerTemplate
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    onCloseFunction: true,
    children: [longMessage, <TopBannerButton key="button" variant="primary" appearance="danger">
                Label
            </TopBannerButton>]
  },
  render: TopBannerTemplate
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: [longMessage, <TopBannerLink key="link">This is a link</TopBannerLink>],
    onCloseFunction: true,
    align: 'center'
  },
  render: TopBannerTemplate
}`,...f.parameters?.docs?.source}}};const ee=["Warning","Info","ErrorStory","WithCloseButton","WithTopBannerLinkAndCloseButton","WithTopBannerLinkAndShortMessage","WithTopBannerButton","WithTopBannerButtonAndShortMessage","WithTopBannerDangerButtonAndCloseButton","WithCenteredCloseButton"];export{u as ErrorStory,d as Info,p as Warning,f as WithCenteredCloseButton,m as WithCloseButton,B as WithTopBannerButton,T as WithTopBannerButtonAndShortMessage,y as WithTopBannerDangerButtonAndCloseButton,g as WithTopBannerLinkAndCloseButton,h as WithTopBannerLinkAndShortMessage,ee as __namedExportsOrder,Z as default};
