interface CardProps {
  image?: string;
  title: string;
  caption?: string;
  onClick: () => void;
}

export function Card({ image, title, caption, onClick }: CardProps) {
  return (
    <div
      className="min-w-0 flex flex-1 flex-col items-center cursor-pointer rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]"
      onClick={onClick}
    >
      <img src={image} alt="" />
      <p className="text-3xl font-semibold">{title}</p>
      <p className="mt-1 text-sm-truncate">{caption}</p>
    </div>
  );
}
