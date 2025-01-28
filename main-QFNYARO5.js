import{C as oe,E as _,F as ne,Wa as v,Xa as re,a as S,b as H,c as q,d as K,e as Z,h as G,i as C,j as X,m as Y,r as $,s as J,t as Q,v as ee,w as te}from"./chunk-42WUMDNV.js";import{$b as P,Bb as s,Cb as l,D as I,Db as u,Ha as R,Kb as L,W as A,Wa as x,X as F,Xa as y,Xb as p,Ya as T,Z as d,_a as N,_b as w,ab as B,ac as O,ca as m,cb as U,cc as h,d as E,da as j,db as z,ha as g,ka as D,kc as W,zc as V}from"./chunk-NV7TTKCS.js";var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["app-footer"]],standalone:!0,features:[h],decls:3,vars:0,template:function(o,i){o&1&&(s(0,"footer")(1,"p"),p(2,"\xA9 2024. Axel Balam Mancera Miramontes. Todos los derechos reservados."),l()())},styles:["footer[_ngcontent-%COMP%]{padding:20px;text-align:center;font-size:smaller;color:#ebebeb}"]});let n=e;return n})();var M=class{login(e){throw new Error("Method 'login' must be implemented.")}getAuthSession(){throw new Error("Method 'getAuthSession' must be implemented.")}logout(){throw new Error("Method 'logout' must be implemented.")}};var b=(()=>{let e=class e extends M{constructor(t,o){super(),this.http=t,this._snackBar=o,this.apiUrl=`${_.servers.locale.apiUrl}/auth`,this.commonStrings=ne.common,this.dummySessionData={id:"static-id-123",username:"staticUser",token:"staticToken123456789"}}login(t){let o=new S({"x-platform":_.request.headers.platform});try{return this.http.post(`${this.apiUrl}/login`,t,{headers:o}).pipe(A(i=>(localStorage.setItem("authToken",i.token),new S({Authorization:`Bearer ${i.token}`}),!0)),I(i=>{let a=i.error?.error[0]?.message||this.commonStrings.error.errorType.request;throw console.error(`${this.commonStrings.error.errorType.request} ${a}`),new Error(a)}))}catch(i){throw i}}getAuthSession(){return E(this,null,function*(){return this.dummySessionData})}isLoggedIn(){return!!localStorage.getItem("authToken")}};e.\u0275fac=function(o){return new(o||e)(m(H),m(v))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ae=(()=>{let e=class e{constructor(t){this.authService=t}login(t){return this.authService.login(t)}};e.\u0275fac=function(o){return new(o||e)(m(b))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var se=(()=>{let e=class e{constructor(t,o,i,a){this.authService=t,this.loginUseCase=o,this.router=i,this._snackBar=a,this.userCredentials={email:"",password:""}}login(){this.loginUseCase.login(this.userCredentials).subscribe({next:t=>{console.log("Inicio de sesi\xF3n exitoso"),this.router.navigate(["/appview"])},error:t=>{console.error("Error al iniciar sesi\xF3n:",t)}})}openErrorSnackBar(t){let o=this._snackBar.open(t,"Entendido",{duration:5e3});o.onAction().subscribe(()=>{o.dismiss()})}};e.\u0275fac=function(o){return new(o||e)(y(b),y(ae),y(C),y(v))},e.\u0275cmp=g({type:e,selectors:[["app-login"]],standalone:!0,features:[h],decls:26,vars:2,consts:[[1,"main-container"],[1,"form"],[1,"form-decorator"],["src","../../../assets/logo_CFE.png","alt","logo CFE"],[1,"login-form"],[1,"form-item"],["for","txtUserEmail"],["id","txtUserEmail","name","txtUserEmail","type","email",3,"ngModelChange","ngModel"],["for","txtUserPassword"],["id","txtUserPassword","name","txtUserPassword","type","password",3,"ngModelChange","ngModel"],["id","txt-login-error",1,"error"],["id","btnLoginSubmit","type","button",3,"click"]],template:function(o,i){o&1&&(s(0,"div",0)(1,"main")(2,"div",1)(3,"div",2),u(4,"img",3),s(5,"p"),p(6,"Sistema de medici\xF3n de variables f\xEDsicas"),l()(),s(7,"div",4)(8,"form")(9,"div",5)(10,"h2"),p(11,"Inicia sesi\xF3n"),l()(),s(12,"div",5)(13,"label",6),p(14,"Direcci\xF3n de correo electr\xF3nico"),l(),s(15,"input",7),O("ngModelChange",function(c){return P(i.userCredentials.email,c)||(i.userCredentials.email=c),c}),l()(),s(16,"div",5)(17,"label",8),p(18,"Contrase\xF1a"),l(),s(19,"input",9),O("ngModelChange",function(c){return P(i.userCredentials.password,c)||(i.userCredentials.password=c),c}),l()(),s(20,"div",5),u(21,"p",10),l(),s(22,"div",5)(23,"button",11),L("click",function(){return i.login()}),p(24,"Iniciar sesi\xF3n"),l()()()()()(),u(25,"app-footer"),l()),o&2&&(x(15),w("ngModel",i.userCredentials.email),x(4),w("ngModel",i.userCredentials.password))},dependencies:[ie,oe,te,Y,$,J,ee,Q],styles:['.main-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;background-repeat:no-repeat;background-size:cover;object-fit:contain;background-image:url("./media/login_background-KDBKLT5I.png")}main[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:center}.form[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 auto;min-width:600px;max-height:90%}.form[_ngcontent-%COMP%]   .form-decorator[_ngcontent-%COMP%]{max-width:30rem;max-height:30rem;flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;padding:75px;background-color:#008e5a;text-align:center;color:#ebebeb}.form-decorator[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0}.form-decorator[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:100;line-height:3.5rem;color:#ebebeb}img[_ngcontent-%COMP%]{height:100px}.form-decorator[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{width:100%;max-width:500px;height:auto;overflow:hidden;border:1px solid #000}.image-container[_ngcontent-%COMP%]   .responsive-image[_ngcontent-%COMP%]{width:100%;height:auto;display:block}.login-form[_ngcontent-%COMP%]{padding:75px 50px;min-width:300px;color:#ebebeb;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.login-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]:first-child{margin-top:0}.login-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.login-form[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]{margin:20px 0}.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 45px;text-align:center;font-size:2em;font-weight:100;line-height:.8em;color:#ebebeb}.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:.75rem}.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;height:2.75em;margin:5px 0;padding:0 15px;background-color:#f6f6df1a;color:#ebebeb;opacity:1;font-size:.9em;letter-spacing:.1em;border-radius:50px;border-style:none;border-width:100}.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=button]):not([type=submit]):focus{background-color:#ebebeb;color:#008e5a;opacity:1;outline:1px solid #008e5a}.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;box-sizing:border-box;width:100%;height:2.75em;margin:5px 0;padding:0 15px;font-family:Open Sans,sans-serif;font-size:.9em;color:#ebebeb;letter-spacing:.1em;border-radius:50px;border-style:none;border-width:100;background-color:#008e5a}.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#006842;outline:none;cursor:pointer}.login-form[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:25px auto;border-top:1px solid #ebebeb;border-style:ridge;border-color:#ebebeb;border-radius:100%;opacity:.2;width:100%}.to-signup[_ngcontent-%COMP%]{font-size:.8rem;text-align:center}@media screen and (max-width: 960px){.form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type{display:none}}']});let n=e;return n})();var le=(()=>{let e=class e{constructor(t,o){this.authService=t,this.router=o}canActivate(){return this.authService.isLoggedIn()?!0:(this.router.navigate(["/login"]),!1)}};e.\u0275fac=function(o){return new(o||e)(m(b),m(C))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var ce=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:se},{path:"appview",loadChildren:()=>import("./chunk-FQO2GAOO.js").then(n=>n.AppviewLayoutModule),canActivate:[le]},{path:"**",component:re}];var fe="@",be=(()=>{let e=class e{constructor(t,o,i,a,c){this.doc=t,this.delegate=o,this.zone=i,this.animationType=a,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=j(N,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-QKWRMETU.js").then(o=>o)).catch(o=>{throw new F(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,o){let i=this.delegate.createRenderer(t,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new k(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let ge=c.createRenderer(t,o);a.use(ge),this.scheduler?.notify(9)}).catch(c=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){T()},e.\u0275prov=d({token:e,factory:e.\u0275fac});let n=e;return n})(),k=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,o){this.delegate.insertBefore(e,r,t,o)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,o){this.delegate.setAttribute(e,r,t,o)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,o){this.delegate.setStyle(e,r,t,o)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(o=>o.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(o=>o.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(fe)}};function de(n="animations"){return U("NgAsyncAnimations"),D([{provide:B,useFactory:(e,r,t)=>new be(e,r,t,n),deps:[V,K,z]},{provide:R,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var me={providers:[W({eventCoalescing:!0}),X(ce),q(),de()]};var pe=(()=>{let e=class e{constructor(){this.title="medicion-variables-fisicas"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"main-container"]],template:function(o,i){o&1&&(s(0,"div",0),u(1,"router-outlet"),l())},dependencies:[G]});let n=e;return n})();Z(pe,me).catch(n=>console.error(n));
