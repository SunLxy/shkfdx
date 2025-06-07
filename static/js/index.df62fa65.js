(()=>{"use strict";var e={9787:function(e,l,t){var o=t(4246),i=t(7634),a=t(5783),r=t(4935),s=t(7378),_=t(4377);let n=(0,_.kc)(({token:e,css:l,...t})=>({container:l`
      box-sizing: border-box;
      padding: 0px 8px;
      &.q_list_radio_horizontal{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        flex-wrap: wrap;
      }
      &.q_list_radio_vertical{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        flex-wrap: wrap;
      }
    `,item:l`
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px;
      color: ${e.colorText};
      cursor: pointer;
      & > b {
        padding-right: 4px;
      }
      &.error{
        background-color: ${e.colorError};
      }
      &.success{
        background-color: ${e.colorSuccess};
      }
    `})),d={0:"A",1:"B",2:"C",3:"D",4:"E",5:"F",6:"G",7:"H",8:"I",9:"J",10:"K",11:"L",12:"M",13:"N",14:"O",15:"P",16:"Q",17:"R",18:"S",19:"T",20:"U",21:"V",22:"W",23:"X",24:"Y",25:"Z"};function b(e){let l=[...e];for(let e=l.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[l[e],l[t]]=[l[t],l[e]]}return l}let u=e=>{let{layout:l="horizontal",options:t=[],value:i,onChange:a}=e,{styles:r,cx:s}=n();return(0,o.jsx)("div",{className:s("q_list_radio",r.container,{[`q_list_radio_${l}`]:!!l}),children:t.map((e,l)=>{let t={};return i&&(e.isTrue&&(t.success=!0),e.label===i&&i&&(t[e.isTrue?"success":"error"]=!0)),(0,o.jsxs)("div",{className:s(r.item,t),onClick:()=>a(e.label),children:[(0,o.jsxs)("b",{children:[d[l],"."]}),(0,o.jsx)("span",{children:e.label})]},e.label)})})};var c=t(1115);let p=(0,_.kc)(({token:e,css:l})=>({input:l`
      &.error {
        color: ${e.colorError};
      }
    `})),h=e=>{let{isTrue:l,value:t}=e,{styles:i,cx:a}=p(),[r,_]=(0,s.useState)("");return(0,s.useEffect)(()=>{_(t||"")},[t]),(0,o.jsx)(c.Z,{value:r,onChange:e=>{t||_(e.target.value)},className:a(i.input,{error:t&&!1===l}),onBlur:l=>e.onChange(l.target.value)})};(0,_.kc)(({token:e,css:l})=>({container:l`
    `,item:l`
      font-size: 12px;
      color: ${e.colorText};
      &.bold {
        font-weight: 600;
      }
      &.center {
        text-align: center;
      }
    `}));let g=(0,_.kc)(({token:e,css:l})=>({container:l`
    `,item:l`
      font-size: 12px;
      color: ${e.colorText};
      & > b {
        padding-right: 4px;
      }
    `})),m=e=>{let{content:l=[],sort:t}=e,{styles:i,cx:a}=g();return(0,o.jsx)("div",{className:a("q_topic",i.container),children:l.map((e,l)=>0===l?(0,o.jsxs)("div",{className:a(i.item),children:[(0,o.jsxs)("b",{children:[t,"."]}),e]},l):(0,o.jsx)("div",{className:a(i.item),children:e},l))})},f=(0,_.kc)(({token:e,css:l})=>({base:l`
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 12px;
      &+&{
        margin-top: 8px;
      }
      & > b {
        padding-right: 4px;
      }
      &.is_options {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    `,error:l`
      color: ${e.colorError};
      background-color: ${e.colorErrorBg};
      font-size: 12px;
      width: 100%;
      text-align: right;
      padding: 4px;
      border-radius: 3px;
    `,translate:l`
      font-size: 12px;
      width: 100%;
      text-align: left;
      padding: 4px;
      background-color: ${e.colorFillContent};
      border-radius: 3px;
      font-size: 12px;
    `})),w=e=>{let{sort:l,isOptions:t=!1,isBool:i,isInput:a,answer:r,options:_,layout:n="horizontal",topic:d,isRead:b,translate:c}=e,{styles:p,cx:g}=f(),w=()=>b?Array.isArray(_)?{value:_.find(e=>e.isTrue)?.label,isTrue:void 0}:{value:r,isTrue:void 0}:{value:"",isTrue:void 0},[x,y]=(0,s.useState)(()=>w());(0,s.useEffect)(()=>{y(w())},[b]);let T=(0,s.useMemo)(()=>{if(i){if("正确"===r)return[{label:"正确",isTrue:!0},{label:"错误"}];else if("错误"===r)return[{label:"正确"},{label:"错误",isTrue:!0}]}return[]},[r]),v=e=>{if(x.value)return;let l=!1;l=i||a?e===r:_?.find(l=>l.label===e)?.isTrue,y({value:e,isTrue:!!l})};return(0,o.jsxs)("div",{className:g(p.base,{is_options:t,is_bool:i,is_input:a}),children:[t?(0,o.jsxs)("b",{children:[l,"."]}):(0,o.jsx)(m,{content:d,sort:l}),i?(0,o.jsx)(u,{layout:n,value:x.value,options:T,onChange:v}):null,_?(0,o.jsx)(u,{layout:n,value:x.value,options:_,onChange:v}):null,a?(0,o.jsx)(h,{value:x.value,isTrue:x.isTrue,onChange:v}):null,!1===x.isTrue&&a?(0,o.jsx)("div",{className:g(p.error),children:"填写错误"}):null,c&&b?(0,o.jsx)("div",{className:g(p.translate),children:c}):null]})},x=(0,_.kc)(({css:e})=>({base:e`
      height: 100%;
      width: 100%;
      padding: 14px;
      overflow: auto;
      box-sizing: border-box;
    `})),y=e=>{let{children:l,className:t,...i}=e,{styles:a}=x();return(0,o.jsx)("div",{...i,className:`${a.base} ${t}`,children:l})},T=(0,_.kc)(({css:e,token:l})=>({base:e`
      position: absolute;
      top: 54px;
      right: 14px;
      display: inline-flex;
      flex-direction: column;
      color: ${l.colorPrimary};
      font-size: 12px;
      z-index: 9999;
      gap: 12px;
    `,span:e`
      cursor: pointer;
    `})),v=e=>{let{children:l,className:t,items:i,...a}=e,{styles:r,cx:s}=T();return(0,o.jsx)("div",{...a,className:s(r.base,t),children:i.map((e,l)=>{let{className:t,...i}=e;return(0,o.jsx)("span",{...i,className:s(r.span,t),children:e.children},l)})})},k=(0,_.kc)(({css:e,token:l})=>({base:e`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      & > a {
        height: 32px;
        border-radius: 16px;
        min-width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${l.colorPrimary};
        color: #fff;
        font-size: 12px;
        text-decoration: none;
      }
    `})),j=e=>{let{children:l,className:t,...i}=e,{styles:a}=k();return(0,o.jsx)("div",{...i,className:`${a.base} ${t}`,children:l})};var I=JSON.parse('[{"id":1,"topic":["I ________ every week."],"options":[{"label":"go swimming","isTrue":true},{"label":"goes swimming"},{"label":"went swimming"}]},{"id":2,"topic":["I  ________ work yesterday."],"options":[{"label":"doesn’t go to"},{"label":"didn’t go to","isTrue":true},{"label":"don’t go to"}]},{"id":3,"topic":["________  my father phone me last night?"],"options":[{"label":"Do"},{"label":"Does"},{"label":"Did","isTrue":true}]},{"id":4,"topic":["What ________  in their spare time?"],"options":[{"label":"do the students often read","isTrue":true},{"label":"the students often read"},{"label":"the students do often read"}]},{"id":5,"topic":["I was reading the newspaper ________ Joyce came over to chat."],"options":[{"label":"at then"},{"label":"when","isTrue":true},{"label":"where"}]},{"id":6,"topic":["I ________ sleep well when I was younger."],"options":[{"label":"don’t used to"},{"label":"didn’t used to"},{"label":"didn’t use to","isTrue":true}]},{"id":7,"topic":["We ________  everything together, but now we don’t."],"options":[{"label":"use todo"},{"label":"used to do","isTrue":true},{"label":"used do"}]},{"id":8,"topic":["There have been a lot of changes ________ 1978."],"options":[{"label":"since","isTrue":true},{"label":"from"},{"label":"for"}]},{"id":9,"topic":["Her brother ________  in the army for three years."],"options":[{"label":"have been"},{"label":"has been","isTrue":true},{"label":"was"}]},{"id":10,"topic":["I haven’t paid DJ Richard  ________ ."],"options":[{"label":"since"},{"label":"already"},{"label":"yet","isTrue":true}]},{"id":11,"topic":["Last year I often ________ that library."],"options":[{"label":"went to","isTrue":true},{"label":"go to"},{"label":"goes to"}]},{"id":12,"topic":["________ anything wrong with the machine?"],"options":[{"label":"Are there"},{"label":"Is there","isTrue":true},{"label":"Do there"}]},{"id":13,"topic":["Who  ________ gave you those flowers?"],"options":[{"label":"/","isTrue":true},{"label":"do"},{"label":"did"}]},{"id":14,"topic":["I  ________ some drinks when I noticed this woman."],"options":[{"label":"am making"},{"label":"make"},{"label":"was making","isTrue":true}]},{"id":15,"topic":["Did you ________ play basketball?"],"options":[{"label":"use to","isTrue":true},{"label":"used to"},{"label":"be used to"}]},{"id":16,"topic":["She has just ________ Shanghai."],"options":[{"label":"went to"},{"label":"gone to","isTrue":true},{"label":"go to"}]},{"id":17,"topic":["You ________ borrow my bike tomorrow."],"options":[{"label":"must"},{"label":"can","isTrue":true},{"label":"should"}]},{"id":18,"topic":["You ________ go there."],"options":[{"label":"don’t have to","isTrue":true},{"label":"need not to"},{"label":"don’t need"}]},{"id":19,"topic":["The nights ________ be cold."],"options":[{"label":"are"},{"label":"should"},{"label":"will","isTrue":true}]},{"id":20,"topic":["Hurry up,________ we’ll be late."],"options":[{"label":"or","isTrue":true},{"label":"and"},{"label":"but"}]},{"id":21,"topic":["I ________go to the party."],"options":[{"label":"might not","isTrue":true},{"label":"not might"},{"label":"mustn’t"}]},{"id":22,"topic":["He ________ be ill. He looks so pale."],"options":[{"label":"can"},{"label":"must","isTrue":true},{"label":"mustn’t"}]},{"id":23,"topic":["I can’t promise you       ."],"options":[{"label":"something"},{"label":"anything","isTrue":true},{"label":"nothing"}]},{"id":24,"topic":["Jim is ________ Jack."],"options":[{"label":"as tall than"},{"label":"as taller as"},{"label":"as tall as","isTrue":true}]},{"id":25,"topic":["He is ________ boy in our class."],"options":[{"label":"the tallest","isTrue":true},{"label":"the most tall"},{"label":"a tallest"}]},{"id":26,"topic":["________you don’t know the answer, ask me."],"options":[{"label":"Since"},{"label":"Because"},{"label":"If","isTrue":true}]},{"id":27,"topic":["You ________ smoke here."],"options":[{"label":"mustn’t","isTrue":true},{"label":"needn’t"},{"label":"don’t"}]},{"id":28,"topic":["________Paris tonight. Look -- here’s the plane ticket."],"options":[{"label":"I’m flying to","isTrue":true},{"label":"fly to"},{"label":"can fly to"}]},{"id":29,"topic":["My car consumes ________ gas than hers."],"options":[{"label":"few"},{"label":"less","isTrue":true},{"label":"little"}]},{"id":30,"topic":["Mary has more books ______ her brother."],"options":[{"label":"as"},{"label":"like"},{"label":"than","isTrue":true}]},{"id":31,"topic":["He is ________ of the five brothers."],"options":[{"label":"the younger"},{"label":"the youngest","isTrue":true},{"label":"the most young"}]},{"id":32,"topic":["If it rains, I ________ stay at home."],"options":[{"label":"will","isTrue":true},{"label":"might"},{"label":"must"}]},{"id":33,"topic":["My car________outside the school yesterday."],"options":[{"label":"is parking"},{"label":"was park"},{"label":"was parked","isTrue":true}]},{"id":34,"topic":["I’ve________ bought a new house."],"options":[{"label":"just","isTrue":true},{"label":"yet"},{"label":"really"}]},{"id":35,"topic":["When we got there, the basketball match  _____."],"options":[{"label":"has already started"},{"label":"had already started","isTrue":true},{"label":"had already starting"}]},{"id":36,"topic":["They were warmly  _____  by the local people."],"options":[{"label":"welcomed","isTrue":true},{"label":"welcome"},{"label":"welcoming"}]},{"id":37,"topic":["If I ________ you, I would refuse the money."],"options":[{"label":"am"},{"label":"was"},{"label":"were","isTrue":true}]},{"id":38,"topic":["If you dropped the glass, it        break."],"options":[{"label":"will"},{"label":"would","isTrue":true},{"label":"can"}]},{"id":39,"topic":["He told me that he ________  me a special present."],"options":[{"label":"will buy"},{"label":"would bought"},{"label":"had bought","isTrue":true}]},{"id":40,"topic":["This house ________ last year."],"options":[{"label":"was built","isTrue":true},{"label":"is built"},{"label":"was build"}]},{"id":41,"topic":["the end of that year, Henry had collected more than a thousand foreign stamps."],"options":[{"label":"On"},{"label":"At"},{"label":"By","isTrue":true}]},{"id":42,"topic":["She said that she ________ about her date."],"options":[{"label":"was really excited","isTrue":true},{"label":"was really exciting"},{"label":"is really excited"}]},{"id":43,"topic":["Jenny        a day’s work."],"options":[{"label":"already has done"},{"label":"has already done","isTrue":true},{"label":"has done already"}]},{"id":44,"topic":["The song was composed ________ an 8-year-old boy."],"options":[{"label":"with"},{"label":"at"},{"label":"by","isTrue":true}]},{"id":45,"topic":["He said that he ________ her the day before."],"options":[{"label":"saw"},{"label":"have seen"},{"label":"had seen","isTrue":true}]},{"id":46,"topic":["I met an old friend of mine________."],"options":[{"label":"on my way home","isTrue":true},{"label":"on way home"},{"label":"on my way to home"}]},{"id":47,"topic":["He went ________."],"options":[{"label":"to upstairs"},{"label":"upstairs","isTrue":true},{"label":"stair up"}]},{"id":48,"topic":["He has an ________ jacket."],"options":[{"label":"black old leather"},{"label":"leather old black"},{"label":"old black leather","isTrue":true}]},{"id":49,"topic":["The film ________ I saw last night is about a young teacher."],"options":[{"label":"which","isTrue":true},{"label":"who"},{"label":"what"}]},{"id":50,"topic":["He is sorry ________ the news."],"options":[{"label":"hear"},{"label":"to hear","isTrue":true},{"label":"that hear"}]},{"id":51,"topic":["My grandpa is wearing a ________ belt."],"options":[{"label":"red long plastic"},{"label":"long plastic red"},{"label":"long red plastic","isTrue":true}]},{"id":52,"topic":["We have friends all over ________ world."],"options":[{"label":"the","isTrue":true},{"label":"a"},{"label":"/"}]},{"id":53,"topic":["I asked him how he liked ________ Paris."],"options":[{"label":"a"},{"label":"the"},{"label":"/","isTrue":true}]},{"id":54,"topic":["There must be life out there ________."],"options":[{"label":"anywhere"},{"label":"somewhere","isTrue":true},{"label":"everywhere"}]},{"id":55,"topic":["I hate ________bright colours like red and yellow."],"options":[{"label":"wearing","isTrue":true},{"label":"to wear"},{"label":"wear"}]},{"id":56,"topic":["The ________have a lot of time to do their own research work."],"options":[{"label":"there students"},{"label":"students there","isTrue":true},{"label":"there are students"}]},{"id":57,"topic":["I ________him singing."],"options":[{"label":"have never heard","isTrue":true},{"label":"never have heard"},{"label":"have heard never"}]},{"id":58,"topic":["The old man walked home________."],"options":[{"label":"slow"},{"label":"slower"},{"label":"slowly","isTrue":true}]},{"id":59,"topic":["He often comes to school ________."],"options":[{"label":"late","isTrue":true},{"label":"lately"},{"label":"in late"}]},{"id":60,"topic":["The girl ________answered the phone was polite enough."],"options":[{"label":"which"},{"label":"that","isTrue":true},{"label":"what"}]},{"id":61,"topic":["Your shoes need ________."],"options":[{"label":"polish"},{"label":"polished"},{"label":"polishing","isTrue":true}]},{"id":62,"topic":["________ abroad can be very exciting."],"options":[{"label":"Travelling","isTrue":true},{"label":"Travel"},{"label":"Travelled"}]},{"id":63,"topic":["I enjoy ________with you."],"options":[{"label":"work"},{"label":"to work"},{"label":"working","isTrue":true}]},{"id":64,"topic":["I found my ________ paintings."],"options":[{"label":"two first small oil"},{"label":"first two small oil","isTrue":true},{"label":"first small two oil"}]},{"id":65,"topic":["I considered ________ better not to go."],"options":[{"label":"it","isTrue":true},{"label":"that"},{"label":"/"}]},{"id":66,"topic":["I would like ________ more money on clothes."],"options":[{"label":"spending"},{"label":"to spend","isTrue":true},{"label":"spend"}]},{"id":67,"topic":["She has two cats. ________big cat is white, and ________ small one is black."],"options":[{"label":"the, a"},{"label":"A, the"},{"label":"The, the","isTrue":true}]},{"id":68,"topic":["________ is power."],"options":[{"label":"The knowledge"},{"label":"Knowledge","isTrue":true},{"label":"knowledge"}]},{"id":69,"topic":["We ________ visit our friends in Germany in April. They invited us last week."],"options":[{"label":"are going to","isTrue":true},{"label":"will"},{"label":"are about to"}]},{"id":70,"topic":["The weather is________ than it was yesterday."],"options":[{"label":"more bad"},{"label":"more worse"},{"label":"worse","isTrue":true}]},{"id":71,"topic":["It is one of the best concerts I________."],"options":[{"label":"went to"},{"label":"have ever been to","isTrue":true},{"label":"had gone to"}]},{"id":72,"topic":["China is no longer what it________."],"options":[{"label":"used to be","isTrue":true},{"label":"was used to being"},{"label":"used to being"}]},{"id":73,"topic":["The workers are busy________models for the exhibition."],"options":[{"label":"to make"},{"label":"with making"},{"label":"making","isTrue":true}]},{"id":74,"topic":["________you change your mind, I won’t be able to help you."],"options":[{"label":"When"},{"label":"Unless","isTrue":true},{"label":"While"}]},{"id":75,"topic":["I have taken many photos. I’m going to get the film________."],"options":[{"label":"developed","isTrue":true},{"label":"developing"},{"label":"to be developed"}]}]'),O=t(9584);let N=(0,_.kc)(e=>{let{css:l,token:t}=e;return{base:l`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      & > header{
        height: 40px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        overflow: auto;
        & > .navlink {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-decoration:none;
          color: ${t.colorText};
        }
        & > .navlink::after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        & > .navlink:hover::after {
          border-color: ${t.colorPrimaryBorder};
        }

        & > .navlink + .navlink {
          margin-left: 20px;
        }
        & > .navlink.active {
          color: ${t.colorPrimary};
          &.navlink::after {
            border-color:${t.colorPrimaryBorder};
          }
        }
      }

      & > main {
        flex: 1;
        overflow: auto;
      }
    `}}),$=[{path:"/",element:(0,o.jsx)(()=>{let{styles:e}=N();return(0,o.jsxs)("div",{className:e.base,children:[(0,o.jsxs)("header",{children:[(0,o.jsx)(a.OL,{className:"navlink",to:"/english",children:"英语"}),(0,o.jsx)(a.OL,{className:"navlink",to:"/operating_system",children:"操作系统"}),(0,o.jsx)(a.OL,{className:"navlink",to:"/web",children:"网站设计与开发"}),(0,o.jsx)(a.OL,{className:"navlink",to:"/computer_network",children:"计算机网络"})]}),(0,o.jsx)("main",{children:(0,o.jsx)(r.j3,{})})]})},{}),children:[{path:"/",element:(0,o.jsx)(()=>(0,o.jsx)(j,{children:(0,o.jsx)(a.OL,{to:"/english",children:"英语"})}),{})},{path:"/english",element:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(()=>(0,o.jsx)(j,{children:(0,o.jsx)(a.OL,{to:"/english/one",children:"词汇语法"})}),{})})},{path:"/english/one",element:(0,o.jsx)(s.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(()=>{let{state:e,dispatch:l}=(0,O.G4)({dataList:b(I),isRead:!1}),t=e.dataList,i=e.isRead;return(0,o.jsxs)(y,{children:[(0,o.jsx)(v,{items:[{onClick:()=>{l({isRead:!i})},children:i?"答题模式":"背题模式"},{onClick:()=>{l({dataList:b(I)})},children:"刷新顺序"}]}),t.map((e,l)=>(0,o.jsx)(w,{translate:e.translate,isRead:i,topic:e.topic,options:b(e.options||[]),sort:l+1},e.id))]})},{})})}]}],z=(0,a.cP)($,{basename:"/"}),S=document.getElementById("root");S&&i.createRoot(S).render((0,o.jsx)(()=>(0,o.jsx)(r.pG,{router:z}),{}))}},l={};function t(o){var i=l[o];if(void 0!==i)return i.exports;var a=l[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},(()=>{var e,l=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,i){if(1&i&&(o=this(o)),8&i||"object"==typeof o&&o&&(4&i&&o.__esModule||16&i&&"function"==typeof o.then))return o;var a=Object.create(null);t.r(a);var r={};e=e||[null,l({}),l([]),l(l)];for(var s=2&i&&o;"object"==typeof s&&!~e.indexOf(s);s=l(s))Object.getOwnPropertyNames(s).forEach(e=>{r[e]=()=>o[e]});return r.default=()=>o,t.d(a,r),a}})(),t.d=(e,l)=>{for(var o in l)t.o(l,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:l[o]})},t.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})(),t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];t.O=(l,o,i,a)=>{if(o){a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[o,i,a];return}for(var s=1/0,r=0;r<e.length;r++){for(var[o,i,a]=e[r],_=!0,n=0;n<o.length;n++)(!1&a||s>=a)&&Object.keys(t.O).every(e=>t.O[e](o[n]))?o.splice(n--,1):(_=!1,a<s&&(s=a));if(_){e.splice(r--,1);var d=i();void 0!==d&&(l=d)}}return l}})(),t.rv=()=>"1.3.12",(()=>{var e={980:0};t.O.j=l=>0===e[l];var l=(l,o)=>{var i,a,[r,s,_]=o,n=0;if(r.some(l=>0!==e[l])){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(_)var d=_(t)}for(l&&l(o);n<r.length;n++)a=r[n],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self.webpackChunkwebsite=self.webpackChunkwebsite||[];o.forEach(l.bind(null,0)),o.push=l.bind(null,o.push.bind(o))})(),t.ruid="bundler=rspack@1.3.12";var o=t.O(void 0,["361","118","216"],function(){return t(9787)});o=t.O(o)})();