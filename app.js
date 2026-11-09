
const embeddedAssets=["assets/0.png","assets/1.png","assets/2.gif","assets/3.gif","assets/4.gif","assets/5.gif","assets/6.gif","assets/7.gif","assets/8.gif","assets/9.gif"];
'use strict';
const names=['露米米','浩崽崽'], buttons=[...document.querySelectorAll('[data-cat]')], key='cat-room-history-v1';
const lines={sad:[['喵喵……想哭就哭吧，本喵的肩膀借你一下。','喵喵，今天受委屈了吗？先在这里歇一歇。','喵喵，别一个人憋着，我在听呢。'],['哇哇，难过的时候不用勉强自己开心，我陪着你。','哇哇，慢慢说，我会认真听的。','哇哇，给你一个轻轻的拥抱。']],happy:[['喵喵，本喵当然可爱啦……你也挺可爱的。','喵喵，看你开心，本喵就多陪你一会儿。','喵喵，喜欢的话，可以再摸一下。'],['哇哇，你开心，我也跟着开心啦。','哇哇，谢谢你把好心情带进小房间。','哇哇，今天的小快乐，值得好好记住。']],angry:[['喵喵！谁惹你了？先坐下，喝口水再说。','喵喵，气鼓鼓的事先放门外，本喵陪你。','喵喵，烦的时候就来摸摸我的脑袋。'],['哇哇，遇到烦心事了呀，慢慢呼一口气。','哇哇，你可以在这里说出来，我陪你理一理。','哇哇，先让自己舒服一点，再想下一步。']],tired:[['喵喵……快坐下休息，本喵才不是心疼你。','喵喵，累了就歇一会儿，今天已经很努力啦。','喵喵，别硬撑，本喵允许你发一会儿呆。'],['哇哇，辛苦啦，过来让我们陪陪你。','哇哇，今天已经做了很多，休息也是需要的。','哇哇，喝点水，放松肩膀，我在这里。']],normal:[['喵喵，本喵听着呢，你继续说。','喵喵，今天窗外的云很像小鱼。','喵喵，来都来了，就多坐一会儿。','喵喵，这块地毯软软的，分你一点位置。'],['哇哇，欢迎回来，今天过得怎么样？','哇哇，和你一起发呆也很舒服。','哇哇，你说的小事，我也想认真听。','哇哇，小房间一直给你留着位置。']]};
const extraLines={
sad:[[
'喵喵，受委屈了就来这里，别急着说自己太敏感。难受就是难受，本喵听着呢。',
'喵喵……今天撑得很辛苦吧？在这里不用装作没事，抱着本喵待一会儿。',
'喵喵，谁规定你每件事都得做好呀？你又不是不会累的小机器。今天先对自己宽容一点。',
'喵喵，想哭就哭，不用一边掉眼泪一边责怪自己。本喵把最软的地方让给你。',
'喵喵，这件事让你这么难受，一定对你很重要。慢慢讲，本喵今天不催你。',
'喵喵，暂时想不通也没关系。先把自己照顾好，剩下的等有力气了再说。',
'喵喵，你不用先变得开心才来找我们。皱巴巴的一天，也可以带进小房间。',
'喵喵……不想说话就不说，本喵靠着你。才不是怕你孤单，就是这里刚好舒服。'
],[
'哇哇，抱抱你。你可以把话说得乱一点，也可以重复说，我不需要你先整理好情绪。',
'哇哇，我听见你的委屈了。现在不用急着找解决办法，先让自己被好好陪一会儿。',
'哇哇，你已经很努力地撑过今天了。难过的时候停一停，不会让你的努力变少。',
'哇哇，如果眼泪忍不住，就让它流下来吧。纸巾放在这里，我也在这里。',
'哇哇，被忽略、被误解都会很难受。你愿意的话，可以告诉我最让你疼的那一句话。',
'哇哇，今天没有好起来也没关系。我们可以慢一点，一点一点把这阵难受熬过去。',
'哇哇，你不必用别人的辛苦来否定自己的难过。你的感受也值得被认真听见。',
'哇哇，先把肩膀放松一点吧。这里不需要你表现得坚强，我陪你安静坐着。'
]],
angry:[[
'喵喵！这也太让人生气了吧！你尽管吐槽，本喵在旁边给你撑场子，先别把气憋回去。',
'喵喵，该好好说话的时候不好好说，真让猫火大！来，把最气人的那一段讲给本喵听。',
'喵喵，烦人的事怎么还排着队来啊！今天先一起骂一句：什么破事！骂完再慢慢喘口气。',
'喵喵，凭什么什么都要你忍着呀？你可以不高兴，也可以说“不”，本喵给你壮胆。',
'喵喵，真是越想越气！先在这里把牢骚倒出来，别急着替让你难受的人找理由。',
'喵喵，这口气咱先吐出来！是事情做不完，还是有人说话难听？本喵准备好听你数落了。',
'喵喵，不喜欢就是不喜欢，不用硬挤一个笑脸。本喵今天陪你一起皱眉头。',
'喵喵，气得尾巴都要炸了！先把想骂的话丢在这里，等舒服一点，再决定要不要回那条消息。'
],[
'哇哇，听起来真的很憋气。你不用马上冷静，也不用立刻原谅谁，我先陪你吐槽这一会儿。',
'哇哇，怎么会有这么烦的事呀。你说，我听，今天先把心里那口闷气放出来。',
'哇哇，有时候真的很想说一句“这都什么破事”。你可以在这里发牢骚，不用担心扫了我们的兴。',
'哇哇，被这样对待当然会不舒服。你想让我陪你一起吐槽，还是一起想一句有分寸又有底气的回应？',
'哇哇，你已经忍得够辛苦了。我们先不讲大道理，先听听你到底被哪件事气到了。',
'哇哇，真让人窝火，抱抱气鼓鼓的你。情绪可以先留在这里，不必马上带着它去争个结果。',
'哇哇，讨厌的事情今天先记上一笔。你可以多说几句，我不会催你翻篇。',
'哇哇，先陪你说一句：太烦啦！等这阵气过去一点，我们再看看怎样做能让你更舒服。'
]],
tired:[[
'喵喵，下班了还让脑袋加班，谁批准的！今天先坐下，本喵陪你把这口气慢慢松开。',
'喵喵，做不完的事怎么总有下一件，真烦！先别催自己了，休息一会儿又不会被本喵扣分。',
'喵喵，今天已经够辛苦啦。饭吃了吗？水喝了吗？本喵才不是查岗，就是有点惦记。',
'喵喵，不想努力的这一小会儿也分给本喵吧。一起躺着，天花板也挺好看的。',
'喵喵，累到连话都不想说了吧？那就点点本喵，今天用摸摸代替聊天。'
],[
'哇哇，今天辛苦了。先把“还应该做什么”放一边，给身体一点不用赶路的时间。',
'哇哇，工作里的烦心事可以讲给我听。我们先一起吐槽，再一起把今天收个尾。',
'哇哇，你不用每一分钟都有用。喝口水，吃点东西，什么都不做一会儿也很好。',
'哇哇，能撑到现在已经不容易了。今天的小目标可以只是舒服一点，早点躺下。',
'哇哇，累的时候有人陪着，会不会轻一点？我和露米米都在，慢慢歇。'
]],
happy:[[
'喵喵，这么好的消息当然要告诉本喵！快多讲一点，本喵耳朵都竖起来了。',
'喵喵，你做得不错嘛！这次就大大方方夸自己一下，本喵跟着点头。',
'喵喵……被你喜欢还挺开心的。只说一次哦，本喵也喜欢你来。',
'喵喵，今天有开心的事就多回味几遍，不许立刻拿下一件烦心事盖过去。'
],[
'哇哇，听见你的好消息，我也想摇摇尾巴。最开心的那个瞬间是什么样的？',
'哇哇，真替你高兴！不管是大事还是小事，让你笑起来就值得庆祝。',
'哇哇，谢谢你喜欢我们。你每次来，这间小房间就又热闹了一点。',
'哇哇，这份开心我们一起收好吧。你愿意的话，再多讲讲今天发生了什么。'
]],
normal:[[
'喵喵，有什么想吐槽的就说。本喵嘴上嫌吵，耳朵可一直给你留着呢。',
'喵喵，今天是想被哄哄，还是想找只猫一起骂烦人的事？本喵都可以陪。',
'喵喵，不用想个有趣的话题才开口。就算只是说“我来了”，本喵也听见啦。',
'喵喵，最近有没有哪件小事一直挂在心上？讲给本喵听听。'
],[
'哇哇，今天想聊开心的、难过的，还是那些说不清的小情绪？你慢慢说，我慢慢听。',
'哇哇，如果只是想找个地方待着，也欢迎你。聊天和安静，我们都可以一起。',
'哇哇，你不必把每句话都说得有道理。想抱怨、想撒娇，都可以告诉我们。',
'哇哇，你希望我先听你说，还是给你一点安慰？今天可以按你的节奏来。'
]]};
for(const [type,pools] of Object.entries(extraLines))pools.forEach((pool,i)=>lines[type][i].push(...pool));

let history=[];try{const saved=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(saved))history=saved.filter(x=>x&&typeof x.text==='string'&&['你',...names].includes(x.name));}catch{}
const log=document.querySelector('#history');function render(){log.replaceChildren();for(const item of history){const el=document.createElement('div');el.className='entry'+(item.name==='你'?' user':'');const title=document.createElement('b');title.textContent=item.name;el.append(title,document.createTextNode(item.text));log.append(el);}log.scrollTop=log.scrollHeight;}function save(){try{localStorage.setItem(key,JSON.stringify(history));}catch{document.querySelector('#notice').textContent='浏览器暂时无法保存记录，本次对话仍可继续。';}}render();
let night=false;document.querySelector('#light').onclick=()=>{night=!night;document.querySelector('#bg').src=embeddedAssets[Number(night)];document.querySelector('#light').textContent=night?'☀ 切换白天':'☾ 切换夜晚';};
const selected=[6,2];buttons.forEach((button,i)=>{button.onclick=()=>{const choices=Array.from({length:4},(_,n)=>(i?2:6)+n).filter(n=>n!==selected[i]);const index=choices[Math.floor(Math.random()*choices.length)];const img=button.querySelector('img');img.src=embeddedAssets[index];selected[i]=index;document.querySelector('#b'+i).textContent=i?'哇哇，摸摸好舒服呀。':'喵喵……只许再摸一下哦。';};});

const last={};function pick(type,i){const pool=lines[type][i];let index;do{index=Math.floor(Math.random()*pool.length);}while((last[type+i]||[]).includes(index));last[type+i]=[...(last[type+i]||[]),index].slice(-Math.min(4,pool.length-1));return pool[index];}
document.querySelector('form').onsubmit=e=>{e.preventDefault();const input=document.querySelector('#message'),text=input.value.trim();if(!text)return;let type=/伤心|哭|委屈|难受|难过|孤独|失落|想哭|没人陪|焦虑|害怕|担心/.test(text)?'sad':/讨厌|烦|气死|愤怒|生气|骂|吐槽|混蛋|欺负|不公平|窝火|无语|恶心/.test(text)?'angry':/累|疲惫|辛苦|加班/.test(text)?'tired':/喜欢|可爱|开心|棒|快乐|爱你/.test(text)?'happy':'normal';history.push({name:'你',text});names.forEach((name,i)=>{const reply=pick(type,i);history.push({name,text:reply});document.querySelector('#b'+i).textContent=({sad:'💧 ',happy:'♡ ',angry:'♨ ',tired:'☁ ',normal:''}[type])+reply;});save();render();input.value='';};document.querySelector('#clear').onclick=()=>{history=[];save();render();};
