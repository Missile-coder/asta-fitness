import Header from "@/components/Header";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <div className="mx-auto max-w-md">
        <Header />

        <Card title="💪 Bugünkü Antrenman">
          <p className="mb-4 text-gray-300">Göğüs + Triceps</p>

          <div className="mb-3 h-3 w-full rounded-full bg-zinc-800">
            <div className="h-3 w-2/3 rounded-full bg-red-500"></div>
          </div>

          <p className="mb-6 text-sm text-gray-400">%66 Tamamlandı</p>

          <Button>Antrenmana Başla</Button>
        </Card>
      </div>
    </main>
  );
}
