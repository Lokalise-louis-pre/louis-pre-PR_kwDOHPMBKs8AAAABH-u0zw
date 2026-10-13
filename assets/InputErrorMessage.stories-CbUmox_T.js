import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{I as s,u as i}from"./useInputErrorMessages-gddYeL_s.js";import"./clsx-B-dksMZM.js";import"./Error-BWWGylYt.js";import"./SvgIcon-DdodcY4Y.js";import"./index-MPVjHJeJ.js";const d={title:"Components/Forms/InputErrorMessage",component:s,parameters:{controls:{sort:"requiredFirst"},docs:{source:{type:"code"},description:{component:"InputErrorMessage is used to display one or more form validation error messages next to input fields.\n\nInputErrorMessage exports a `useInputErrorMessages` hook that accepts 1 or more error messages or a boolean,\nand returns an object with an `isInvalid` boolean if there are errors, and an `errorMessages` array with an object for each error containing the message and a generated unique ID.\nThe `errorMessages` array can be passed as a child to `InputErrorMessage`."}}},argTypes:{error:{control:{type:"object"}}},render:o=>{const{error:a}=o,{errorMessages:n}=i(a);return t.jsx(s,{children:n})}},r={args:{error:"Single error message"}},e={args:{error:[`This is an array of error messages
`,`Which you can use to show multiple input errors
`,`This is an array of error messages
`,"By passing multiple children to InputErrorMessage"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Single error message'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    error: ['This is an array of error messages\\n', 'Which you can use to show multiple input errors\\n', 'This is an array of error messages\\n',
    // this one will be stripped out
    'By passing multiple children to InputErrorMessage']
  }
}`,...e.parameters?.docs?.source}}};const h=["Default","MultipleMessages"];export{r as Default,e as MultipleMessages,h as __namedExportsOrder,d as default};
