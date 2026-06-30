type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
      bg-red-600
      hover:bg-red-700
      duration-300
      rounded-2xl
      px-8
      py-4
      font-semibold
      text-lg
      shadow-lg
      shadow-red-600/20
      "
    >
      {children}
    </button>
  );
}
