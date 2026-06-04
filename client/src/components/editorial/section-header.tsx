interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ align = 'left', description, eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl space-y-4 text-center' : 'max-w-3xl space-y-4'}>
      {eyebrow ? <p className="eyebrow text-secondary">{eyebrow}</p> : null}
      <h1 className="section-heading text-primary">{title}</h1>
      {description ? <p className="text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
