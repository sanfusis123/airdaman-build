(self.webpackChunkbetting=self.webpackChunkbetting||[]).push([[392],{5941:(e,t,a)=>{var r,s=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,y=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of n(t))p.call(e,s)||s===a||l(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},h=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),u={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(u,{default:()=>P}),e.exports=(r=u,y(l({},"__esModule",{value:!0}),r));var d=((e,t,a)=>(a=null!=e?s(i(e)):{},y(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(5043)),c=a(2206),m=a(1520);class P extends d.Component{constructor(){super(...arguments),h(this,"callPlayer",c.callPlayer),h(this,"mute",(()=>{this.setVolume(0)})),h(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),h(this,"ref",(e=>{this.container=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:t,config:a,onError:r,onDuration:s}=this.props,l=e&&e.match(m.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,c.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then((e=>{this.container&&(e.api.addReadyListener(((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))}),l),e.api.renderPlayer({uuid:l,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(l).then((e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)})))}),r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return d.default.createElement("div",{style:t},d.default.createElement("div",{ref:this.ref}))}}h(P,"displayName","Vidyard"),h(P,"canPlay",m.canPlay.vidyard)}}]);
//# sourceMappingURL=reactPlayerVidyard.48d47a8d.chunk.js.map