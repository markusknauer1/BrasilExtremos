interface AniversaryCardProps {
  imageSrc: string;
  aniversaryName: string;
  aniversarydate: string;
}

export function AniversaryCard({
  imageSrc,
  aniversaryName,
  aniversarydate,
}: AniversaryCardProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={aniversaryName} className="w-24" />
      <p>{aniversaryName}</p>
      <p>{aniversarydate}</p>
    </div>
  );
}
