import Card from "@/components/Card";

type StatCardProps = {
  icon: string;
  title: string;
  value: string;
};

export default function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <span className="text-2xl">{icon}</span>

        <p className="text-sm text-gray-400">{title}</p>

        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </Card>
  );
}
