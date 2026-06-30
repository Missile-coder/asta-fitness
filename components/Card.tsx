type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
      <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>

      {children}
    </div>
  );
}
