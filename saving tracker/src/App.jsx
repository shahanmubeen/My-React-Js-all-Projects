import { useState } from "react";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthlyData = [8000,12000,9500,15000,11000,13500,10000,14500,9000,16000,12500,13000];
const maxVal = Math.max(...monthlyData);

const goals = [
  { label: "Emergency Fund",    pct: 75,  color: "orange" },
  { label: "Retirement Fund",   pct: 100, color: "green"  },
  { label: "Home Down Payment", pct: 62,  color: "orange" },
  { label: "Car Purchase",      pct: 40,  color: "red"    },
];

export default function SavingsTracker() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#1a1a2e", minHeight: "600px", padding: "16px", fontFamily: "'Segoe UI', sans-serif", borderRadius: "12px" }}>

      {/* ── Top Stat Cards ── */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "14px", flexWrap: "wrap" }}>
        {[
          { label: "Total Savings",  value: "Rs 1,24,500", sub: "↑ 8.2% this month", dark: false },
          { label: "Active Goals",   value: "7",           sub: "3 on track",         dark: true  },
          { label: "Completed",      value: "2",           sub: "this year",           dark: true  },
          { label: "Monthly Target", value: "Rs 15,000",   sub: "4 days left",         dark: true  },
        ].map((c, i) => (
          <div key={i} style={{ background: c.dark ? "#2a2a4a" : "#ff6b35", borderRadius: "8px", padding: "12px 18px", flex: 1, minWidth: "130px" }}>
            <div style={{ fontSize: "11px", color: c.dark ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{c.label}</div>
            <div style={{ fontSize: "22px", fontWeight: 700, color: c.dark ? "#ff6b35" : "#fff", marginTop: "2px" }}>{c.value}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", marginTop: "2px" }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Bar Chart ── */}
      <div style={{ background: "#16213e", borderRadius: "8px", padding: "14px", marginBottom: "12px" }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
          Monthly Savings — 2024
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "110px" }}>
          {monthlyData.map((v, i) => {
            const h = Math.round((v / maxVal) * 95);
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                <div
                  title={`Rs ${v.toLocaleString()}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    background: h < 50 ? "#e84444" : "#ff6b35",
                    borderRadius: "3px 3px 0 0",
                    width: "100%",
                    height: `${h}px`,
                    opacity: hovered === i ? 0.75 : 1,
                    transition: "opacity 0.2s",
                    cursor: "pointer",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "5px", marginTop: "4px" }}>
          {months.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "center", flex: 1 }}>
              <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>{m}</span>
            </div>
          ))}
        </div>
        {hovered !== null && (
          <div style={{ marginTop: "6px", fontSize: "12px", color: "#ff6b35", fontWeight: 600 }}>
            {months[hovered]}: Rs {monthlyData[hovered].toLocaleString()}
          </div>
        )}
      </div>

      {/* ── Progress Cards (4 goals) ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
        {goals.map((g, i) => {
          const isOrange = g.color === "orange";
          const fillColor = isOrange ? "#fff" : g.color === "green" ? "#2ecc71" : "#e84444";
          const valColor  = isOrange ? "#fff" : g.color === "green" ? "#2ecc71" : "#e84444";
          return (
            <div key={i} style={{ background: isOrange ? "#ff6b35" : "#16213e", borderRadius: "8px", padding: "12px" }}>
              <div style={{ fontSize: "10px", color: isOrange ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "6px" }}>{g.label}</div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: valColor, marginBottom: "8px" }}>{g.pct}%</div>
              <div style={{ height: "5px", background: "rgba(255,255,255,0.15)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", borderRadius: "3px", width: `${g.pct}%`, background: fillColor }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Section ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>

        {/* Education Goal */}
        <div style={{ background: "#16213e", borderRadius: "8px", padding: "12px" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "4px" }}>Education Goal</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#2ecc71", marginBottom: "8px" }}>85%</div>
          <div style={{ height: "5px", background: "rgba(255,255,255,0.15)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: "3px", width: "85%", background: "#2ecc71" }} />
          </div>
          <div style={{ marginTop: "6px", fontSize: "11px", color: "#2ecc71", fontWeight: 600 }}>On Track ✓</div>
        </div>

        {/* Vacation Fund */}
        <div style={{ background: "#ff6b35", borderRadius: "8px", padding: "12px" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "4px" }}>Vacation Fund</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Rs 22,000</div>
          <div style={{ height: "5px", background: "rgba(255,255,255,0.25)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: "3px", width: "55%", background: "#fff" }} />
          </div>
          <div style={{ marginTop: "6px", fontSize: "11px", color: "rgba(255,255,255,0.85)" }}>55% complete</div>
        </div>

        {/* Annual Progress — full width */}
        <div style={{ background: "#16213e", borderRadius: "8px", padding: "12px", gridColumn: "span 2" }}>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "8px" }}>Annual Savings Progress</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#ff6b35" }}>Rs 1,24,500</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Goal: Rs 1,80,000</span>
          </div>
          <div style={{ height: "8px", background: "rgba(255,255,255,0.15)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: "3px", width: "69%", background: "#2ecc71" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Jan 2024</span>
            <span style={{ fontSize: "11px", color: "#2ecc71", fontWeight: 600 }}>69% achieved</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>Dec 2024</span>
          </div>
        </div>

      </div>
    </div>
  );
}
