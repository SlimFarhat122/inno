import React, { useState, useEffect, useRef } from "react";

// ── INNO BRAND PALETTE ────────────────────────────────────────
const C = {
  dark:    "#003da6",
  mid:     "#0084cc",
  green:   "#49ce54",
  noir:    "#060d1f",
  blanc:   "#ffffff",
  gris:    "#f6f8fc",
  gris2:   "#eef1f8",
  muted:   "#5b6a8a",
  border:  "rgba(0,61,166,0.10)",
  borderM: "rgba(0,61,166,0.18)",
};

// ── HELPERS ──────────────────────────────────────────────────
function pad(n) { return String(n).padStart(2, "0"); }

function formatDate(d) {
  if (!d) return "";
  const days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
  const months = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

const SERVICES = [
  { id: "taxi",     label: "Taxi Privé",    desc: "Trajet exclusif, confort garanti",       price: "Tarif standard", color: C.dark, icon: "🚕" },
  { id: "go_prive", label: "+GO Privé",     desc: "Covoiturage privé, frais partagés",      price: "−30 % en moyenne", color: C.mid,  icon: "🚗" },
  { id: "go_pub",   label: "+GO Public",    desc: "Collectif sur itinéraire commun",         price: "Tarif réduit",    color: C.green, icon: "🚐" },
];

const HOURS   = Array.from({ length: 24 }, (_, i) => pad(i));
const MINUTES = ["00","15","30","45"];

// ── STEP INDICATOR ───────────────────────────────────────────
function Steps({ current }) {
  const steps = ["Adresses","Date & Heure","Service","Confirmation"];
  return (
    <div style={{ display:"flex", alignItems:"center", marginBottom:"40px" }}>
      {steps.map((s, i) => {
        const done   = i < current;
        const active = i === current;
        const clr    = active ? C.mid : done ? C.green : C.border;
        const txt    = active ? C.mid : done ? C.green : C.muted;
        return (
          <React.Fragment key={i}>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"6px", flex: i < steps.length - 1 ? "0 0 auto" : 1 }}>
              <div style={{
                width:"32px", height:"32px", borderRadius:"50%",
                background: done ? C.green : active ? C.mid : "transparent",
                border: `2px solid ${clr}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"11px", fontWeight:"800",
                color: (done || active) ? C.blanc : C.muted,
                fontFamily:"'DM Sans',sans-serif",
                transition:"all 0.4s ease",
                boxShadow: active ? `0 0 0 5px ${C.mid}20` : done ? `0 0 0 5px ${C.green}18` : "none",
              }}>
                {done ? "✓" : i + 1}
              </div>
              <span style={{ fontSize:"10px", fontWeight:"700", color: txt, fontFamily:"'DM Sans',sans-serif", letterSpacing:"0.5px", whiteSpace:"nowrap" }}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex:1, height:"1.5px", margin:"0 4px 20px",
                background: done ? `linear-gradient(90deg,${C.green},${C.mid})` : C.border,
                transition:"background 0.5s ease",
              }}/>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── FIELD WRAPPER ─────────────────────────────────────────────
function Field({ label, children, icon }) {
  return (
    <div style={{ marginBottom:"20px" }}>
      <label style={{
        display:"flex", alignItems:"center", gap:"6px",
        fontFamily:"'DM Sans',sans-serif", fontSize:"11px",
        fontWeight:"700", letterSpacing:"0.9px", textTransform:"uppercase",
        color: C.dark, marginBottom:"8px",
      }}>
        {icon && <span style={{ fontSize:"13px" }}>{icon}</span>}
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text", style = {} }) {
  const [focus, setFocus] = useState(false);
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width:"100%", boxSizing:"border-box",
        padding:"13px 16px",
        borderRadius:"10px",
        border:`1.5px solid ${focus ? C.mid : C.border}`,
        background: focus ? `${C.mid}06` : C.blanc,
        fontFamily:"'DM Sans',sans-serif", fontSize:"14px",
        color: C.noir, outline:"none",
        transition:"all 0.2s ease",
        boxShadow: focus ? `0 0 0 3px ${C.mid}18` : "0 1px 3px rgba(0,0,0,0.04)",
        ...style,
      }}
    />
  );
}

function Select({ value, onChange, options, style = {} }) {
  const [focus, setFocus] = useState(false);
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        padding:"13px 16px",
        borderRadius:"10px",
        border:`1.5px solid ${focus ? C.mid : C.border}`,
        background: C.blanc,
        fontFamily:"'DM Sans',sans-serif", fontSize:"14px",
        color: C.noir, outline:"none", cursor:"pointer",
        appearance:"none",
        transition:"all 0.2s ease",
        boxShadow: focus ? `0 0 0 3px ${C.mid}18` : "0 1px 3px rgba(0,0,0,0.04)",
        ...style,
      }}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}

// ── MINI CALENDAR ─────────────────────────────────────────────
function Calendar({ selected, onSelect, minDate }) {
  const today = new Date(); today.setHours(0,0,0,0);
  const min   = minDate || today;
  const [view, setView] = useState(() => {
    const d = new Date(selected || min);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  const MONTHS = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const DAYS   = ["L","M","M","J","V","S","D"];

  const firstDay = new Date(view.year, view.month, 1).getDay();
  const offset   = (firstDay + 6) % 7;
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();

  function prevMonth() {
    setView(v => v.month === 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: v.month - 1 });
  }
  function nextMonth() {
    setView(v => v.month === 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: v.month + 1 });
  }

  const cells = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div style={{
      background: C.blanc,
      border:`1.5px solid ${C.border}`,
      borderRadius:"14px",
      padding:"20px",
      userSelect:"none",
      boxShadow:"0 2px 12px rgba(0,61,166,0.06)",
    }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"18px" }}>
        <button onClick={prevMonth} style={{
          background:"none", border:`1px solid ${C.border}`, cursor:"pointer",
          fontSize:"16px", color:C.dark, padding:"5px 10px", borderRadius:"8px",
          transition:"all 0.2s",
        }}>‹</button>
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:"700", fontSize:"13px", color:C.noir, letterSpacing:"-0.01em" }}>
          {MONTHS[view.month]} {view.year}
        </span>
        <button onClick={nextMonth} style={{
          background:"none", border:`1px solid ${C.border}`, cursor:"pointer",
          fontSize:"16px", color:C.dark, padding:"5px 10px", borderRadius:"8px",
          transition:"all 0.2s",
        }}>›</button>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"2px", marginBottom:"8px" }}>
        {DAYS.map((d, i) => (
          <div key={i} style={{ textAlign:"center", fontFamily:"'DM Sans',sans-serif", fontSize:"10px", fontWeight:"700", color:C.muted, padding:"4px 0" }}>{d}</div>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:"2px" }}>
        {cells.map((day, idx) => {
          if (!day) return <div key={`e${idx}`}/>;
          const date = new Date(view.year, view.month, day);
          date.setHours(0,0,0,0);
          const isDisabled = date < min;
          const isSelected = selected && date.getTime() === selected.getTime();
          const isToday    = date.getTime() === today.getTime();
          return (
            <button
              key={day}
              disabled={isDisabled}
              onClick={() => !isDisabled && onSelect(date)}
              style={{
                aspectRatio:"1",
                borderRadius:"8px",
                border:"none",
                background: isSelected ? C.mid : isToday ? `${C.mid}14` : "transparent",
                color: isSelected ? C.blanc : isDisabled ? "#cfd8e8" : isToday ? C.mid : C.noir,
                fontFamily:"'DM Sans',sans-serif",
                fontSize:"12px", fontWeight: isSelected ? "800" : "600",
                cursor: isDisabled ? "not-allowed" : "pointer",
                transition:"all 0.15s ease",
                padding:"5px 0",
              }}
              onMouseEnter={e => { if (!isDisabled && !isSelected) e.target.style.background = `${C.mid}10`; }}
              onMouseLeave={e => { if (!isDisabled && !isSelected) e.target.style.background = "transparent"; }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── STEP 1 : Adresses ─────────────────────────────────────────
function StepAdresses({ data, setData, onNext }) {
  const valid = data.depart.trim() && data.arrivee.trim();
  return (
    <div>
      <SectionTitle icon="📍" title="Point de départ & destination" sub="Renseignez les adresses de votre trajet planifié." />

      <Field label="Point de départ" icon="🟢">
        <Input value={data.depart} onChange={v => setData(d => ({...d, depart: v}))} placeholder="Ex : 12 Avenue Habib Bourguiba, Tunis" />
      </Field>

      <div style={{ display:"flex", justifyContent:"center", margin:"-8px 0 12px" }}>
        <button
          onClick={() => setData(d => ({ ...d, depart: d.arrivee, arrivee: d.depart }))}
          style={{
            background: C.gris, border:`1.5px solid ${C.border}`,
            borderRadius:"50%", width:"36px", height:"36px",
            cursor:"pointer", fontSize:"15px", color:C.mid,
            display:"flex", alignItems:"center", justifyContent:"center",
            transition:"all 0.2s ease",
            boxShadow:"0 2px 6px rgba(0,61,166,0.08)",
          }}
          title="Inverser les adresses"
          onMouseEnter={e => e.currentTarget.style.background = `${C.mid}12`}
          onMouseLeave={e => e.currentTarget.style.background = C.gris}
        >⇅</button>
      </div>

      <Field label="Destination" icon="🔴">
        <Input value={data.arrivee} onChange={v => setData(d => ({...d, arrivee: v}))} placeholder="Ex : Aéroport Tunis-Carthage" />
      </Field>

      <Field label="Nombre de passagers" icon="👥">
        <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
          {[1,2,3,4,5,6].map(n => (
            <button key={n} onClick={() => setData(d => ({...d, passagers: n}))} style={{
              width:"46px", height:"46px", borderRadius:"10px",
              border:`1.5px solid ${data.passagers === n ? C.mid : C.border}`,
              background: data.passagers === n ? C.mid : C.blanc,
              color: data.passagers === n ? C.blanc : C.noir,
              fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"14px",
              cursor:"pointer", transition:"all 0.18s ease",
              boxShadow: data.passagers === n ? `0 4px 12px ${C.mid}30` : "0 1px 3px rgba(0,0,0,0.04)",
            }}>{n}</button>
          ))}
        </div>
      </Field>

      <PrimaryBtn onClick={onNext} disabled={!valid}>Continuer — Date &amp; Heure →</PrimaryBtn>
    </div>
  );
}

// ── STEP 2 : Date & Heure ─────────────────────────────────────
function StepDateTime({ data, setData, onNext, onBack }) {
  const minDate = addDays(new Date(), 1);
  minDate.setHours(0,0,0,0);
  const valid = !!data.date && !!data.heure && !!data.minute;

  return (
    <div>
      <SectionTitle icon="📅" title="Date & heure de départ" sub="Sélectionnez quand vous souhaitez partir." />

      <Calendar selected={data.date} onSelect={d => setData(x => ({...x, date: d}))} minDate={minDate} />

      {data.date && (
        <div style={{ marginTop:"22px" }}>
          <Field label="Heure de prise en charge" icon="🕐">
            <div style={{ display:"flex", gap:"12px", alignItems:"center" }}>
              <Select value={data.heure} onChange={v => setData(x => ({...x, heure: v}))}
                options={HOURS.map(h => ({ value: h, label: h + "h" }))} style={{ flex:1 }} />
              <span style={{ color:C.muted, fontWeight:"800", fontSize:"20px", lineHeight:1 }}>:</span>
              <Select value={data.minute} onChange={v => setData(x => ({...x, minute: v}))}
                options={MINUTES.map(m => ({ value: m, label: m }))} style={{ flex:1 }} />
            </div>
          </Field>
        </div>
      )}

      {data.date && (
        <div style={{
          marginTop:"16px", padding:"14px 18px",
          background:`linear-gradient(135deg,${C.dark}08,${C.mid}08)`,
          border:`1.5px solid ${C.mid}25`,
          borderRadius:"12px", display:"flex", alignItems:"center", gap:"12px",
        }}>
          <div style={{
            width:"38px", height:"38px", borderRadius:"10px",
            background:`linear-gradient(135deg,${C.dark},${C.mid})`,
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
            fontSize:"16px",
          }}>📅</div>
          <div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"13px", color:C.dark }}>
              {formatDate(data.date)}
            </div>
            <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"12px", color:C.muted, marginTop:"2px" }}>
              Départ à {data.heure}h{data.minute}
            </div>
          </div>
        </div>
      )}

      <TwinBtns onBack={onBack} onNext={onNext} disabled={!valid} label="Choisir le service →" />
    </div>
  );
}

// ── STEP 3 : Service ──────────────────────────────────────────
function StepService({ data, setData, onNext, onBack }) {
  const valid = !!data.service;
  return (
    <div>
      <SectionTitle icon="🚖" title="Choisissez votre formule" sub="Sélectionnez le service adapté à vos besoins et à votre budget." />

      <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"22px" }}>
        {SERVICES.map(s => {
          const sel = data.service === s.id;
          return (
            <button key={s.id} onClick={() => setData(d => ({...d, service: s.id}))} style={{
              display:"flex", alignItems:"center", gap:"16px",
              padding:"16px 18px",
              borderRadius:"14px",
              border:`2px solid ${sel ? s.color : C.border}`,
              background: sel ? `${s.color}07` : C.blanc,
              cursor:"pointer", textAlign:"left",
              transition:"all 0.2s ease",
              boxShadow: sel ? `0 4px 20px ${s.color}20` : "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width:"48px", height:"48px", borderRadius:"12px",
                background: sel ? `${s.color}15` : C.gris,
                border:`1.5px solid ${sel ? s.color + "30" : C.border}`,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"20px", flexShrink:0, transition:"all 0.2s",
              }}>{s.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"14.5px", color: sel ? s.color : C.noir, marginBottom:"2px" }}>
                  {s.label}
                </div>
                <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"12px", color:C.muted }}>
                  {s.desc}
                </div>
              </div>
              <div style={{
                fontFamily:"'DM Sans',sans-serif", fontWeight:"700",
                fontSize:"11px", color: sel ? s.color : C.muted,
                background: sel ? `${s.color}12` : C.gris2,
                padding:"4px 10px", borderRadius:"100px", whiteSpace:"nowrap",
                border:`1px solid ${sel ? s.color + "25" : "transparent"}`,
              }}>{s.price}</div>
              <div style={{
                width:"20px", height:"20px", borderRadius:"50%",
                border:`2px solid ${sel ? s.color : C.border}`,
                background: sel ? s.color : "transparent",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexShrink:0, transition:"all 0.2s ease",
              }}>
                {sel && <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:C.blanc }}/>}
              </div>
            </button>
          );
        })}
      </div>

      <Field label="Note pour le chauffeur (optionnel)" icon="💬">
        <textarea
          value={data.note}
          onChange={e => setData(d => ({...d, note: e.target.value}))}
          placeholder="Ex : Bagages encombrants, enfant à bord, code d'entrée..."
          rows={3}
          style={{
            width:"100%", boxSizing:"border-box",
            padding:"13px 16px", borderRadius:"10px",
            border:`1.5px solid ${C.border}`,
            fontFamily:"'DM Sans',sans-serif", fontSize:"13.5px",
            color:C.noir, outline:"none", resize:"vertical", lineHeight:"1.6",
            boxShadow:"0 1px 3px rgba(0,0,0,0.04)",
            transition:"border 0.2s",
          }}
          onFocus={e => e.target.style.borderColor = C.mid}
          onBlur={e => e.target.style.borderColor = C.border}
        />
      </Field>

      <TwinBtns onBack={onBack} onNext={onNext} disabled={!valid} label="Confirmer la réservation →" />
    </div>
  );
}

// ── STEP 4 : Confirmation ─────────────────────────────────────
function StepConfirmation({ data, onReset }) {
  const [sent, setSent] = useState(false);
  const svc = SERVICES.find(s => s.id === data.service);
  const ref = "INNO-" + Math.random().toString(36).slice(2,8).toUpperCase();

  useEffect(() => {
    const t = setTimeout(() => setSent(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ textAlign:"center" }}>
      {/* Success icon */}
      <div style={{
        width:"72px", height:"72px", borderRadius:"50%",
        background: sent ? `linear-gradient(135deg,${C.green},#2eb83a)` : `linear-gradient(135deg,${C.mid},${C.dark})`,
        display:"flex", alignItems:"center", justifyContent:"center",
        margin:"0 auto 22px",
        fontSize:"28px", color:C.blanc,
        transition:"all 0.5s ease",
        boxShadow: sent ? `0 8px 28px ${C.green}40` : `0 8px 28px ${C.mid}40`,
      }}>
        {sent ? "✓" : "⏳"}
      </div>

      <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"22px", color:C.noir, margin:"0 0 8px", letterSpacing:"-0.03em" }}>
        Réservation {sent ? "confirmée !" : "en cours…"}
      </h3>
      <p style={{ color:C.muted, fontSize:"14px", lineHeight:"1.7", marginBottom:"24px" }}>
        Votre trajet est enregistré. Vous recevrez une confirmation par SMS et e-mail.
      </p>

      {/* Reference badge */}
      <div style={{
        display:"inline-flex", alignItems:"center", gap:"10px",
        padding:"8px 20px",
        background:`${C.dark}08`, border:`1.5px solid ${C.dark}20`,
        borderRadius:"100px", marginBottom:"28px",
      }}>
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"10px", fontWeight:"700", color:C.muted, letterSpacing:"0.8px", textTransform:"uppercase" }}>Référence</span>
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"14px", fontWeight:"800", color:C.dark, letterSpacing:"1.5px" }}>{ref}</span>
      </div>

      {/* Summary card */}
      <div style={{
        background:C.gris, borderRadius:"16px",
        padding:"22px", textAlign:"left",
        border:`1px solid ${C.border}`, marginBottom:"24px",
      }}>
        <div style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"10px", fontWeight:"700", letterSpacing:"1px", color:C.dark, textTransform:"uppercase", marginBottom:"16px" }}>
          Récapitulatif du trajet
        </div>
        {[
          { icon:"📍", label:"Départ",    val:data.depart },
          { icon:"🏁", label:"Arrivée",   val:data.arrivee },
          { icon:"📅", label:"Date",      val:formatDate(data.date) },
          { icon:"🕐", label:"Heure",     val:`${data.heure}h${data.minute}` },
          { icon:"👥", label:"Passagers", val:`${data.passagers} passager${data.passagers>1?"s":""}` },
          { icon:svc?.icon, label:"Service", val:svc?.label },
        ].map((r, i) => (
          <div key={i} style={{
            display:"flex", alignItems:"center", gap:"10px",
            padding:"10px 0",
            borderBottom: i < 5 ? `1px solid ${C.border}` : "none",
          }}>
            <span style={{ fontSize:"14px", flexShrink:0 }}>{r.icon}</span>
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"10.5px", fontWeight:"700", color:C.muted, textTransform:"uppercase", letterSpacing:"0.5px", minWidth:"68px" }}>
              {r.label}
            </span>
            <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"13px", color:C.noir, fontWeight:"600" }}>
              {r.val}
            </span>
          </div>
        ))}
        {data.note && (
          <div style={{ marginTop:"12px", padding:"10px 14px", background:`${C.mid}08`, borderRadius:"10px", fontSize:"13px", color:C.muted, fontStyle:"italic", lineHeight:"1.5" }}>
            💬 {data.note}
          </div>
        )}
      </div>

      <button onClick={onReset} style={{
        width:"100%", padding:"14px 28px", borderRadius:"12px",
        border:`2px solid ${C.mid}`,
        background:"transparent", color:C.mid,
        fontFamily:"'DM Sans',sans-serif", fontWeight:"800",
        fontSize:"13px", letterSpacing:"0.3px",
        cursor:"pointer", transition:"all 0.22s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.background = C.mid; e.currentTarget.style.color = C.blanc; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.mid; }}
      >
        + Nouvelle réservation
      </button>
    </div>
  );
}

// ── SHARED UI ATOMS ───────────────────────────────────────────
function SectionTitle({ icon, title, sub }) {
  return (
    <div style={{ marginBottom:"28px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
        <span style={{ fontSize:"18px" }}>{icon}</span>
        <h3 style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"20px", color:C.noir, margin:0, letterSpacing:"-0.03em" }}>
          {title}
        </h3>
      </div>
      <p style={{ color:C.muted, fontSize:"13.5px", margin:0, lineHeight:"1.65", paddingLeft:"26px" }}>
        {sub}
      </p>
    </div>
  );
}

function PrimaryBtn({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      width:"100%", padding:"15px 24px", borderRadius:"12px", border:"none",
      background: disabled ? C.gris2 : `linear-gradient(135deg,${C.dark},${C.mid})`,
      color: disabled ? "#9fb3cc" : C.blanc,
      fontFamily:"'DM Sans',sans-serif", fontWeight:"800", fontSize:"13.5px",
      letterSpacing:"0.2px", cursor: disabled ? "not-allowed" : "pointer",
      transition:"all 0.22s ease",
      boxShadow: disabled ? "none" : `0 6px 22px ${C.mid}35`,
      marginTop:"8px",
    }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.boxShadow = `0 10px 30px ${C.mid}45`; }}
      onMouseLeave={e => { if (!disabled) e.currentTarget.style.boxShadow = `0 6px 22px ${C.mid}35`; }}
    >
      {children}
    </button>
  );
}

function TwinBtns({ onBack, onNext, disabled, label }) {
  return (
    <div style={{ display:"flex", gap:"10px", marginTop:"24px" }}>
      <button onClick={onBack} style={{
        padding:"15px 20px", borderRadius:"12px",
        border:`1.5px solid ${C.border}`, background:C.blanc, color:C.muted,
        fontFamily:"'DM Sans',sans-serif", fontWeight:"700", fontSize:"13px",
        cursor:"pointer", flexShrink:0, transition:"all 0.2s ease",
        boxShadow:"0 1px 3px rgba(0,0,0,0.04)",
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = C.mid; e.currentTarget.style.color = C.mid; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}
      >← Retour</button>
      <PrimaryBtn onClick={onNext} disabled={disabled}>{label}</PrimaryBtn>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────
const INITIAL = {
  depart:"", arrivee:"", passagers:1,
  date:null, heure:"08", minute:"00",
  service:"", note:"",
};

export default function ReservationPlanifiee() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL);
  const boxRef = useRef(null);

  function scrollToTop() {
    boxRef.current?.scrollIntoView({ behavior:"smooth", block:"start" });
  }
  const next  = () => { setStep(s => s + 1); scrollToTop(); };
  const back  = () => { setStep(s => s - 1); scrollToTop(); };
  const reset = () => { setStep(0); setData(INITIAL); scrollToTop(); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing:border-box; }
        body { margin:0; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .step-anim { animation: fadeUp 0.38s cubic-bezier(0.22,1,0.36,1) both; }

        /* Diagonal stripe BG */
        .res-bg {
          min-height:100vh;
          background:
            linear-gradient(160deg,#e8effc 0%,#f2f7ff 35%,#eaf9eb 100%);
          position:relative;
          overflow:hidden;
        }
        .res-bg::before {
          content:"";
          position:absolute; inset:0;
          background:
            radial-gradient(ellipse 700px 500px at 5% 0%,  rgba(0,61,166,0.07) 0%,transparent 70%),
            radial-gradient(ellipse 600px 500px at 95% 100%, rgba(73,206,84,0.07) 0%,transparent 70%);
          pointer-events:none;
        }
      `}</style>

      <div className="res-bg" style={{
        display:"flex", alignItems:"flex-start", justifyContent:"center",
        padding:"56px 20px 80px",
        fontFamily:"'DM Sans',sans-serif",
      }}>
        <div style={{ width:"100%", maxWidth:"560px", position:"relative" }}>

          {/* Header */}
          <div style={{ textAlign:"center", marginBottom:"36px" }}>
            {/* Logo badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:"10px",
              padding:"7px 18px 7px 12px",
              background:`linear-gradient(135deg,${C.dark}12,${C.mid}10)`,
              border:`1px solid ${C.dark}18`,
              borderRadius:"100px", marginBottom:"20px",
            }}>
              <div style={{
                width:"22px", height:"22px", borderRadius:"50%",
                background:`linear-gradient(135deg,${C.dark},${C.mid})`,
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"11px",
              }}>🚖</div>
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"11px", fontWeight:"700", color:C.dark, letterSpacing:"1.2px", textTransform:"uppercase" }}>
                Réservation planifiée
              </span>
            </div>

            <h1 style={{
              fontFamily:"'DM Sans',sans-serif",
              fontSize:"clamp(26px,5vw,40px)",
              fontWeight:"800", letterSpacing:"-0.04em",
              color:C.noir, margin:"0 0 12px", lineHeight:"1.1",
            }}>
              Réservez votre trajet{" "}
              <span style={{
                background:`linear-gradient(110deg,${C.dark},${C.mid})`,
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              }}>à l'avance</span>
            </h1>
            <p style={{ color:C.muted, fontSize:"14.5px", lineHeight:"1.7", margin:0 }}>
              Planifiez maintenant — votre chauffeur sera à l'heure.
            </p>
          </div>

          {/* Card */}
          <div ref={boxRef} style={{
            background:C.blanc,
            borderRadius:"22px",
            padding:"clamp(24px,5vw,42px)",
            boxShadow:"0 20px 60px -10px rgba(0,61,166,0.12), 0 4px 14px -4px rgba(0,0,0,0.06)",
            border:`1px solid ${C.border}`,
          }}>
            {step < 3 && <Steps current={step} />}

            <div className="step-anim" key={step}>
              {step === 0 && <StepAdresses  data={data} setData={setData} onNext={next} />}
              {step === 1 && <StepDateTime  data={data} setData={setData} onNext={next} onBack={back} />}
              {step === 2 && <StepService   data={data} setData={setData} onNext={next} onBack={back} />}
              {step === 3 && <StepConfirmation data={data} onReset={reset} />}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}