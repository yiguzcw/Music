webpackJsonp([5],{112:function(t,e,i){"use strict";var s=i(23);const r={id:"id",img:"img",name:"name",userId:"userId"};e.a=new class{constructor(){}formatLyric(t){let e=/(\[\d{2}:\d{2}.\d*\])/g,i=/(\[.*])/g,s=/\d{2}/g,r=[],n=[],o=(t,r=!1)=>o=>{let a=o.match(e),l=o.replace(i,"");a&&a.map(e=>{let i=e.match(s).map(t=>parseInt(t)),o=6e4*i[0]+1e3*i[1]+i[2],a={time:o,lyric:l};if(r){let t=n.filter(t=>t.time==o);t.length&&(a.tlyric=t[0].lyric)}t.push(a)})};return t&&t.tlyric&&t.tlyric.lyric&&t.tlyric.lyric.split("\n").map(o(n)),t&&t.lrc&&t.lrc.lyric&&t.lrc.lyric.split("\n").map(o(r,!0)),r=r.sort((t,e)=>t.time-e.time)}formatSongSheet(t,e=r){try{if(Array.isArray(t))return t.map(t=>i(t));if("object"==typeof t)return i(t)}catch(t){return[]}function i(t){let i={to:`/ssd/${t.id}`,id:t[e.id||r.id],img:t[e.img||r.img]+"?param=250y250",name:t[e.name||r.name],userId:t[e.userId||r.userId]};for(const s in e)e.hasOwnProperty(s)&&(i[s]=t[e[s]]);return i}}formatSongSheetDetails(t){let e={details:{},tracks:[]};try{let i=t.playlist;e.tracks=i.tracks.map(t=>Object.assign({},t,{like:!1,mvTo:`/mv/${t.mv}`,singer:(t.ar&&t.ar.map(t=>t.name)||[]).join(" / "),dtStr:s.b.DateFormat(t.dt,"mm:ss")})),delete i.tracks,delete i.trackIds,e.details=i}catch(t){console.error(t)}return e}}},133:function(t,e,i){"use strict";var s=i(294),r=i(295),n=i(593),o=i(637),a=i(638),l=i(639),c=i(643),h=i(249),u=(i.n(h),i(644));e.a=new class{constructor(){this.hydrate=Object(h.create)({}),this.windowsStore=new s.a,this.controller=new u.a(this),this.playStore=new l.a(this.controller),this.mvStore=new c.a(this.controller),this.basicDataStore=new r.a,this.UserContextStore=new n.a(this.controller),this.songSheetStore=new o.a,this.musicStore=new a.a,this.ready(),this.init()}ready(){window.globalMusic={defaultImg:"/assets/img/default_album.jpg"},window.EnumNotice={LoginOut:0,LoginSuccess:1,MusicPlay:2,MVPlay:3},console.log("-----------ready Store------------",this)}init(){this.hydrate("playStore",this.playStore).then(()=>{this.playStore.playParam.playState=!1,this.playStore.playParam.showList=!1}),this.basicDataStore.getBanner(),this.songSheetStore.getPlaylist(),this.UserContextStore.onRefresh()}}},23:function(t,e,i){"use strict";var s=i(296),r=i(591),n=i(592);const o=new s.a;e.c=o;const a=new r.a;e.a=a;const l=new n.a;e.b=l},275:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(276),r=(i.n(s),i(277)),n=(i.n(r),i(278)),o=(i.n(n),i(279)),a=(i.n(o),i(4)),l=(i.n(a),i(40)),c=(i.n(l),i(261)),h=i(133),u=i(645);Object(l.render)(a.createElement(c.a,{UserContextStore:h.a.UserContextStore,basicDataStore:h.a.basicDataStore,songSheetStore:h.a.songSheetStore,musicStore:h.a.musicStore,playStore:h.a.playStore,mvStore:h.a.mvStore,windowsStore:h.a.windowsStore},a.createElement(u.a,null)),document.getElementById("root"))},276:function(t,e){},277:function(t,e){},278:function(t,e){},279:function(t,e){},294:function(t,e,i){"use strict";var s=i(17),r=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};class n{constructor(){this.isMini=!1,this.electron=null,this.size={Content:null,Minimum:null},this.isMaximized=!1,this.win=null;try{window.require&&(this.electron=window.require("electron"),this.win=this.electron.remote.app.win)}catch(t){console.log("error",t)}}onMini(t){if(void 0===t?this.isMini=!this.isMini:this.isMini!=t&&(this.isMini=t),this.electron){const t=this.win;t.hide(),this.isMini?(this.getSize(),t.setMinimumSize(1,1),this.setSize(400,60),t.setResizable(!1),t.setAlwaysOnTop(!0)):(t.setMinimumSize(1150,670),this.setSize(this.size[0],this.size[1]),t.setResizable(!0),t.setAlwaysOnTop(!1)),setTimeout(()=>{t.center(),t.show()},50)}}setSize(t,e,i=!0){this.electron&&this.win.setSize(t,e,i)}getSize(){this.electron&&(this.size=this.win.getSize())}openExternal(t){this.electron?this.electron.shell.openExternal(t):window.open(t)}emptyCookie(){if(this.electron){const{cookies:t}=this.electron.remote.session.defaultSession,{origin:e}=window.location;t.get({url:e},(i,s)=>{i&&console.error(i),s&&s.map(i=>{t.remove(e,i.name,t=>{console.log(`remove cookies  ${i.name}`)})})})}}onMinus(){this.electron&&this.win.minimize()}onAlt(){if(this.electron){const t=this.win;this.isMaximized?(t.unmaximize(),this.isMaximized=!1):(t.maximize(),this.isMaximized=!0)}}onClose(){this.electron&&this.electron.remote.app.exit()}}e.a=n,r([s.observable],n.prototype,"isMini",void 0)},295:function(t,e,i){"use strict";var s=i(17),r=i(23),n=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},o=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};class a{constructor(){this.banner=r.a.localGet("banner")}getBanner(){return o(this,void 0,void 0,function*(){return this.banner||(this.banner=yield r.c.get("banner").map(t=>t.banners).toPromise(),r.a.localSet("banner",this.banner)),this.banner})}}e.a=a,n([s.observable],a.prototype,"banner",void 0)},296:function(t,e,i){"use strict";var s=i(134),r=i.n(s);e.a=class{constructor(){this.address="/","3002"==window.location.port&&(this.address="/api/")}post(t){return r.a.Observable.ajax.post(`${this.address}${t}`,{credentials:"include"}).map(this.map)}get(t){return r.a.Observable.ajax.get(`${this.address}${t}`,{credentials:"include"}).map(this.map)}map(t){if(200==t.status)return t.response;throw t}}},591:function(t,e,i){"use strict";e.a=class{constructor(){this.localStorage=window.localStorage,this.sessionStorage=window.sessionStorage,this.cacheTime=JSON.parse(this.localStorage.getItem("cacheTime")||"0"),this.testing()}testing(){let t=(new Date).getTime();try{if(t-this.cacheTime<6e5)return;t-JSON.parse(this.localStorage.getItem("cacheTime")||"0")>6e5&&(this.localRemove(null,!0),this.sessionRemove(null,!0),console.log("cacheTime"),this.cacheTime=t,this.localSet("cacheTime",t))}catch(e){this.localRemove(null,!0),this.sessionRemove(null,!0),console.log("cacheTime",e),this.cacheTime=t,this.localSet("cacheTime",t)}}localGet(t,e=null){this.testing();try{const i=this.localStorage.getItem(t);return null==i?e:JSON.parse(i)}catch(t){return e}}localSet(t,e){try{if(Array.isArray(e)&&e.length<1)return;if(0==e.length)return;this.localStorage.setItem(t,JSON.stringify(e))}catch(t){console.error(t)}}localRemove(t=null,e=!1){if(t)this.localStorage.removeItem(t);else if(e){let t=JSON.parse(this.localStorage.getItem("__UserID")),e=JSON.parse(this.localStorage.getItem("__audio_volume"));this.localStorage.clear(),this.localStorage.setItem("__UserID",JSON.stringify(t)),this.localStorage.setItem("__audio_volume",JSON.stringify(e))}}sessionGet(t,e=null){try{const i=this.sessionStorage.getItem(t);return i&&JSON.parse(i)||e}catch(t){return e}}sessionSet(t,e){try{this.sessionStorage.setItem(t,JSON.stringify(e))}catch(t){console.error(t)}}sessionRemove(t=null,e=!1){t?this.sessionStorage.removeItem(t):e&&this.sessionStorage.clear()}}},592:function(t,e,i){"use strict";e.a=class{constructor(){}DateFormat(t,e){try{if(!t)return t;"number"==typeof t&&(t=new Date(t));var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var s in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),i)new RegExp("("+s+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));return e}catch(e){return t}}}},593:function(t,e,i){"use strict";var s=i(17),r=i(237),n=i.n(r),o=i(23),a=i(112),l=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},c=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};class h{constructor(t){this.controller=t,this.UserID=o.a.localGet("__UserID"),this.UserContext={},this.userPlaylist=[],this.login=!1,this.Loading=!0}onLogin(t="18611752863",e="leng5201314"){return c(this,void 0,void 0,function*(){let i=yield o.c.get(`login/cellphone?phone=${t}&password=${e}&timestamp=${(new Date).getTime()}`).toPromise();200==i.code?(this.UserContext=i,this.login=!0,this.UserID=i.profile.userId,o.a.localSet("__UserID",this.UserID),this.controller.subject.next({type:EnumNotice.LoginSuccess,data:!0})):(n.a.error({message:"登陆错误",description:i.msg}),this.controller.subject.next({type:EnumNotice.LoginSuccess,data:!1}))})}onLoginOut(){this.login=!1,this.UserContext={},this.userPlaylist=[],this.controller.subject.next({type:EnumNotice.LoginOut}),console.log("退出登录")}onRefresh(){return c(this,void 0,void 0,function*(){let t=yield o.c.get(`login/refresh?timestamp=${(new Date).getTime()}`).toPromise();200==t.code||400==t.code?this.UserID&&(this.login=!0,this.UserContext=yield this.getDetail(this.UserID),this.controller.subject.next({type:EnumNotice.LoginSuccess,data:!0})):this.controller.subject.next({type:EnumNotice.LoginSuccess,data:!1})})}getDetail(t){return c(this,void 0,void 0,function*(){return yield o.c.get(`user/detail?uid=${t}`).toPromise()})}getSubcount(){return c(this,void 0,void 0,function*(){yield o.c.get("user/subcount").toPromise()})}getUserPlaylist(t=this.UserID){return c(this,void 0,void 0,function*(){this.userPlaylist=yield o.c.get(`user/playlist?uid=${t}`).map(t=>t.playlist.map(t=>(t.createYourself=t.userId==this.UserID,a.a.formatSongSheet(t,{img:"coverImgUrl",createYourself:"createYourself"})))).toPromise()})}}e.a=h,l([s.observable],h.prototype,"UserContext",void 0),l([s.observable],h.prototype,"userPlaylist",void 0),l([s.observable],h.prototype,"login",void 0),l([s.observable],h.prototype,"Loading",void 0)},637:function(t,e,i){"use strict";var s=i(17),r=i(23),n=i(112),o=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},a=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};class l{constructor(){this.playlist=r.a.localGet("getPlaylist"),this.detailsLoading=!1,this.detailsId="",this.details={},this.detailsList={},this.resource=r.a.localGet("getResource")}getResource(t=!1){return a(this,void 0,void 0,function*(){let e=[];t&&(e=yield r.c.get("recommend/resource").map(t=>n.a.formatSongSheet(t.recommend,{img:"picUrl"})).toPromise());let i=yield r.c.get(`top/playlist?limit=${t?5:9}`).map(t=>n.a.formatSongSheet(t.playlists,{img:"coverImgUrl"})).toPromise();return this.resource=[...e,...i],this.resource})}getPlaylist(){return a(this,void 0,void 0,function*(){return this.playlist||(this.playlist=yield r.c.get("top/playlist?limit=54").map(t=>n.a.formatSongSheet(t.playlists,{img:"coverImgUrl"})).toPromise(),r.a.localSet("getPlaylist",this.playlist)),this.playlist})}getDetails(t){return a(this,void 0,void 0,function*(){return this.detailsLoading=!1,this.detailsId=t,this.detailsList[t]||(this.detailsList[t]=yield r.c.get(`playlist/detail?id=${t}`).map(t=>n.a.formatSongSheetDetails(t)).toPromise()),this.detailsId==t&&(this.details=this.detailsList[t],this.detailsLoading=!0),this.details})}getComment(t=20,e=0){return a(this,void 0,void 0,function*(){return yield r.c.get(`comment/playlist?id=${this.detailsId}&limit=${t}&offset=${e}`).map(t=>(t.comments.map(t=>(t.timeStr=r.b.DateFormat(t.time,"yyyy-MM-dd hh:mm"),t)),t.hotComments.map(t=>(t.timeStr=r.b.DateFormat(t.time,"yyyy-MM-dd hh:mm"),t)),t)).toPromise()})}}e.a=l,o([s.observable],l.prototype,"playlist",void 0),o([s.observable],l.prototype,"detailsLoading",void 0),o([s.observable],l.prototype,"details",void 0),o([s.observable],l.prototype,"resource",void 0)},638:function(t,e,i){"use strict";var s=i(23),r=i(112),n=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};class o{constructor(){this._Music=null,this._Lyric=null}get Music(){return this._Music||(this._Music=s.a.localGet("_Music",{})),this._Music}set Music(t){this._Music=Object.assign({},this._Music,t)}get Lyric(){return this._Lyric||(this._Lyric=s.a.localGet("_Lyric",{})),this._Lyric}set Lyric(t){this._Lyric=Object.assign({},this._Lyric,t)}cache(t){s.a.localSet(t,this["_"+t])}}e.a=class extends o{constructor(){super()}getMusic(t){return n(this,void 0,void 0,function*(){const e=t.toString().split(","),i=e.filter(t=>!this.Music.hasOwnProperty(t));let r={data:[]};i.length&&(r=yield s.c.get("music/url?id="+i.join(",")).toPromise());let n={};return r.data.map(t=>{n[t.id]=t}),this.Music=n,this.Music[e[0]]})}getLyric(t){return n(this,void 0,void 0,function*(){let e={},i={};return this.Lyric.hasOwnProperty(t)||(e=yield s.c.get("lyric?id="+t).toPromise(),i[t]=e,this.Lyric=i),r.a.formatLyric(this.Lyric[t])})}getComment(t,e=20,i=1){return n(this,void 0,void 0,function*(){let r={};return r=yield s.c.get(`/comment/music?id=${t}&limit=${e}&offset=${i}`).toPromise()})}}},639:function(t,e,i){"use strict";var s=i(17),r=i(249),n=(i.n(r),i(23)),o=i(133),a=i(237),l=i.n(a),c=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},h=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};l.a.config({duration:3,top:65});class u{constructor(t){this.controller=t,this.audio=document.createElement("audio"),this.volume=n.a.localGet("__audio_volume",100),this.playParam={playState:!1,pattern:"loop",patternSimpleStyle:"normal",showList:!1,showSimple:!1},this.timeParam={currentPlay:{proportion:0,timeStr:"00:00",time:0},duration:{time:0,timeStr:"00:00"},cacheTime:0},this.playList=[],this.randomIndex=[],this.currentIndex=0,this.current={lyric:{lyricIndex:0,details:{lyric:"纯音乐，请您欣赏"},item:[]},music:{url:""},play:{name:""}},this.url="",this.audio.autoplay=!0,this.addEventListener(),this.setVolume(this.volume)}setVolume(t){this.audio.volume=t/100,n.a.localSet("__audio_volume",t)}setUrl(t){this.url=t,this.url&&this.audio.src!=this.url&&(this.audio.src=this.url,this.playParam.showSimple||(this.playParam.showSimple=!0))}updateShowList(){this.playParam.showList=!this.playParam.showList,o.a.windowsStore.isMini&&(this.playParam.showList?o.a.windowsStore.setSize(400,320):o.a.windowsStore.setSize(400,60))}updatePlayState(t=!0){this.playParam.playState=t,this.playParam.playState?(this.setUrl(this.current.music.url),this.audio.paused&&this.audio.play()):this.audio.paused||this.audio.pause()}updateCurrentTime(t){this.timeParam.duration.time&&(this.audio.currentTime=this.timeParam.duration.time*t)}updatePattern(t){if(this.playParam.pattern!=t){if("loop"!=t&&"random"!=t&&"single"!=t)throw"pattern = loop || random || single";this.playParam.pattern=t}}updatePatternSimpleStyle(t){if(void 0!==t){if(this.playParam.patternSimpleStyle!=t){if("normal"!=t&&"screen"!=t)throw"patternSimpleStyle = normal || screen";this.playParam.patternSimpleStyle=t}}else"normal"==this.playParam.patternSimpleStyle?this.playParam.patternSimpleStyle="screen":this.playParam.patternSimpleStyle="normal"}addEventListener(){this.audio.addEventListener("loadstart",t=>{}),this.audio.addEventListener("durationchange",t=>{}),this.audio.addEventListener("loadedmetadata",t=>{this.timeParam.duration.time=this.audio.duration,this.timeParam.duration.timeStr=n.b.DateFormat(1e3*this.timeParam.duration.time,"mm:ss")}),this.audio.addEventListener("loadeddata",t=>{}),this.audio.addEventListener("progress",t=>{try{this.timeParam.cacheTime=this.audio.buffered.end(this.audio.buffered.length-1)/this.timeParam.duration.time*100}catch(t){}}),this.audio.addEventListener("canplay",t=>{}),this.audio.addEventListener("canplaythrough",t=>{}),this.audio.addEventListener("playing",t=>{}),this.audio.addEventListener("ratechange",t=>{}),this.audio.addEventListener("timeupdate",t=>{if(!this.timeParam.duration.time)return;let e=this.audio.currentTime/this.timeParam.duration.time*100;e>99.4&&(e=99.4);let i=1e3*this.audio.currentTime,s=n.b.DateFormat(new Date(i),"mm:ss");this.timeParam.currentPlay={proportion:e,time:i,timeStr:s},this.lyricsLocation(i)}),this.audio.addEventListener("ended",t=>{this.next(this.playParam.pattern)}),this.audio.addEventListener("stalled",t=>{}),this.audio.addEventListener("error",t=>{}),this.audio.addEventListener("play",t=>{this.updatePlayState(!0)}),this.audio.addEventListener("pause",t=>{this.updatePlayState(!1)})}lyricsLocation(t){let e,i=!1,s=this.current.lyric.item.slice(),r=-1;if(s.length){if(s=s.map((n,o)=>{try{if(n.time){let e=s[o+1];i=t>=n.time&&t<=e.time}}catch(t){i=!0}return i&&(r=o,e=n),n.current=i,n}),r==this.current.lyric.lyricIndex)return;-1==r&&(e=this.current.play.name),this.current.lyric={lyricIndex:r,details:e,item:s}}}addPlayList(t=[],e=!1){if(t.length){if(e)this.currentIndex=0,this.playList=[...t],this.play();else if(1==t.length){const e=t[0];let i=0;this.playList.some((t,s)=>{const r=t.id==e.id;return r&&(i=s),r})||(this.playList.push(e),i=this.playList.length-1),this.currentIndex=i,this.play()}else{const e=t.filter(t=>!this.playList.some(e=>e.id==t.id));e.length&&(this.playList=[...this.playList,...e])}return this.playList}}computationalIndex(t=0){}last(t){this.currentIndex>0&&this.currentIndex--,this.play()}next(t){this.currentIndex<this.playList.length?this.currentIndex++:this.currentIndex=0,this.play()}play(t){return h(this,void 0,void 0,function*(){t&&(this.currentIndex=t);let e=[];const i=this.playList[this.currentIndex];if(i&&i.id){this.current.play=i,this.updateCurrentTime(0),e.push(i.id);const t=o.a.musicStore.getMusic(e.join(",")),s=o.a.musicStore.getLyric(i.id),r=yield t;if(-110==r.code)return l.a.error({message:"购买专辑",description:"版权方要求，当前专辑需单独付费，购买数字专辑即可无限畅享"}),this.next();this.current.music=r,this.updatePlayState(!0);const n=yield s;this.current.lyric.item=n}})}}e.a=u,c([Object(r.persist)("object"),s.observable],u.prototype,"playParam",void 0),c([s.observable],u.prototype,"timeParam",void 0),c([Object(r.persist)("list"),s.observable],u.prototype,"playList",void 0),c([Object(r.persist)("object"),s.observable],u.prototype,"currentIndex",void 0),c([Object(r.persist)("object"),s.observable],u.prototype,"current",void 0)},643:function(t,e,i){"use strict";var s=i(17),r=i(23),n=this&&this.__decorate||function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o},o=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(r,n){function o(t){try{l(s.next(t))}catch(t){n(t)}}function a(t){try{l(s.throw(t))}catch(t){n(t)}}function l(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(o,a)}l((s=s.apply(t,e||[])).next())})};class a{constructor(t){this.controller=t,this.MVList=r.a.localGet("MVList",{}),this.current={}}play(t){return o(this,void 0,void 0,function*(){this.current={},yield this.getMV(t);let e=Object.assign({},this.MVList[t]);e.brs=Object.keys(e.brs).map(t=>({brs:t,url:r.c.address+"mv/url?url="+e.brs[t]})),this.current=e})}getMV(t){return o(this,void 0,void 0,function*(){let e={},i={};return this.MVList.hasOwnProperty(t)?e=this.MVList[t]:(e=yield r.c.get("mv?mvid="+t).toPromise(),i[t]=e.data),this.MVList=Object.assign({},this.MVList,i),r.a.localSet("MVList",this.MVList),e})}}e.a=a,n([s.observable],a.prototype,"MVList",void 0),n([s.observable],a.prototype,"current",void 0)},644:function(t,e,i){"use strict";var s=i(134),r=i.n(s);e.a=class{constructor(t){this.store=t,this.subject=new r.a.Subject,this.subject.subscribe({next:this.subscribe.bind(this),error:t=>{console.error("controller Error",t)}})}subscribe(t){switch(t.type){case EnumNotice.LoginOut:this.store.windowsStore.emptyCookie(),this.store.songSheetStore.getResource();break;case EnumNotice.LoginSuccess:t.data?this.store.UserContextStore.getUserPlaylist():console.log("没有登陆"),this.store.songSheetStore.getResource(t.data);break;case EnumNotice.MusicPlay:break;case EnumNotice.MVPlay:this.store.playStore.updatePlayState(!t.data)}}}},645:function(t,e,i){"use strict";var s=i(4),r=(i.n(s),i(265)),n=i(273),o=i(266),a=i(676),l=i.n(a);e.a=class extends s.Component{constructor(){super(...arguments),this.NoMatch=(({location:t})=>s.createElement("div",null,s.createElement("h3",null,"无法匹配 ",s.createElement("code",null,t.pathname)))),this.createCSSTransition=((t,e=!0,i="fade")=>(class extends s.Component{render(){return s.createElement(o.a,{transitionName:i,transitionAppear:!0,component:""},e?s.createElement("div",{className:"root-content"},s.createElement(t,Object.assign({key:"1"},this.props))):s.createElement(t,Object.assign({key:"1"},this.props)))}})),this.Loading=(()=>s.createElement("div",{className:"music-loading "},s.createElement("div",{className:"music-loading-icon"},s.createElement("i",{className:"musicicon musicicon-8"})),"加载中...")),this.routes=[{component:this.Loadable(()=>i.e(2).then(i.bind(null,677)).then(t=>t.RootApp),!0,this.Loading,{content:!1,classNames:"fade"}),routes:[{path:"/",exact:!0,component:this.Loadable(()=>i.e(4).then(i.bind(null,678)).then(t=>t.HomeComponent),!0,this.Loading,{content:!1,classNames:"fade"})},{path:"/find",component:this.Loadable(()=>i.e(3).then(i.bind(null,679)).then(t=>t.FindMusicComponent),!0,null),routes:[{path:"/find/ss",component:this.Loadable(()=>i.e(0).then(i.bind(null,127)).then(t=>t.SongSheetComponent),!0,null)},{component:this.Loadable(()=>i.e(0).then(i.bind(null,127)).then(t=>t.PersonalityComponent),!0,null)}]},{path:"/ssd/:id",component:this.Loadable(()=>i.e(0).then(i.bind(null,127)).then(t=>t.songSheetDetailsComponent))},{path:"/mv",exact:!0,component:this.Loadable(()=>i.e(1).then(i.bind(null,269)).then(t=>t.MVComponent))},{path:"/mv/:id",component:this.Loadable(()=>i.e(1).then(i.bind(null,269)).then(t=>t.MVDetailsComponent))},{component:this.createCSSTransition(this.NoMatch)}]}]}Loadable(t,e=!0,i=this.Loading,s={content:!0,classNames:"fade"}){i||(i=(()=>null));const r=l()({loader:t,loading:i});return e?this.createCSSTransition(r,s.content,s.classNames):r}render(){return s.createElement(r.a,null,Object(n.a)(this.routes))}}}},[275]);