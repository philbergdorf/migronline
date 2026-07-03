import { PageTitle, ProfileButton, SectionLabel, Card, Button, Badge, ProductCard } from '../components/ui'

const COLLECTIONS = [
  { title: 'New & trending', sub: '32 products', emoji: '✨', gradient: 'from-citrus/30 to-primary/20' },
  { title: 'Regional favourites', sub: 'From your canton', emoji: '🏔️', gradient: 'from-primary/25 to-forest/15' },
  { title: 'On offer', sub: 'Up to 30% off', emoji: '🏷️', gradient: 'from-tomato/25 to-berry/15' },
]

const PICKS = [
  { name: 'Strawberries', sub: '500 g · Swiss', price: 'CHF 4.50', emoji: '🍓', badge: <Badge tone="fresh">Fresh</Badge>, gradient: 'from-berry/20 to-tomato/20' },
  { name: 'Avocado', sub: 'Ripe & ready', price: 'CHF 2.20', emoji: '🥑', badge: <Badge tone="sale">-20%</Badge>, gradient: 'from-primary/25 to-citrus/20' },
]

export default function DiscoverPage() {
  return (
    <>
      <PageTitle action={<ProfileButton />}>Discover</PageTitle>

      {/* Hero promo */}
      <div className="px-4">
        <Card className="overflow-hidden !border-0 !bg-forest !shadow-cta">
          <div className="p-5 text-white">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/70">
              Seasonal
            </span>
            <h2 className="mt-1 font-display text-[24px] font-bold">Swiss summer harvest</h2>
            <p className="mt-1 text-[15px] text-white/85">
              Berries, stone fruit &amp; fresh herbs — picked this week
            </p>
            <Button variant="secondary" className="mt-4">
              Explore
            </Button>
          </div>
        </Card>
      </div>

      <SectionLabel>Collections</SectionLabel>
      <div className="space-y-3 px-4">
        {COLLECTIONS.map((c) => (
          <Card key={c.title} className="flex items-center gap-4 p-3">
            <div
              className={`grid h-16 w-16 shrink-0 place-items-center rounded-[16px] bg-gradient-to-br ${c.gradient} text-3xl`}
            >
              {c.emoji}
            </div>
            <div>
              <div className="text-[16px] font-extrabold text-ink">{c.title}</div>
              <div className="text-[13px] font-bold text-label">{c.sub}</div>
            </div>
          </Card>
        ))}
      </div>

      <SectionLabel>Fresh picks</SectionLabel>
      <div className="grid grid-cols-2 gap-3 px-4">
        {PICKS.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>

      <div className="h-28" />
    </>
  )
}
