(()=>{
'use strict';
function init(){
const root=document.getElementById('public-briefs'),track=document.getElementById('briefTrack');if(!root||!track)return;
const slides=[...track.querySelectorAll('.brief-slide')],dots=document.getElementById('briefDots'),counter=document.getElementById('briefCounter'),pause=document.getElementById('briefPause');if(!slides.length)return;
let current=0,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches,timer;
function show(n){current=(n+slides.length)%slides.length;track.style.transform=`translate3d(-${current*100}%,0,0)`;counter.textContent=`${current+1} / ${slides.length}`;[...dots.children].forEach((d,i)=>{d.classList.toggle('active',i===current);d.setAttribute('aria-current',String(i===current))})}
function restart(){clearInterval(timer);if(!paused)timer=setInterval(()=>{if(!document.hidden)show(current+1)},5500)}
slides.forEach((_,i)=>{let d=document.createElement('button');d.type='button';d.className='brief-dot';d.setAttribute('aria-label',`Show infographic ${i+1}`);d.addEventListener('click',()=>{show(i);restart()});dots.appendChild(d)});
document.getElementById('briefPrev')?.addEventListener('click',()=>{show(current-1);restart()});document.getElementById('briefNext')?.addEventListener('click',()=>{show(current+1);restart()});
pause?.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'Resume rotation':'Pause rotation';pause.setAttribute('aria-pressed',String(paused));restart()});
let x=null;root.addEventListener('touchstart',e=>{x=e.changedTouches[0].clientX},{passive:true});root.addEventListener('touchend',e=>{if(x===null)return;let delta=e.changedTouches[0].clientX-x;if(Math.abs(delta)>35){show(current+(delta<0?1:-1));restart()}x=null},{passive:true});
root.addEventListener('mouseenter',()=>clearInterval(timer));root.addEventListener('mouseleave',restart);document.addEventListener('visibilitychange',restart);show(0);restart();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
