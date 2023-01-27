(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[421,685],{3074:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(3500),a=n(9434),o=function(e){return e.contacts},i=function(e){return e.filter.value},s=n(8429),c=n(184),d=function(){var e=(0,a.I0)(),t=(0,a.v9)(i);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(r.Z,{variant:"outlined",label:"Find contacts by name",id:"filter",type:"text",value:t,onChange:function(t){e((0,s.T)(t.currentTarget.value))},sx:{width:"100%"}})})},l=n(3634),u=n(4554),p=n(6151),m=function(){var e=(0,a.I0)();return(0,c.jsxs)(u.Z,{component:"form",action:"",onSubmit:function(t){t.preventDefault();var n=t.target;e((0,l.el)({name:n.elements.name.value,number:n.elements.number.value})),n.reset()},sx:{display:"flex",flexDirection:"column"},children:[(0,c.jsx)(r.Z,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",sx:{mb:"20px"}}),(0,c.jsx)(r.Z,{label:"Number",id:"tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",sx:{mb:"10px"}}),(0,c.jsx)(p.Z,{type:"submit",children:"Add contact"})]})},f=n(493),v=n(4942),b=n(3366),y=n(7462),x=n(2791),Z=n(8182),g=n(4419),h=n(627),j=n(2065),C=n(7630),I=n(1046),w=n(3701),P=n(9103),S=n(162),A=n(2071),N=n(6199),k=n(5878),M=n(1217);function T(e){return(0,M.Z)("MuiListItem",e)}var L=(0,k.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var R=(0,k.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function F(e){return(0,M.Z)("MuiListItemSecondaryAction",e)}(0,k.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var _=["className"],G=(0,C.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,y.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),O=x.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,a=(0,b.Z)(n,_),o=x.useContext(N.Z),i=(0,y.Z)({},n,{disableGutters:o.disableGutters}),s=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,g.Z)(r,F,n)}(i);return(0,c.jsx)(G,(0,y.Z)({className:(0,Z.Z)(s.root,r),ownerState:i,ref:t},a))}));O.muiName="ListItemSecondaryAction";var V=O,z=["className"],B=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],D=(0,C.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,y.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,y.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,v.Z)({},"& > .".concat(R.root),{paddingRight:48}),(t={},(0,v.Z)(t,"&.".concat(L.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,v.Z)(t,"&.".concat(L.selected),(0,v.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,j.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(L.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,j.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,v.Z)(t,"&.".concat(L.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},r.button&&(0,v.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(L.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,j.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,j.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),E=(0,C.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),q=x.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,a=void 0===r?"center":r,o=n.autoFocus,i=void 0!==o&&o,s=n.button,d=void 0!==s&&s,l=n.children,u=n.className,p=n.component,m=n.components,f=void 0===m?{}:m,v=n.componentsProps,j=void 0===v?{}:v,C=n.ContainerComponent,k=void 0===C?"li":C,M=n.ContainerProps,R=(M=void 0===M?{}:M).className,F=n.dense,_=void 0!==F&&F,G=n.disabled,O=void 0!==G&&G,q=n.disableGutters,H=void 0!==q&&q,W=n.disablePadding,J=void 0!==W&&W,U=n.divider,Y=void 0!==U&&U,$=n.focusVisibleClassName,K=n.secondaryAction,Q=n.selected,X=void 0!==Q&&Q,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,re=void 0===ne?{}:ne,ae=(0,b.Z)(n.ContainerProps,z),oe=(0,b.Z)(n,B),ie=x.useContext(N.Z),se=x.useMemo((function(){return{dense:_||ie.dense||!1,alignItems:a,disableGutters:H}}),[a,ie.dense,_,H]),ce=x.useRef(null);(0,S.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var de=x.Children.toArray(l),le=de.length&&(0,P.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,y.Z)({},n,{alignItems:a,autoFocus:i,button:d,dense:se.dense,disabled:O,disableGutters:H,disablePadding:J,divider:Y,hasSecondaryAction:le,selected:X}),pe=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,g.Z)(i,T,r)}(ue),me=(0,A.Z)(ce,t),fe=re.root||f.Root||D,ve=te.root||j.root||{},be=(0,y.Z)({className:(0,Z.Z)(pe.root,ve.className,u),disabled:O},oe),ye=p||"li";return d&&(be.component=p||"div",be.focusVisibleClassName=(0,Z.Z)(L.focusVisible,$),ye=w.Z),le?(ye=be.component||p?ye:"div","li"===k&&("li"===ye?ye="div":"li"===be.component&&(be.component="div")),(0,c.jsx)(N.Z.Provider,{value:se,children:(0,c.jsxs)(E,(0,y.Z)({as:k,className:(0,Z.Z)(pe.container,R),ref:me,ownerState:ue},ae,{children:[(0,c.jsx)(fe,(0,y.Z)({},ve,!(0,h.Z)(fe)&&{as:ye,ownerState:(0,y.Z)({},ue,ve.ownerState)},be,{children:de})),de.pop()]}))})):(0,c.jsx)(N.Z.Provider,{value:se,children:(0,c.jsxs)(fe,(0,y.Z)({},ve,{as:ye,ref:me},!(0,h.Z)(fe)&&{ownerState:(0,y.Z)({},ue,ve.ownerState)},be,{children:[de,K&&(0,c.jsx)(V,{children:K})]}))})})),H=n(890);function W(e){return(0,M.Z)("MuiListItemText",e)}var J=(0,k.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),U=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],Y=(0,C.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,v.Z)({},"& .".concat(J.primary),t.primary),(0,v.Z)({},"& .".concat(J.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,y.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),$=x.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItemText"}),r=n.children,a=n.className,o=n.disableTypography,i=void 0!==o&&o,s=n.inset,d=void 0!==s&&s,l=n.primary,u=n.primaryTypographyProps,p=n.secondary,m=n.secondaryTypographyProps,f=(0,b.Z)(n,U),v=x.useContext(N.Z).dense,h=null!=l?l:r,j=p,C=(0,y.Z)({},n,{disableTypography:i,inset:d,primary:!!h,secondary:!!j,dense:v}),w=function(e){var t=e.classes,n=e.inset,r=e.primary,a=e.secondary,o={root:["root",n&&"inset",e.dense&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,g.Z)(o,W,t)}(C);return null==h||h.type===H.Z||i||(h=(0,c.jsx)(H.Z,(0,y.Z)({variant:v?"body2":"body1",className:w.primary,component:null!=u&&u.variant?void 0:"span",display:"block"},u,{children:h}))),null==j||j.type===H.Z||i||(j=(0,c.jsx)(H.Z,(0,y.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},m,{children:j}))),(0,c.jsxs)(Y,(0,y.Z)({className:(0,Z.Z)(w.root,a),ownerState:C,ref:t},f,{children:[h,j]}))})),K=n(3400),Q=n(7247),X=function(){var e=(0,a.v9)(o),t=e.items,n=e.isLoading,r=e.error,s=(0,a.I0)(),d=(0,a.v9)(i);(0,x.useEffect)((function(){s(""===d?(0,l.yF)():(0,l.xO)(d))}),[s,d]);var u=function(e){s((0,l._f)(e.currentTarget.id))};return(0,c.jsxs)(f.Z,{children:[n&&(0,c.jsx)("b",{children:"Loading contacts..."}),r&&(0,c.jsx)("b",{children:r}),t.map((function(e){var t=e.name,n=e.number,r=e.id;return(0,c.jsxs)(q,{alignItems:"flex-start",children:[(0,c.jsx)($,{variant:"body1",component:"span",sx:{mr:"10px"},children:t}),(0,c.jsx)($,{variant:"body1",component:"span",sx:{mr:"10px"},children:n}),(0,c.jsx)(K.Z,{id:r,type:"button",onClick:u,children:(0,c.jsx)(Q.Z,{})})]},r)}))]})},ee=n(5665);function te(){return(0,c.jsxs)(ee.CustomBox,{sx:{pt:"20px"},children:[(0,c.jsx)(H.Z,{component:"h2",variant:"",sx:{mb:"10px"},children:"Phonebook"}),(0,c.jsx)(m,{}),(0,c.jsx)(H.Z,{component:"h2",variant:"",sx:{mb:"10px",mt:"20px"},children:"Contacts"}),(0,c.jsx)(d,{}),(0,c.jsx)(X,{})]})}},5665:function(e,t,n){"use strict";n.r(t),n.d(t,{CustomBox:function(){return b},default:function(){return y}});var r,a=n(168),o=n(4554),i=n(9658),s=n(890),c=n(225),d=n(3500),l=n(6151),u=n(9434),p=n(9273),m=n(184),f=function(){var e=(0,u.I0)();return(0,m.jsxs)(o.Z,{component:"form",onSubmit:function(t){t.preventDefault();var n=t.currentTarget,r=n.elements.name.value,a=n.elements.email.value,o=n.elements.password.value;""!==r&&""!==a&&""!==o?o.length<7?e((0,p.mc)("Password must be at least 7 characters long")):(e((0,p.z2)({name:r,email:a,password:o})),n.reset()):e((0,p.mc)("Please fill in all forms"))},autoComplete:"off",sx:{display:"flex",flexDirection:"column"},children:[(0,m.jsx)(d.Z,{label:"Username",type:"text",name:"name",sx:{mb:"20px"}}),(0,m.jsx)(d.Z,{label:"Email",type:"email",name:"email",sx:{mb:"20px"}}),(0,m.jsx)(d.Z,{label:"Password",type:"password",name:"password",sx:{mb:"20px"}}),(0,m.jsx)(l.Z,{type:"submit",children:"Register"})]})},v=n(2791),b=(0,c.Z)(o.Z)(r||(r=(0,a.Z)(["\n  max-width: 400px;\n  margin: 25px auto 0;\n  padding: 15px;\n  background-image: linear-gradient(\n    rgba(200, 200, 200, 0.7),\n    rgba(200, 200, 200, 0.7)\n  );\n  border-radius: 10px;\n"])));function y(){var e=(0,u.v9)((function(e){return e.auth.error})),t=(0,u.I0)();return(0,v.useEffect)((function(){t((0,p.mc)())}),[t]),e&&setTimeout((function(){t((0,p.mc)())}),5e3),(0,m.jsxs)(b,{children:[e&&(0,m.jsx)(i.Z,{severity:"info",color:"info",children:e}),(0,m.jsx)(s.Z,{variant:"",component:"h2",sx:{mb:"15px"},children:"Registration"}),(0,m.jsx)(f,{})]})}},7247:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var a=r(n(5649)),o=n(184),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4454)},4454:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return h},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v},unsupportedProp:function(){return b},useControlled:function(){return y.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return g.Z}});var r=n(5902),a=n(4036),o=n(8949).Z,i=n(9201),s=n(3199);var c=function(e,t){return function(){return null}},d=n(9103),l=n(8301),u=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(2971).Z,f=n(162),v=n(6248).Z;var b=function(e,t,n,r,a){return null},y=n(8744),x=n(9683),Z=n(2071),g=n(3031),h={configure:function(e){r.Z.configure(e)}}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=contacts.cb37cab4.chunk.js.map