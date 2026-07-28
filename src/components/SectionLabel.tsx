interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-white/50 uppercase">
      <span className="tabular-nums">{index}</span>
      <span className="h-px w-8 bg-white/30" />
      <span>{label}</span>
    </div>
  );
}
