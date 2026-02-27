import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

/**
 * NetnovaTechSolutionDashboard.jsx
 * Single-file React dashboard component for "Netnova Tech Solution".
 * - Futuristic glass/neon UI
 * - Dynamic KPI cards and activity waveform
 * - Inbox: search, filters (All / Unread / Starred / Archived), preview, compose, star, read/unread, archive, delete
 * - Persistence via localStorage (key: netnova:inbox:v1)
 *
 * Usage:
 *  - import NetnovaTechSolutionDashboard from './NetnovaTechSolutionDashboard.jsx'
 *  - <NetnovaTechSolutionDashboard />
 */

export default function profile(props) {
    
  // --- KPIs ---
  const kpiSeed = [
    { id: "sessions", label: "Active Sessions", value: 842, color: "#7C5CFF" },
    { id: "throughput", label: "Throughput (GB/s)", value: 73.4, color: "#00E5FF" },
    { id: "latency", label: "Avg Latency (ms)", value: 12.7, color: "#4AF26B" },
  ];
  const [kpis, setKpis] = useState(kpiSeed);

  // Animate KPIs on mount (subtle)
  useEffect(() => {
    const animDur = 1200;
    const start = performance.now();
    const startVals = kpis.map(k => Math.max(0, k.value * 0.6));
    const targetVals = kpis.map(k => k.value);
    function step(now) {
      const t = Math.min(1, (now - start) / animDur);
      setKpis(prev =>
        prev.map((p, i) => {
          const eased = 1 - Math.pow(1 - t, 3);
          const v = Math.round((startVals[i] + (targetVals[i] - startVals[i]) * eased) * (i === 1 ? 10 : 1)) / (i === 1 ? 10 : 1);
          return { ...p, value: v };
        })
      );
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- Inbox ---
  const LS_KEY = "netnova:inbox:v1";
  const initialInbox = [
    {
      id: 1,
      from: "Netnova Alerts",
      subject: "Node latency spike detected",
      body: "We observed a transient latency spike on cluster-3. Metrics show increased queue depth for 23s. Engineers are investigating.",
      time: Date.now() - 1000 * 60 * 60 * 3,
      read: false,
      starred: true,
      archived: false,
    },
    {
      id: 2,
      from: "HR • Netnova Tech Solutions",
      subject: "All-hands Wed 10:00 AM",
      body: "Reminder: Quarterly all-hands on Wednesday. Agenda: roadmap, Q&A, team highlights.",
      time: Date.now() - 1000 * 60 * 60 * 26,
      read: true,
      starred: false,
      archived: false,
    },
    {
      id: 3,
      from: "Support - Acme Corp",
      subject: "Integration request: API keys",
      body: "Can you provide the new API keys for the staging environment? We need them for our QA runs next week.",
      time: Date.now() - 1000 * 60 * 60 * 6,
      read: false,
      starred: false,
      archived: false,
    },
    {
      id: 4,
      from: "Netnova Billing",
      subject: "Invoice #N-2025-09 ready",
      body: "Your monthly invoice is ready for review. Total: $12,480.00. Due in 30 days.",
      time: Date.now() - 1000 * 60 * 60 * 72,
      read: true,
      starred: false,
      archived: true,
    },
  ];

  const [inbox, setInbox] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : initialInbox;
    } catch {
      return initialInbox;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(inbox));
    } catch {
      // ignore storage errors
    }
  }, [inbox]);

  // UI state
  const [filter, setFilter] = useState("all"); // all | unread | starred | archived
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(() => (inbox[0] ? inbox[0].id : null));
  const [showCompose, setShowCompose] = useState(false);
  const [composeDraft, setComposeDraft] = useState({ to: "", subject: "", body: "" });

  // Derived filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inbox
      .filter(m => {
        if (filter === "unread") return !m.read && !m.archived;
        if (filter === "starred") return m.starred && !m.archived;
        if (filter === "archived") return m.archived;
        return !m.archived;
      })
      .filter(m => {
        if (!q) return true;
        return `${m.from} ${m.subject} ${m.body}`.toLowerCase().includes(q);
      })
      .sort((a, b) => b.time - a.time);
  }, [inbox, filter, query]);

  // ensure selectedId always in current view when possible
  useEffect(() => {
    if (!filtered.find(m => m.id === selectedId)) {
      setSelectedId(filtered[0] ? filtered[0].id : null);
    }
  }, [filtered, selectedId]);

  // actions
  function toggleRead(id) {
    setInbox(prev => prev.map(m => (m.id === id ? { ...m, read: !m.read } : m)));
  }
  function toggleStar(id) {
    setInbox(prev => prev.map(m => (m.id === id ? { ...m, starred: !m.starred } : m)));
  }
  function archiveMessage(id) {
    setInbox(prev => prev.map(m => (m.id === id ? { ...m, archived: true } : m)));
  }
  function deleteMessage(id) {
    if (confirm("Delete this message? This cannot be undone.")) {
      setInbox(prev => prev.filter(m => m.id !== id));
      setSelectedId(null);
    }
  }
  function markAllRead() {
    setInbox(prev => prev.map(m => ({ ...m, read: true })));
  }
  function sendCompose(e) {
    e && e.preventDefault();
    const { to, subject, body } = composeDraft;
    if (!to.trim() || !subject.trim() || !body.trim()) {
      alert("Please fill to, subject and body.");
      return;
    }
    const next = {
      id: Date.now(),
      from: to.trim(),
      subject: subject.trim(),
      body: body.trim(),
      time: Date.now(),
      read: false,
      starred: false,
      archived: false,
    };
    setInbox(prev => [next, ...prev]);
    setComposeDraft({ to: "", subject: "", body: "" });
    setShowCompose(false);
    setSelectedId(next.id);
  }

  const selected = inbox.find(m => m.id === selectedId) || null;

  // small helpers
  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleString();
  }

  // --- Minimal CSS-in-JS + global CSS string ---
  const styles = {
    root: {
      fontFamily:
        "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      background: "radial-gradient(1000px 400px at 10% 10%, #071029 0%, #05060a 30%, #03040a 100%)",
      color: "#e6eef8",
      minHeight: "100vh",
      padding: 20,
      boxSizing: "border-box",
    },
    container: {
      display: "grid",
      gridTemplateColumns: "240px 1fr 420px",
      gap: 20,
      alignItems: "start",
    },
    sidebar: {
      padding: 16,
      borderRadius: 14,
      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
      height: "calc(100vh - 40px)",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      overflow: "auto",
    },
    logo: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 },
    navItem: isActive => ({
      padding: "10px 12px",
      borderRadius: 10,
      background: isActive ? "linear-gradient(90deg,#7C5CFF22,#00E5FF11)" : "transparent",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: isActive ? "#fff" : "#cfe6ff",
    }),
    main: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minHeight: "calc(100vh - 40px)",
    },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    kpiGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 },
    kpiCard: {
      padding: 14,
      borderRadius: 12,
      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
      minHeight: 96,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    activity: {
      padding: 16,
      borderRadius: 12,
      background: "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))",
      height: 220,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    inboxCard: {
      padding: 12,
      borderRadius: 12,
      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      height: "calc(100vh - 40px)",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    inboxHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
    filters: { display: "flex", gap: 8, alignItems: "center", marginTop: 6 },
    inboxList: { overflowY: "auto", flex: 1, padding: 6, display: "flex", flexDirection: "column", gap: 6 },
    listItem: isSelected => ({
      display: "flex",
      gap: 10,
      padding: 8,
      borderRadius: 10,
      cursor: "pointer",
      background: isSelected ? "linear-gradient(90deg,#7C5CFF22,#00E5FF11)" : "transparent",
      alignItems: "center",
    }),
    preview: { padding: 12, borderRadius: 10, background: "#021024", minHeight: 140, overflowY: "auto" },
    composeModal: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
      padding: 16,
      borderRadius: 12,
      zIndex: 1200,
      width: 640,
      boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
    },
  };


  return (
    <div style={styles.root}>
      <style>{globalCss}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: "linear-gradient(90deg,#00E5FF,#7C5CFF)", display: "grid", placeItems: "center", color: "#001028", fontWeight: 800 }}>
            N
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>Netnova Tech Solution</div>
            <div style={{ fontSize: 12, opacity: 0.75 }}>Futuristic Command Center</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ padding: "8px 12px", borderRadius: 12, background: "#00102810" }}>Welcome, {props.name}</div>
          <button onClick={() => { setShowCompose(true); }} style={{ background: "linear-gradient(90deg,#7C5CFF,#00E5FF)", border: "none", padding: "8px 12px", borderRadius: 10, cursor: "pointer", fontWeight: 700 }}>
            Compose
          </button>
        </div>
      </div>

      <div style={styles.container}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="gA" x1="0" x2="1">
                  <stop offset="0" stopColor="#7C5CFF" />
                  <stop offset="1" stopColor="#00E5FF" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#gA)" />
            </svg>
            <div>
              <div style={{ fontWeight: 800 }}>Netnova</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>Tech Solution</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={styles.navItem(true)}>Overview</div>
            <div style={styles.navItem(false)}>Analytics</div>
            <div style={styles.navItem(false)}>Infrastructure</div>
            <div style={styles.navItem(false)}>Teams</div>
            <div style={styles.navItem(false)}>Settings</div>
          </div>

          <div style={{ marginTop: "auto", fontSize: 13, opacity: 0.8 }}>
            <div style={{ marginBottom: 8 }}>Quick Actions</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setInbox(prev => [{ id: Date.now(), from: "Netnova Bot", subject: "Test ping", body: "This is a test ping.", time: Date.now(), read: false, starred: false, archived: false }, ...prev]); }} style={{ padding: "8px 10px", borderRadius: 8, background: "#00102810", border: "none", cursor: "pointer" }}>
                Simulate Alert
              </button>
              <button onClick={markAllRead} style={{ padding: "8px 10px", borderRadius: 8, background: "#00102810", border: "none", cursor: "pointer" }}>
                Mark All Read
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main style={styles.main}>
          <section style={styles.kpiGrid}>
            {kpis.map(k => (
              <div key={k.id} style={{ ...styles.kpiCard, boxShadow: `${k.color}22 0px 10px 30px` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.8 }}>{k.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, marginTop: 8 }}>{typeof k.value === "number" ? (k.id === "latency" ? `${k.value} ms` : k.value) : k.value}</div>
                  </div>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: `linear-gradient(135deg, ${k.color}, #00102833)`, display: "grid", placeItems: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h4l3 8 4-16 3 8h4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div style={{ height: 8, marginTop: 12, background: "#00102822", borderRadius: 8, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.min(100, (k.value / (k.id === "throughput" ? 120 : k.value * 1.4)) * 100)}%`, background: k.color, borderRadius: 8, transition: "width 600ms ease" }} />
                </div>
              </div>
            ))}
          </section>

          <section style={styles.activity}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 800 }}>Network Activity</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>Realtime flow & anomaly detection</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ padding: "6px 10px", borderRadius: 8, background: "#00102810" }}>Realtime</div>
                <div style={{ padding: "6px 10px", borderRadius: 8, background: "#00102810" }}>Last 24h</div>
              </div>
            </div>

            <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
              <svg width="100%" height="120" viewBox="0 0 800 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wg" x1="0" x2="1">
                    <stop offset="0" stopColor="#7C5CFF" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#00E5FF" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path d="M0 60 C 100 30, 180 80, 260 50 C 340 30, 420 90, 500 60 C 580 30, 660 90, 740 50 C 820 10, 900 70, 980 50" stroke="url(#wg)" strokeWidth="4" fill="none" strokeLinecap="round" className="wave" />
              </svg>
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 13, opacity: 0.8 }}>Alerts: <strong style={{ color: "#FF6B6B" }}>2 active</strong></div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>Throughput: <strong>73.4 GB/s</strong></div>
            </div>
          </section>
        </main>

        {/* Inbox */}
        <aside style={styles.inboxCard}>
          <div style={styles.inboxHeader}>
            <div>
              <div style={{ fontWeight: 800 }}>Inbox</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>{filtered.length} messages</div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input placeholder="Search mail..." value={query} onChange={e => setQuery(e.target.value)} style={{ padding: "8px 10px", borderRadius: 8, background: "#00102810", border: "none", color: "#e6eef8" }} />
              <button onClick={() => setShowCompose(true)} style={{ background: "linear-gradient(90deg,#7C5CFF,#00E5FF)", border: "none", padding: "8px 12px", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>
                + Compose
              </button>
            </div>
          </div>

          <div style={styles.filters}>
            <FilterButton label="All" active={filter === "all"} onClick={() => setFilter("all")} />
            <FilterButton label="Unread" active={filter === "unread"} onClick={() => setFilter("unread")} />
            <FilterButton label="Starred" active={filter === "starred"} onClick={() => setFilter("starred")} />
            <FilterButton label="Archived" active={filter === "archived"} onClick={() => setFilter("archived")} />
          </div>

          <div style={styles.inboxList}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", opacity: 0.7, padding: 20 }}>No messages here.</div>
            ) : (
              filtered.map(m => (
                <div key={m.id} style={styles.listItem(selectedId === m.id)} onClick={() => { setSelectedId(m.id); if (!m.read) toggleRead(m.id); }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontWeight: m.read ? 600 : 800 }}>{m.from}</div>
                      <div style={{ fontSize: 12, opacity: 0.6 }}>{new Date(m.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 6, alignItems: "center" }}>
                      <div style={{ fontSize: 13, color: "#dbeafe", fontWeight: m.read ? 600 : 800 }}>{m.subject}</div>
                      <div style={{ fontSize: 12, color: "#9fb7d9", opacity: 0.9 }}>{m.body.slice(0, 60)}{m.body.length > 60 ? "…" : ""}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8, marginLeft: 8 }}>
                    <button title={m.starred ? "Unstar" : "Star"} onClick={e => { e.stopPropagation(); toggleStar(m.id); }} style={{ background: "transparent", border: "none", cursor: "pointer", color: m.starred ? "#FFD166" : "#8fb0d6" }}>
                      ★
                    </button>
                    <button title="Archive" onClick={e => { e.stopPropagation(); archiveMessage(m.id); }} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#8fb0d6" }}>
                      🗄
                    </button>
                    <button title="Delete" onClick={e => { e.stopPropagation(); deleteMessage(m.id); }} style={{ background: "transparent", border: "none", cursor: "pointer", color: "#FF6B6B" }}>
                      🗑
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.02)", paddingTop: 10 }}>
            <div style={{ marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 13, opacity: 0.8 }}>Preview</div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => selected && toggleRead(selected.id)} style={{ padding: "6px 8px", borderRadius: 8, background: "#00102810", border: "none" }}>{selected && selected.read ? "Mark Unread" : "Mark Read"}</button>
                <button onClick={() => selected && archiveMessage(selected.id)} style={{ padding: "6px 8px", borderRadius: 8, background: "#00102810", border: "none" }}>Archive</button>
              </div>
            </div>

            <div style={styles.preview}>
              {selected ? (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 900 }}>{selected.subject}</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{selected.from} · {formatTime(selected.time)}</div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button title="Star" onClick={() => toggleStar(selected.id)} style={{ background: selected.starred ? "#FFD16622" : "transparent", border: "none", padding: "6px 8px", borderRadius: 8, cursor: "pointer" }}>★</button>
                      <button title="Delete" onClick={() => deleteMessage(selected.id)} style={{ background: "transparent", border: "none", padding: "6px 8px", borderRadius: 8, cursor: "pointer" }}>🗑</button>
                    </div>
                  </div>

                  <div style={{ marginTop: 12, whiteSpace: "pre-wrap", lineHeight: 1.5, color: "#dbeafe" }}>{selected.body}</div>
                </div>
              ) : (
                <div style={{ opacity: 0.7 }}>Select a message to see details here.</div>
              )}
            </div>
          </div>
        </aside>
      </div>

      {/* Compose Modal */}
      {showCompose && (
        <div style={styles.composeModal} role="dialog" aria-modal="true">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <div style={{ fontWeight: 800 }}>Compose Message</div>
            <button onClick={() => setShowCompose(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>✕</button>
          </div>

          <form onSubmit={sendCompose} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <input placeholder="To" value={composeDraft.to} onChange={e => setComposeDraft(d => ({ ...d, to: e.target.value }))} style={{ padding: "10px 12px", borderRadius: 8, border: "none", background: "#00102810", color: "#e6eef8" }} />
            <input placeholder="Subject" value={composeDraft.subject} onChange={e => setComposeDraft(d => ({ ...d, subject: e.target.value }))} style={{ padding: "10px 12px", borderRadius: 8, border: "none", background: "#00102810", color: "#e6eef8" }} />
            <textarea placeholder="Message body" value={composeDraft.body} onChange={e => setComposeDraft(d => ({ ...d, body: e.target.value }))} rows={8} style={{ padding: "10px 12px", borderRadius: 8, border: "none", background: "#00102810", color: "#e6eef8", resize: "vertical" }} />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
              <button type="button" onClick={() => setShowCompose(false)} style={{ padding: "8px 12px", borderRadius: 8, background: "#00102810", border: "none", cursor: "pointer" }}>Cancel</button>
              <button type="submit" style={{ padding: "8px 12px", borderRadius: 8, background: "linear-gradient(90deg,#7C5CFF,#00E5FF)", border: "none", cursor: "pointer", fontWeight: 800 }}>Send</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

/* Small subcomponents and CSS */
function FilterButton({ label, active, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "6px 10px", borderRadius: 8, background: active ? "linear-gradient(90deg,#7C5CFF,#00E5FF)" : "#00102810", border: "none", color: active ? "#001028" : "#cfe6ff", cursor: "pointer", fontWeight: 700 }}>
      {label}
    </button>
  );
}

const globalCss = `
  input, textarea, button { font-family: inherit; color: inherit; }
  .wave { stroke-dasharray: 1500; stroke-dashoffset: 0; animation: wave 6s linear infinite; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.6)); }
  @keyframes wave { 0% { stroke-dashoffset: 0;} 50% { stroke-dashoffset: -750;} 100% { stroke-dashoffset: -1500;} }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(180deg,#7C5CFF88,#00E5FF88); border-radius: 10px; }
  @media (max-width: 1100px) {
    /* stack layout for smaller screens */
    div[style*="grid-template-columns: 240px 1fr 420px"] { grid-template-columns: 1fr !important; }
    aside[style*="height: calc(100vh - 40px)"] { height: auto !important; }
  }
`;