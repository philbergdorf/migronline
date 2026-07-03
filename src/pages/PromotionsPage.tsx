import { useState } from 'react'
import { PageTitle, SectionLabel, Card, Button, Badge, FilterChips, ProductCard } from '../components/ui'

const FILTERS = ['All', 'Fruit & Veg', 'Dairy', 'Bakery', 'Snacks']

const DEALS = [
  { name: 'Cherry Tomatoes', sub: '250 g', price: 'CHF 2.24', emoji: '🍅', badge: <Badge tone="sale">-20%</Badge>, gradient: 'from-tomato/25 to-berry/15' },
  { name: 'Avocado', sub: 'Ripe & ready', price: 'CHF 1.76', emoji: '🥑', badge: <Badge tone="sale">-20%</Badge>, gradient: 'from-primary/25 to-citrus/20' },
  { name: 'Dark Chocolate', sub: '100 g · 70%', price: 'CHF 2.04', emoji: '🍫', badge: <Badge tone="sale">-15%</Badge>, gradient: 'from-berry/20 to-forest/15' },
  { name: 'Greek Yoghurt', sub: '500 g', price: 'CHF 2.60', emoji: '🥛', badge: <Badge tone="sale">-30%</Badge>, gradient: 'from-primary/15 to-sand' },
]

export default function PromotionsPage() {
  const [filter, setFilter] = useState('All')

  return (
    <>
      <PageTitle>Promotions</PageTitle>

      {/* Hero deal banner */}
      <div className="px-4">
        <Card className="overflow-hidden !border-0 !bg-tomato !shadow-cta">
          <div className="p-5 text-white">
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/80">
              This weekend
            </span>
            <h2 className="mt-1 font-display text-[24px] font-bold">Up to 30% off</h2>
            <p className="mt-1 text-[15px] text-white/90">
              Fresh deals on your favourites — Fri to Sun only
            </p>
            <Button variant="secondary" className="mt-4 !text-tomato">
              Shop deals
            </Button>
          </div>
        </Card>
      </div>

      {/* Cumulus points nudge */}
      <div className="px-4 pt-3">
        <Card className="flex items-center gap-4 p-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/15 text-2xl">
            🎁
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-extrabold text-ink">10× Cumulus points</div>
            <div className="text-[13px] font-bold text-label">On all bakery items today</div>
          </div>
          <Badge tone="citrus">New</Badge>
        </Card>
      </div>

      <FilterChips items={FILTERS} value={filter} onChange={setFilter} />

      <SectionLabel>Today's deals</SectionLabel>
      <div className="grid grid-cols-2 gap-3 px-4">
        {DEALS.map((d) => (
          <ProductCard key={d.name} {...d} />
        ))}
      </div>

      <div className="h-28" />
    </>
  )
}
