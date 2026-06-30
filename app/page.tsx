import WorkoutCard from "@/components/WorkoutCard";
import Header from "@/components/Header";
import StatsGrid from "@/components/StatsGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-md">
        <Header />
        <WorkoutCard />
        <StatsGrid />
      </div>
    </main>
  );
}
