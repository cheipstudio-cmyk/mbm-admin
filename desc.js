// Generatore descrizioni: porting 1:1 di scripts/desc.gd del gioco (verificato con i casi esportati da Godot)
const Desc=(()=>{
const F=(s,a)=>{a=Array.isArray(a)?a:[a];let i=0;return s.replace(/%[sd]/g,()=>String(a[i++]))};
const _n=(v,li)=>{let x=Math.round(v*100)/100;if(Object.is(x,-0))x=0;let s=String(x);if(s.indexOf('e')>=0)s=x.toFixed(6).replace(/0+$/,'').replace(/\.$/,'');return li===0?s.replace('.',','):s};
const _pct=(v,li)=>_n(v*100,li)+'%';
const _bp=(v,li)=>{if(Array.isArray(v)&&v.length>=2){const b=+v[0],p=+v[1];if(p<=0)return _n(b,li);return F('%s (+%s %s)',[_n(b,li),_pct(p,li),['potenza','power','قوة'][li]])}return _n(+v,li)};
const _t=(it,en,ar,li)=>[it,en,ar][li];
const cap=x=>x.charAt(0).toUpperCase()+x.slice(1);
const has=(p,k)=>Object.prototype.hasOwnProperty.call(p,k)&&p[k]!==null&&p[k]!==undefined;
const STATES={"slow":["RALLENTATO", "SLOWED", "المُبطَّأ"],"stinky":["PUZZOLENTE", "STINKY", "النتن"],"burn":["IN FIAMME", "BURNING", "المحترق"],"wet":["BAGNATO", "WET", "المبلول"],"root":["BLOCCATO", "ROOTED", "المثبَّت"],"air":["IN ARIA", "AIRBORNE", "في الهواء"],"stun":["STORDITO", "STUNNED", "المذهول"],"cc":["SOTTO CONTROLLO", "CROWD-CONTROLLED", "تحت السيطرة"],"lacca":["LACCATO", "LACQUERED", "المُلمَّع"],"kiss":["BACIATO", "KISSED", "المُقبَّل"]};
const state=(st,li)=>STATES[st]?STATES[st][li]:String(st).toUpperCase();
const ST={"ad":["+%s Forza fisica","+%s Physical power","+%s قوة جسدية",false],"ap":["+%s Potere magico","+%s Magic power","+%s قوة سحرية",false],"hp_pct":["+%s vita massima","+%s max health","+%s صحة قصوى",true],"hp":["+%s vita","+%s health","+%s صحة",false],"armor":["+%s armatura","+%s armor","+%s درع",false],"mr":["+%s resistenza magica","+%s magic resist","+%s مقاومة سحرية",false],"spd":["+%s velocità di movimento","+%s move speed","+%s سرعة الحركة",true],"cdr":["-%s ricarica delle abilità","-%s ability cooldown","-%s وقت تبريد المهارات",true],"ls":["+%s rubavita","+%s lifesteal","+%s سرقة حياة",true],"crit":["+%s probabilità di critico","+%s critical chance","+%s فرصة الضربة الحرجة",true],"dmg":["+%s danni degli attacchi","+%s attack damage","+%s ضرر الهجمات",true],"mreg":["+%s rigenerazione mana","+%s mana regen","+%s تجديد المانا",true],"thorns":["rimanda il %s dei danni presi in mischia","reflects %s of melee damage taken","يعكس %s من ضرر الالتحام",true],"as":["+%s velocità d'attacco","+%s attack speed","+%s سرعة الهجوم",true]};
function special(sk,li){const p=sk.p||{};const f=(k,d)=>(p[k]===undefined||p[k]===null)?d:+p[k];
  if(sk.id==='w_lupo'){const a=[_n(f('dur',8),li),_pct(f('heal_pct',0.15),li),_pct(f('speed',0.35),li),_pct(f('atk_pct',0.45),li),_pct(f('lifesteal',0.12),li),_pct(f('dmg_pct',0.3),li)];
    return _t(F("ULTIMATE: licantropo per %s s: si cura del %s, corre il %s in più, attacchi +%s e più veloci che lo curano del %s, abilità +%s. La Q torna subito pronta.",a),
      F("ULTIMATE: werewolf for %s s: heals %s, runs %s faster, attacks +%s and faster, healing him for %s, abilities +%s. Q is ready again at once.",a),
      F("الضربة القاضية: يتحول إلى مستذئب لمدة %s ث: يشفي %s، يركض أسرع بـ%s، الهجمات +%s وأسرع وتشفيه بـ%s، القدرات +%s. تصبح Q جاهزة فورًا.",a),li)}
  if(sk.id==='eugenio3'){const a=[_n(+(sk.range===undefined?20:sk.range),li),_bp(sk.dmg===undefined?[420,2]:sk.dmg,li),_n(f('stun',0.9),li),_n(f('end_r',3.6),li),_pct(f('crash',0.45),li),_pct(f('ally',0.6),li),_pct(f('turbo',0.25),li)];
    const out=_t(F("ULTIMATE: sale sulla Cruze e investe tutti per %s m: danni %s, STORDITO %s s e spinti via, si schianta sul primo eroe ed esplode (%s m, %s dei danni). Intoccabile per tutta la corsa. TOCCA DI NUOVO: carica l'alleato vicino sul tetto (+%s danni) o, da solo, turbo (+%s danni).",a),
      F("ULTIMATE: hops in the Cruze and runs everyone over for %s m: damage %s, STUNNED %s s and knocked away, crashes into the first hero and explodes (%s m, %s of the damage). Untargetable for the whole ride. TAP AGAIN: picks up a nearby ally on the roof (+%s damage) or, alone, turbo (+%s damage).",a),
      F("الضربة القاضية: يركب الكروز ويدهس الجميع لمسافة %s م: الضرر %s، مذهولون %s ث ويُدفعون بعيدًا، يصطدم بأول بطل وينفجر (%s م، %s من الضرر). لا يمكن استهدافه طوال الرحلة. اضغط مجددًا: يحمل حليفًا قريبًا على السطح (+%s ضرر) أو، وحده، تيربو (+%s ضرر).",a),li);
    const syt=synergy(sk.sy||{},li);return out+(syt!==''?' '+syt:'')}
  if(sk.id==='an_selettore'){const a=[_pct(f('dmg_pct',0.55),li),_n(f('range',3.5),li),_n(f('mana',15),li),_pct(f('splash',0.7),li),_n(f('end_r',2.2),li)];
    return _t(F("Cambia la cadenza del fucile a molla. RAFFICA: attacchi base molto veloci, tre molle leggere a colpo. COLPO SINGOLO: attacchi lenti ma pesanti (+%s danni e %s m di gittata in più), costa %s mana a colpo e la molla ESPLODE all'impatto: danni pieni al bersaglio e %s ai nemici entro %s m. Senza mana torna da solo in RAFFICA.",a),
      F("Switches the spring rifle's fire mode. BURST: very fast basic attacks, three light springs per shot. SINGLE SHOT: slow but heavy attacks (+%s damage and %s m more range), costs %s mana per shot and the spring EXPLODES on impact: full damage to the target and %s to enemies within %s m. Out of mana it switches back to BURST.",a),
      F("يغيّر نمط إطلاق بندقية النابض. الرشق: هجمات أساسية سريعة جدًا، ثلاثة نوابض خفيفة في كل طلقة. الطلقة المفردة: هجمات بطيئة لكن قوية (+%s ضرر و%s م مدى إضافي)، تكلف %s مانا لكل طلقة وينفجر النابض عند الاصطدام: ضرر كامل للهدف و%s للأعداء ضمن %s م. عند نفاد المانا يعود تلقائيًا إلى الرشق.",a),li)}
  return ''}
function skill(sk,li){const spc=special(sk,li);if(spc!=='')return spc;
  const p=sk.p||{};const typ=String(sk.type||'');const rng=+(sk.range||0);const rad=+(sk.radius||0);const parts=[];
  if(typ==='proj'){const n=parseInt(p.count===undefined?1:p.count);
    if(n>1)parts.push(_t(F("Lancia %d colpi a ventaglio fino a %s m",[n,_n(rng,0)]),F("Fires %d shots in a spread up to %s m",[n,_n(rng,1)]),F("يطلق %d طلقات على شكل مروحة حتى %s م",[n,_n(rng,2)]),li));
    else parts.push(_t(F("Lancia un colpo fino a %s m",_n(rng,0)),F("Fires a shot up to %s m",_n(rng,1)),F("يطلق ضربة حتى %s م",_n(rng,2)),li))}
  else if(typ==='cone')parts.push(_t(F("Colpisce a cono davanti a sé (%s m)",_n(rng,0)),F("Hits in a cone in front (%s m)",_n(rng,1)),F("يضرب على شكل مخروط أمامه (%s م)",_n(rng,2)),li));
  else if(typ==='blast')parts.push(_t(F("Esplosione di %s m fino a %s m di distanza",[_n(rad,0),_n(rng,0)]),F("Blast of %s m up to %s m away",[_n(rad,1),_n(rng,1)]),F("انفجار بقطر %s م حتى مسافة %s م",[_n(rad,2),_n(rng,2)]),li));
  else if(typ==='nova')parts.push(_t(F("Onda attorno a sé di %s m",_n(rad,0)),F("Wave around itself of %s m",_n(rad,1)),F("موجة حوله بقطر %s م",_n(rad,2)),li));
  else if(typ==='field'){const dur=+(p.dur===undefined?3:p.dur);parts.push(_t(F("Crea una zona di %s m per %s s",[_n(rad,0),_n(dur,0)]),F("Creates a %s m zone for %s s",[_n(rad,1),_n(dur,1)]),F("ينشئ منطقة بقطر %s م لمدة %s ث",[_n(rad,2),_n(dur,2)]),li))}
  else if(typ==='dash')parts.push(_t(F("Scatto di %s m",_n(rng,0)),F("Dashes %s m",_n(rng,1)),F("اندفاع لمسافة %s م",_n(rng,2)),li));
  else if(typ==='blink')parts.push(_t(F("Salto fino a %s m con impatto di %s m",[_n(rng,0),_n(rad,0)]),F("Leaps up to %s m with a %s m impact",[_n(rng,1),_n(rad,1)]),F("قفزة حتى %s م مع ارتطام بقطر %s م",[_n(rng,2),_n(rad,2)]),li));
  else if(typ==='buff'){if(has(p,'allies'))parts.push(_t(F("Potenzia sé e gli alleati entro %s m",_n(+p.allies,0)),F("Empowers itself and allies within %s m",_n(+p.allies,1)),F("يقوّي نفسه والحلفاء ضمن %s م",_n(+p.allies,2)),li));
    else parts.push(_t("Potenzia sé stesso","Empowers itself","يقوّي نفسه",li))}
  else if(typ==='snipe')parts.push(_t(F("Colpo lungo una linea fino a %s m",_n(rng,0)),F("Shot along a line up to %s m",_n(rng,1)),F("طلقة على خط حتى %s م",_n(rng,2)),li));
  else return '';
  if(has(p,'dmg')&&typ!=='buff'){const dv=p.dmg;const zero=Array.isArray(dv)?(+dv[0]<=0&&+dv[1]<=0):(+dv<=0);
    if(!zero){if(typ==='field'){const tk=+(p.tick===undefined?0.5:p.tick);parts.push(_t(F("Danni %s ogni %s s",[_bp(dv,0),_n(tk,0)]),F("Damage %s every %s s",[_bp(dv,1),_n(tk,1)]),F("الضرر %s كل %s ث",[_bp(dv,2),_n(tk,2)]),li))}
      else parts.push(_t(F("Danni %s",_bp(dv,0)),F("Damage %s",_bp(dv,1)),F("الضرر %s",_bp(dv,2)),li))}}
  parts.push(...effects(p,li));let out=parts.join('. ')+'.';const syt=synergy(sk.sy||{},li);if(syt!=='')out+=' '+syt;return out}
function effects(p,li){const e=[];const T=(a,b,c)=>e.push(_t(a,b,c,li));const g=(k,d)=>+(p[k]===undefined?d:p[k]);
  if(has(p,'slow'))T(F("rallenta del %s per %s s",[_pct(+p.slow,0),_n(g('slow_t',2),0)]),F("slows by %s for %s s",[_pct(+p.slow,1),_n(g('slow_t',2),1)]),F("يبطئ بنسبة %s لمدة %s ث",[_pct(+p.slow,2),_n(g('slow_t',2),2)]));
  if(has(p,'stun'))T(F("stordisce per %s s",_n(+p.stun,0)),F("stuns for %s s",_n(+p.stun,1)),F("يذهل لمدة %s ث",_n(+p.stun,2)));
  if(has(p,'root'))T(F("blocca a terra per %s s",_n(+p.root,0)),F("roots for %s s",_n(+p.root,1)),F("يثبّت لمدة %s ث",_n(+p.root,2)));
  if(has(p,'air'))T(F("lancia in aria per %s s",_n(+p.air,0)),F("knocks up for %s s",_n(+p.air,1)),F("يرفع في الهواء لمدة %s ث",_n(+p.air,2)));
  if(has(p,'knock'))T(F("spinge via di %s m",_n(+p.knock,0)),F("knocks back %s m",_n(+p.knock,1)),F("يدفع للخلف %s م",_n(+p.knock,2)));
  if(has(p,'burn'))T(F("brucia (%s al secondo) per %s s",[_bp(p.burn,0),_n(g('burn_t',3),0)]),F("burns (%s per second) for %s s",[_bp(p.burn,1),_n(g('burn_t',3),1)]),F("يحرق (%s في الثانية) لمدة %s ث",[_bp(p.burn,2),_n(g('burn_t',3),2)]));
  if(has(p,'lifesteal'))T(F("%s rubavita",_pct(+p.lifesteal,0)),F("%s lifesteal",_pct(+p.lifesteal,1)),F("%s سرقة حياة",_pct(+p.lifesteal,2)));
  if(has(p,'exec'))T(F("+%s della vita mancante come danni",_pct(+p.exec,0)),F("+%s of missing health as damage",_pct(+p.exec,1)),F("+%s من الصحة المفقودة كضرر",_pct(+p.exec,2)));
  if(p.pierce)T("attraversa i nemici","pierces through enemies","يخترق الأعداء");
  if(p.hook)T("aggancia e tira a sé","hooks and pulls in","يعلق ويسحب إليه");
  if(p.pull===true)T("attira i nemici al centro","pulls enemies to the center","يجذب الأعداء إلى المركز");
  if(has(p,'heal'))T(F("cura %s",_bp(p.heal,0)),F("heals %s",_bp(p.heal,1)),F("يشفي %s",_bp(p.heal,2)));
  if(has(p,'heal_pct'))T(F("cura il %s della vita",_pct(+p.heal_pct,0)),F("heals %s of max health",_pct(+p.heal_pct,1)),F("يشفي %s من الصحة",_pct(+p.heal_pct,2)));
  if(has(p,'shield'))T(F("scudo di %s",_bp(p.shield,0)),F("%s shield",_bp(p.shield,1)),F("درع بقيمة %s",_bp(p.shield,2)));
  if(has(p,'speed'))T(F("+%s velocità per %s s",[_pct(+p.speed,0),_n(g('speed_t',2),0)]),F("+%s speed for %s s",[_pct(+p.speed,1),_n(g('speed_t',2),1)]),F("+%s سرعة لمدة %s ث",[_pct(+p.speed,2),_n(g('speed_t',2),2)]));
  if(has(p,'dmg_t'))T(F("danni aumentati per %s s",_n(+p.dmg_t,0)),F("bonus damage for %s s",_n(+p.dmg_t,1)),F("ضرر إضافي لمدة %s ث",_n(+p.dmg_t,2)));
  if(has(p,'untarget'))T(F("non bersagliabile per %s s",_n(+p.untarget,0)),F("untargetable for %s s",_n(+p.untarget,1)),F("لا يمكن استهدافه لمدة %s ث",_n(+p.untarget,2)));
  if(has(p,'stealth'))T(F("invisibile per %s s",_n(+p.stealth,0)),F("invisible for %s s",_n(+p.stealth,1)),F("خفي لمدة %s ث",_n(+p.stealth,2)));
  if(p.cleanse)T("toglie rallentamenti e controlli","removes slows and crowd control","يزيل الإبطاء والسيطرة");
  if(Array.isArray(p.taunt))T(F("provoca i nemici entro %s m per %s s",[_n(+p.taunt[0],0),_n(+p.taunt[1],0)]),F("taunts enemies within %s m for %s s",[_n(+p.taunt[0],1),_n(+p.taunt[1],1)]),F("يستفز الأعداء ضمن %s م لمدة %s ث",[_n(+p.taunt[0],2),_n(+p.taunt[1],2)]));
  if(has(p,'end_r'))T(F("all'arrivo esplode (%s m)",_n(+p.end_r,0)),F("explodes on arrival (%s m)",_n(+p.end_r,1)),F("ينفجر عند الوصول (%s م)",_n(+p.end_r,2)));
  return e.map(cap)}
function synergy(sy,li){if(!sy||!Object.keys(sy).length)return '';const bits=[];const b=+(sy.bonus||0);
  if(has(sy,'if')){let s=_t(F("COMBO: +%s danni a chi è %s",[_pct(b,0),state(String(sy.if),0)]),F("COMBO: +%s damage to %s targets",[_pct(b,1),state(String(sy.if),1)]),F("كومبو: +%s ضرر على %s",[_pct(b,2),state(String(sy.if),2)]),li);
    if(has(sy,'stun'))s+=_t(F(" e lo stordisce %s s",_n(+sy.stun,0)),F(" and stuns them %s s",_n(+sy.stun,1)),F(" ويذهله %s ث",_n(+sy.stun,2)),li);
    if(has(sy,'root'))s+=_t(F(" e lo blocca %s s",_n(+sy.root,0)),F(" and roots them %s s",_n(+sy.root,1)),F(" ويثبّته %s ث",_n(+sy.root,2)),li);
    bits.push(s)}
  if(has(sy,'pct_hp'))bits.push(_t(F("+%s della vita attuale degli eroi",_pct(+sy.pct_hp,0)),F("+%s of heroes' current health",_pct(+sy.pct_hp,1)),F("+%s من صحة الأبطال الحالية",_pct(+sy.pct_hp,2)),li));
  if(has(sy,'refund'))bits.push(_t(F("colpendo un eroe la ricarica scende di %s s",_n(+sy.refund,0)),F("hitting a hero cuts the cooldown by %s s",_n(+sy.refund,1)),F("إصابة بطل تقلل وقت التبريد %s ث",_n(+sy.refund,2)),li));
  if(has(sy,'mana'))bits.push(_t(F("colpendo un eroe ridà %s mana",_n(+sy.mana,0)),F("hitting a hero restores %s mana",_n(+sy.mana,1)),F("إصابة بطل تعيد %s مانا",_n(+sy.mana,2)),li));
  if(has(sy,'ls'))bits.push(_t(F("%s rubavita",_pct(+sy.ls,0)),F("%s lifesteal",_pct(+sy.ls,1)),F("%s سرقة حياة",_pct(+sy.ls,2)),li));
  if(has(sy,'apply'))bits.push(_t(F("Rende %s per 4 s",state(String(sy.apply),0)),F("Makes them %s for 4 s",state(String(sy.apply),1)),F("يجعلهم %s لمدة 4 ث",state(String(sy.apply),2)),li));
  if(!bits.length)return '';return bits.join('. ')+'.'}
function stats(st,li){const bits=[];for(const k in ST){if(has(st,k)){const r=ST[k];const v=+st[k];bits.push(F(r[li],r[3]?_pct(v,li):_n(v,li)))}}
  if(!bits.length)return '';const last=bits[bits.length-1];const first=bits.slice(0,-1);const out=first.length?first.join(', ')+[' e ',' and ',' و'][li]+last:last;return cap(out)+'.'}
function spell(id,li,V){const v=(k,d)=>V(id+'.'+k,d);
  if(id==='flash'){const d0=V('flash.dist',8.5);return _t(F("Ti teletrasporti di %s m nella direzione scelta, anche oltre i muretti.",_n(d0,0)),F("Teleports you %s m in the chosen direction, even over walls.",_n(d0,1)),F("ينقلك %s م في الاتجاه المختار، حتى فوق الجدران.",_n(d0,2)),li)}
  if(id==='ignite'){const a=i=>[_n(v('r',7),i),_n(v('t',5),i),_n(v('dmg',14),i),_n(v('dmg_l',5),i)];return _t(F("Brucia l'eroe nemico più vicino (entro %s m) per %s s: %s danni al secondo (+%s per livello).",a(0)),F("Burns the nearest enemy hero (within %s m) for %s s: %s damage per second (+%s per level).",a(1)),F("يحرق أقرب بطل عدو (ضمن %s م) لمدة %s ث: %s ضرر في الثانية (+%s لكل مستوى).",a(2)),li)}
  if(id==='heal'){const a=i=>[_n(v('base',90),i),_n(v('l',18),i),_n(v('r',8),i),_n(v('ally',70),i),_n(v('ally_l',14),i),_pct(v('spd',0.3),i),_n(v('spd_t',1.5),i)];return _t(F("Cura te di %s (+%s per livello) e gli alleati entro %s m di %s (+%s per livello), con +%s velocità per %s s.",a(0)),F("Heals you for %s (+%s per level) and allies within %s m for %s (+%s per level), with +%s speed for %s s.",a(1)),F("يشفيك بمقدار %s (+%s لكل مستوى) والحلفاء ضمن %s م بمقدار %s (+%s لكل مستوى)، مع +%s سرعة لمدة %s ث.",a(2)),li)}
  if(id==='ghost'){const a=i=>[_pct(v('spd',0.4),i),_n(v('t',7),i)];return _t(F("+%s di velocità per %s s.",a(0)),F("+%s move speed for %s s.",a(1)),F("+%s سرعة لمدة %s ث.",a(2)),li)}
  if(id==='barrier'){const a=i=>[_n(v('base',110),i),_n(v('l',22),i),_n(v('t',2.5),i)];return _t(F("Uno scudo di %s (+%s per livello) per %s s.",a(0)),F("A %s shield (+%s per level) for %s s.",a(1)),F("درع بقيمة %s (+%s لكل مستوى) لمدة %s ث.",a(2)),li)}
  if(id==='smite'){const a=i=>[_n(v('base',400),i),_n(v('l',25),i),_n(v('r',6),i)];return _t(F("%s danni (+%s per livello) a un mostro, a Pablo o a un minion entro %s m.",a(0)),F("%s damage (+%s per level) to a monster, Pablo or a minion within %s m.",a(1)),F("%s ضرر (+%s لكل مستوى) على وحش أو بابلو أو تابع ضمن %s م.",a(2)),li)}
  return ''}
return {skill,stats,spell,synergy,state,STATES,ST,_n,_pct,_bp};
})();
if(typeof module!=='undefined')module.exports=Desc;
