import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";

export default function Home() {
  return (
    <main style={{ maxWidth: "430px", margin: "0 auto", backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <Header />
      <ExerciseList />
    </main>
  );
}
