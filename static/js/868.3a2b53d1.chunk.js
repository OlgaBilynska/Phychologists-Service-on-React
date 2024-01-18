"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[868],{5561:function(n,e,i){i(2791);e.Z=i.p+"static/media/sprite.a32665a117505c6302e94fb9026f8390.svg"},3535:function(n,e,i){i.d(e,{Z:function(){return a}});var t,r=i(168),o=i(2683).ZP.button(t||(t=(0,r.Z)(["\n  border-radius: 30px;\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  font-size: ",";\n  font-weight: 500;\n  display: ",";\n  padding: ",";\n  width: ",";\n  letter-spacing: -0.16px;\n  line-height: 1.25;\n\n  &:hover {\n    background-color: #fbc75e;\n  }\n"])),(function(n){return n.backgroundcolor||"var(--color-accent)"}),(function(n){return n.color||"var(--color-white)"}),(function(n){return n.border||"transparent"}),(function(n){return n.fontSize||"20px"}),(function(n){return n.display||"block"}),(function(n){return n.padding||"18px 50px"}),(function(n){return n.width})),l=i(184),a=function(n){var e=n.children,i=n.color,t=n.backgroundcolor,r=n.display,a=n.padding,c=n.fontSize,d=n.border,s=n.type,p=n.width;return(0,l.jsx)(o,{color:i,backgroundcolor:t,display:r,padding:a,fontSize:c,border:d,type:s,width:p,children:e})}},9321:function(n,e,i){i.d(e,{Z:function(){return t.Z}});var t=i(3535)},3730:function(n,e,i){i.d(e,{X:function(){return s}});var t=i(5705),r=i(8007),o=i(9321),l=i(6645),a=i(7629),c=i(5561),d=i(184),s=function(n){var e=n.name;return(0,d.jsx)(t.Bc,{name:e,render:function(n){return(0,d.jsx)(l.y,{children:n})}})};e.Z=function(){var n=r.Ry().shape({email:r.Z_().email().required("Email is a required field"),password:r.Z_().min(6).max(20).required("Password is a required field")});return(0,d.jsxs)(l.n5,{children:[(0,d.jsx)(l.Ex,{children:"Log In"}),(0,d.jsx)(l.B0,{children:"Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}),(0,d.jsx)(t.J9,{initialValues:{email:"",password:""},onSubmit:function(n,e){(0,e.resetForm)()},validationSchema:n,children:(0,d.jsxs)(t.l0,{autoComplete:"off",children:[(0,d.jsxs)(l.GN,{children:[(0,d.jsxs)("label",{children:[(0,d.jsx)(l.II,{type:"email",name:"email",placeholder:"Email"}),(0,d.jsx)(s,{name:"email"})]}),(0,d.jsxs)(l.SP,{children:[(0,d.jsx)(l.II,{type:"password",name:"password",placeholder:"Password"}),(0,d.jsx)(a.tE,{children:(0,d.jsx)("use",{href:"".concat(c.Z,"#icon-eye-off")})})]}),(0,d.jsx)(s,{name:"password"})]}),(0,d.jsx)(o.Z,{type:"submit",width:"100%",children:"Log In"})]})})]})}},6645:function(n,e,i){i.d(e,{B0:function(){return h},Ex:function(){return x},GN:function(){return Z},II:function(){return m},SP:function(){return v},n5:function(){return f},y:function(){return g}});var t,r,o,l,a,c,d,s=i(168),p=i(5705),u=i(2683),x=u.ZP.h1(t||(t=(0,s.Z)(["\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: -0.8px;\n"]))),h=u.ZP.p(r||(r=(0,s.Z)(["\n  color: rgba(25, 26, 21, 0.5);\n  font-size: 16px;\n  line-height: 1.25;\n"]))),f=u.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  max-width: 438px;\n"]))),g=u.ZP.p(l||(l=(0,s.Z)(["\n  color: var(--color-accent);\n  margin-top: 6px;\n"]))),m=(0,u.ZP)(p.gN)(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 52px;\n  border: 1px solid #191a151a;\n  border-radius: 12px;\n  padding: 16px 18px;\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    color: var(--color-text);\n  }\n"]))),Z=u.ZP.div(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n\n  margin-bottom: 40px;\n"]))),v=u.ZP.label(d||(d=(0,s.Z)(["\n  position: relative;\n"])))},8256:function(n,e,i){i.d(e,{Z:function(){return Z}});var t,r,o,l,a=i(2791),c=i(4164),d=function(n){var e=n.children,i=document.getElementById("modal-root");return i?(0,c.createPortal)(e,i):(console.error("Modal root isn't found"),null)},s=i(5561),p=i(168),u=i(2683),x=u.ZP.div(t||(t=(0,p.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: #191a1599;\n"]))),h=u.ZP.div(r||(r=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 64px;\n\n  min-width: 566px;\n  border-radius: 30px;\n\n  background-color: var(--color-white);\n"]))),f=u.ZP.div(o||(o=(0,p.Z)(["\n  margin: 0 auto;\n"]))),g=u.ZP.svg(l||(l=(0,p.Z)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  stroke: var(--color-text);\n"]))),m=i(184),Z=function(n){var e=n.children,i=n.onClick,t=function(n){"Escape"===n.code&&i()};return(0,a.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}})),(0,m.jsx)(d,{children:(0,m.jsx)(x,{onClick:function(n){n.currentTarget===n.target&&i()},children:(0,m.jsxs)(h,{children:[(0,m.jsx)(g,{onClick:function(){i()},children:(0,m.jsx)("use",{href:"".concat(s.Z,"#icon-x")})}),(0,m.jsx)(f,{children:e})]})})})}},3445:function(n,e,i){i.d(e,{$E:function(){return F},Ac:function(){return V},Dl:function(){return T},E3:function(){return E},MJ:function(){return W},Ob:function(){return B},RQ:function(){return J},SS:function(){return q},SV:function(){return N},UK:function(){return I},Uh:function(){return _},Wb:function(){return Y},XI:function(){return A},Xd:function(){return M},Xq:function(){return R},bZ:function(){return S},gf:function(){return L},mN:function(){return U},ni:function(){return H},vs:function(){return X},xO:function(){return C}});var t,r,o,l,a,c,d,s,p,u,x,h,f,g,m,Z,v,b,w,j,y,P,k=i(168),z=i(2683),I=z.ZP.div(t||(t=(0,k.Z)(["\n  display: flex;\n  gap: 24px;\n\n  padding: 24px;\n\n  width: 100%;\n  border-radius: 24px;\n  background-color: #fbfbfb;\n"]))),S=z.ZP.img(r||(r=(0,k.Z)(["\n  width: 96px;\n  height: 96px;\n  border-radius: 15px;\n"]))),E=z.ZP.div(o||(o=(0,k.Z)(["\n  position: relative;\n\n  width: 120px;\n  height: 120px;\n  padding: 12px;\n  border: 2px solid #fc832c33;\n  border-radius: 15px;\n"]))),q=z.ZP.div(l||(l=(0,k.Z)(["\n  position: absolute;\n  top: 9px;\n  right: 10px;\n\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #38cd3e;\n\n  border: 2px solid #fbfbfb;\n"]))),_=(z.ZP.svg(a||(a=(0,k.Z)(["\n  position: absolute;\n  top: 9px;\n  right: 14px;\n\n  width: 14px;\n  height: 14px;\n  stroke: #fbfbfb;\n  fill: #38cd3e;\n"]))),z.ZP.svg(c||(c=(0,k.Z)(["\n  width: 16px;\n  height: 16px;\n  fill: #ffc531;\n"])))),C=z.ZP.svg(d||(d=(0,k.Z)(["\n  width: 26px;\n  height: 26px;\n  stroke: var(--color-text);\n  fill: var(--color-white);\n  margin-left: 28px;\n"]))),X=z.ZP.div(s||(s=(0,k.Z)([""]))),N=z.ZP.div(p||(p=(0,k.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),R=z.ZP.p(u||(u=(0,k.Z)(["\n  color: #8a8a89;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),B=z.ZP.p(x||(x=(0,k.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1;\n"]))),F=z.ZP.div(h||(h=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),U=z.ZP.p(f||(f=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  padding-right: 16px;\n\n  ::after {\n    content: '';\n    border-right: 1px solid red;\n  }\n"]))),L=z.ZP.div(g||(g=(0,k.Z)(["\n  display: flex;\n  /* align-items: flex-start; */\n  gap: 8px;\n"]))),M=z.ZP.p(m||(m=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  padding-left: 16px;\n"]))),T=z.ZP.span(Z||(Z=(0,k.Z)(["\n  color: #38cd3e;\n  font-size: 16;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),V=z.ZP.div(v||(v=(0,k.Z)(["\n  display: flex;\n"]))),W=z.ZP.ul(b||(b=(0,k.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-bottom: 24px;\n"]))),Y=z.ZP.li(w||(w=(0,k.Z)(["\n  padding: 8px 16px;\n  background-color: #f3f3f3;\n  border-radius: 24px;\n  color: #8a8a89;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),H=z.ZP.span(j||(j=(0,k.Z)(["\n  color: var(--color-text);\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 24px;\n"]))),J=z.ZP.p(y||(y=(0,k.Z)(["\n  color: rgba(25, 26, 21, 0.5);\n  font-size: 16px;\n  line-height: 1.25;\n\n  margin-bottom: 14px;\n"]))),A=z.ZP.p(P||(P=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  cursor: pointer;\n"])))},7629:function(n,e,i){i.d(e,{TH:function(){return d},k8:function(){return s},n5:function(){return p},tE:function(){return u}});var t,r,o,l,a=i(168),c=i(2683),d=c.ZP.h1(t||(t=(0,a.Z)(["\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 1.2;\n  letter-spacing: -0.8px;\n"]))),s=c.ZP.p(r||(r=(0,a.Z)(["\n  color: rgba(25, 26, 21, 0.5);\n  font-size: 16px;\n  line-height: 1.25;\n"]))),p=c.ZP.div(o||(o=(0,a.Z)(["\n  display: flex;\n  gap: 40px;\n  flex-direction: column;\n  max-width: 438px;\n"]))),u=c.ZP.svg(l||(l=(0,a.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 16.83px;\n  width: 20px;\n  height: 20px;\n  stroke: var(--color-text);\n  fill: var(--color-white);\n"])))},3868:function(n,e,i){i.d(e,{Z:function(){return K}});var t,r,o,l,a,c,d,s,p,u,x,h,f,g,m,Z,v,b=i(9439),w=i(5984),j=i(2791),y=i(9321),P=i(5561),k=i(3445),z=i(168),I=i(2683),S=I.ZP.div(t||(t=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),E=I.ZP.div(r||(r=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),q=I.ZP.div(o||(o=(0,z.Z)(["\n  position: relative;\n  width: 44px;\n  height: 44px;\n  background-color: rgba(252, 131, 44, 0.2);\n  color: var(--color-accent);\n  border-radius: 50%;\n"]))),_=I.ZP.p(l||(l=(0,z.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),C=I.ZP.div(a||(a=(0,z.Z)(["\n  display: flex;\n  gap: 12px;\n"]))),X=i(184),N=function(n){var e=n.review,i=e.comment,t=e.rating,r=e.reviewer,o=r.split("")[0],l=t.toFixed(1);return(0,X.jsxs)(E,{children:[(0,X.jsxs)(C,{children:[(0,X.jsx)(q,{children:(0,X.jsx)(_,{children:o})}),(0,X.jsxs)(S,{children:[(0,X.jsx)("p",{children:r}),(0,X.jsxs)(k.gf,{children:[(0,X.jsx)(k.Uh,{children:(0,X.jsx)("use",{href:"".concat(P.Z,"#icon-star")})}),(0,X.jsx)("p",{children:l})]})]})]}),(0,X.jsx)(k.RQ,{children:i})]})},R=I.ZP.ul(c||(c=(0,z.Z)(["\n  margin-top: 48px;\n  margin-bottom: 40px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n"]))),B=i(8256),F=i(5705),U=i(8007),L=i(6645),M=I.ZP.div(d||(d=(0,z.Z)(["\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),T=I.ZP.div(s||(s=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),V=(I.ZP.svg(p||(p=(0,z.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 16.83px;\n  width: 20px;\n  height: 20px;\n  stroke: var(--color-text);\n  fill: var(--color-white);\n"]))),I.ZP.div(u||(u=(0,z.Z)(["\n  display: flex;\n  gap: 8px;\n  :nth-child(1) {\n    width: 50%;\n  }\n  :nth-child(2) {\n    width: 50%;\n  }\n"])))),W=I.ZP.div(x||(x=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),Y=(0,I.ZP)(F.l0)(h||(h=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),H=I.ZP.div(f||(f=(0,z.Z)(["\n  display: flex;\n  gap: 14px;\n"]))),J=I.ZP.img(g||(g=(0,z.Z)(["\n  width: 44px;\n  height: 44px;\n  border-radius: 15px;\n"]))),A=I.ZP.div(m||(m=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),G=I.ZP.p(Z||(Z=(0,z.Z)(["\n  color: #8a8a89;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.33;\n"]))),O=I.ZP.p(v||(v=(0,z.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),Q=i(3730),D=function(n){var e=n.psychologist,i=e.name,t=e.avatar_url,r=U.Ry().shape({name:U.Z_().required("Name is a required field."),phone:U.Rx().min(6).max(16).required("Phone number is a required field"),time:U.hT().required("Time is a required field"),email:U.Z_().email().required("Email is a required field"),comment:U.Z_().required("Write your comment here.")});return(0,X.jsxs)(M,{children:[(0,X.jsxs)(T,{children:[(0,X.jsx)(L.Ex,{children:"Make an appointment with a psychologists"}),(0,X.jsx)(L.B0,{children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."})]}),(0,X.jsxs)(H,{children:[(0,X.jsx)(J,{alt:"psychologist",src:t}),(0,X.jsxs)(A,{children:[(0,X.jsx)(G,{children:"Your psychologist"}),(0,X.jsx)(O,{children:i})]})]}),(0,X.jsx)(F.J9,{initialValues:{name:"",phone:"",time:"",email:"",comment:""},onSubmit:function(n,e){(0,e.resetForm)()},validationSchema:r,children:(0,X.jsxs)(Y,{children:[(0,X.jsxs)(W,{children:[(0,X.jsx)(L.II,{type:"text",name:"name",placeholder:"Name"}),(0,X.jsx)(Q.X,{name:"name"}),(0,X.jsxs)(V,{children:[(0,X.jsx)(L.II,{type:"phone",name:"phone",placeholder:"+380"}),(0,X.jsx)(Q.X,{name:"phone"}),(0,X.jsx)(L.II,{type:"time",name:"time",views:["hours","minutes"],format:"HH:mm",ampm:!1,placeholder:"00:00"}),(0,X.jsx)(Q.X,{name:"time"})]}),(0,X.jsx)(L.II,{type:"email",name:"email",placeholder:"Email"}),(0,X.jsx)(Q.X,{name:"email"}),(0,X.jsx)(L.II,{type:"text",name:"comment",placeholder:"Comment"}),(0,X.jsx)(Q.X,{name:"comment"})]}),(0,X.jsx)(y.Z,{type:"submit",width:"100%",children:"Send"})]})})]})},K=function(n){var e=n.psychologist,i=e.reviews,t=(0,j.useState)(!1),r=(0,b.Z)(t,2),o=r[0],l=r[1],a=function(){console.log("toggle"),l((function(n){return!n}))};return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(R,{children:i.map((function(n){return(0,X.jsx)("li",{children:(0,X.jsx)(N,{review:n},(0,w.x0)())})}))}),(0,X.jsx)("div",{onClick:function(){return a()},children:(0,X.jsx)(y.Z,{fontSize:16,padding:"14px 32px",children:"Make an appointment"})}),o&&(0,X.jsx)(B.Z,{onClick:a,children:(0,X.jsx)(D,{psychologist:e})})]})}},5984:function(n,e,i){i.d(e,{x0:function(){return t}});var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=868.3a2b53d1.chunk.js.map