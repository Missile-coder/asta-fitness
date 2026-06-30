import Card from "./components/Card";
import Button from "./components/Button";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-red-500">ASTA FITNESS</h1>

      <p className="mt-4 text-gray-400 text-lg">
        Disiplin, motivasyondan güçlüdür.
      </p>
      <Card title="💪 Bugünkü Antrenman">
        <p className="text-gray-300">Göğüs + Triceps</p>

        <div className="mt-4 h-3 w-full rounded-full bg-gray-700">
          <div className="h-3 w-2/3 rounded-full bg-red-500"></div>
        </div>

        <p className="mt-2 text-sm text-gray-400">%66 Tamamlandı</p>
      </Card>
      <Button>Antrenmana Başla</Button>
    </main>
  );
}
