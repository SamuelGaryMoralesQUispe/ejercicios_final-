import ExerciseCard from "./ExerciseCard";

const exercises = [
  {
    id: 1,
    title: "Puxada frontal",
    series: "3 séries x 12 repetições",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&q=80"
  },
  {
    id: 2,
    title: "Remada curvada",
    series: "3 séries x 12 repetições",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&q=80"
  },
  {
    id: 3,
    title: "Remada unilateral",
    series: "3 séries x 12 repetições",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=150&q=80"
  },
  {
    id: 4,
    title: "Levantamento terra",
    series: "3 séries x 12 repetições",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=150&q=80"
  }
];

export default function ExerciseList() {
  return (
    <div style={{ padding: "0 16px 20px 16px" }}>
      {exercises.map((ex) => (
        <ExerciseCard
          key={ex.id}
          title={ex.title}
          series={ex.series}
          image={ex.image}
        />
      ))}
    </div>
  );
}
