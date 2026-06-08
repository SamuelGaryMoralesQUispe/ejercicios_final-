type Props = {
  title: string;
  series: string;
  image: string;
};

export default function ExerciseCard({ title, series, image }: Props) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#2a2a2a",
      borderRadius: "12px",
      padding: "10px",
      marginBottom: "10px",
      cursor: "pointer",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "72px", height: "72px", borderRadius: "10px", objectFit: "cover" }}
        />
        <div>
          <p style={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>{title}</p>
          <p style={{ fontSize: "13px", color: "#aaa", marginTop: "4px" }}>{series}</p>
        </div>
      </div>
      <span style={{ color: "#aaa", fontSize: "20px", paddingRight: "6px" }}>›</span>
    </div>
  );
}
