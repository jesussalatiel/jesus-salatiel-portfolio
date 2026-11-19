type Props = {
  label: string;
};

export function TechChip({ label }: Props) {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-kivo-lime/25 px-3 py-1 text-xs font-medium leading-5 text-kivo-ink">
        {label}
      </div>
    </li>
  );
}
