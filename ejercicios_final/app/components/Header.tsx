export default function Header() {
  return (
    <div style={{ padding: "16px 20px", backgroundColor: "#1a1a1a" }}>
      <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "2px" }}>info</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>Exercícios</h1>
        <span style={{ fontSize: "16px", color: "white" }}>4</span>
      </div>
      <p style={{ fontSize: "11px", color: "#aaa", marginTop: "2px" }}>item</p>
    </div>
  );
}
