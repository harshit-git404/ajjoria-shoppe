import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';

const signatures = [
  {
    title: 'Measured silhouettes',
    description: 'Foundational pieces cut with room to breathe and enough structure to linger.',
  },
  {
    title: 'Tactile materials',
    description: 'Natural textures and softened finishes that feel collected rather than manufactured.',
  },
  {
    title: 'Quiet detailing',
    description: 'Subtle trims, precise seams, and warm metal accents that reveal themselves slowly.',
  },
];

const collection = [
  {
    name: 'Ivory Studio Set',
    note: 'Layered cotton separates for mornings that begin unhurried.',
    price: 'From Rs. 5,800',
  },
  {
    name: 'Olive Evening Edit',
    note: 'A darker palette with soft tailoring and restrained ornament.',
    price: 'From Rs. 7,200',
  },
  {
    name: 'Champagne Accessories',
    note: 'Small leather goods and jewelry with a warm brushed glow.',
    price: 'From Rs. 2,400',
  },
];

export function HomePage() {
  return (
    <div>
      <section className="section-stack">
        <div className="container-luxury editorial-grid items-end">
          <div className="col-span-12 space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <p className="eyebrow text-secondary">Editorial luxury for everyday ritual</p>
              <h2 className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.02em] text-primary sm:text-6xl lg:text-[4rem]">
                Pieces made to quiet the room, not compete with it.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Ajjoria Shoppe curates slow fashion and considered objects with a warm ivory palette,
                softened structure, and a pace that feels intentionally unhurried.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/">Explore the collection</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#story">Read the brand story</a>
              </Button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="paper-panel soft-stroke rounded-lg p-6 sm:p-8">
              <div className="grid gap-6">
                <div className="rounded-lg border border-border bg-[linear-gradient(135deg,rgba(19,33,29,0.96),rgba(39,55,49,0.82))] p-8 text-primary-foreground shadow-[var(--shadow-soft)]">
                  <p className="eyebrow text-secondary">Current note</p>
                  <p className="mt-6 max-w-sm font-display text-3xl leading-tight">
                    Soft tailoring, luminous neutrals, and texture that rewards a closer look.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {signatures.map((item) => (
                    <article key={item.title} className="rounded-lg border border-border bg-background/80 p-5">
                      <h3 className="text-2xl leading-tight text-primary">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="border-y border-border/80 bg-accent/40 py-20">
        <div className="container-luxury">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-secondary">Collection</p>
              <h3 className="mt-3 text-4xl leading-tight text-primary sm:text-5xl">
                A restrained wardrobe with a gallery-like calm.
              </h3>
            </div>
            <p className="max-w-xl text-base leading-8 text-muted-foreground">
              Every piece is presented with room around it, letting fabrication, proportion, and finish
              carry the conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {collection.map((item, index) => (
              <article key={item.name} className="rounded-lg border border-border bg-background p-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="eyebrow text-muted-foreground">0{index + 1}</span>
                  <span>{item.price}</span>
                </div>
                <div className="mt-8 rounded-lg border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(239,237,236,0.9))] p-6">
                  <div className="aspect-[4/5] rounded-md border border-border bg-[radial-gradient(circle_at_top,rgba(200,164,107,0.18),transparent_42%),linear-gradient(160deg,rgba(255,255,255,0.7),rgba(228,226,225,0.95))]" />
                </div>
                <h4 className="mt-8 text-3xl leading-tight text-primary">{item.name}</h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="section-stack">
        <div className="container-luxury editorial-grid items-start">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-secondary">Story</p>
            <h3 className="mt-3 text-4xl leading-tight text-primary sm:text-5xl">
              Built like a printed feature, warm to the eye and slow in its pacing.
            </h3>
          </div>

          <div className="col-span-12 grid gap-6 lg:col-span-7">
            <div className="rounded-lg border border-border bg-card p-8">
              <p className="text-base leading-8 text-muted-foreground">
                The Ajjoria identity favors tonal depth over spectacle. Surfaces stay luminous, borders
                remain whisper-soft, and every section is given enough negative space to feel settled.
              </p>
            </div>
            <div id="ritual" className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted/50 p-8">
                <p className="eyebrow text-secondary">Ritual</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Intentional navigation, slower transitions, and uncluttered forms help the browsing
                  experience feel tactile rather than transactional.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-primary p-8 text-primary-foreground">
                <p className="eyebrow text-secondary">Materials</p>
                <p className="mt-4 text-sm leading-7 text-primary-foreground/78">
                  Deep olive, champagne gold, and ivory carry the brand through buttons, panels, and
                  active states without ever tipping into excess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
