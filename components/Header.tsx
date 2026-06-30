import { Dumbbell } from "lucide-react";

export default function Header() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="mb-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-red-600 p-3 shadow-lg shadow-red-600/30">
          <Dumbbell size={24} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">Merhaba Recep 👋</h1>

          <p className="text-gray-400 capitalize">{formattedDate}</p>
        </div>
      </div>
    </header>
  );
}
