import { useState } from 'react'
import { PageTitle, SectionLabel, Badge, FilterChips, ProductCard, DeliverySlotCard } from '../components/ui'

const CATEGORIES = ['All', 'Fruit & Veg', 'Dairy', 'Bakery', 'Drinks', 'Snacks']

const PRODUCTS = [
  { name: 'Bio Bananas', sub: '1 kg · Switzerland', price: 'CHF 3.20', emoji: '🍌', gradient: 'from-citrus/30 to-primary/15' },
  { name: 'Whole Milk', sub: '1 L · UHT', price: 'CHF 1.60', emoji: '🥛', gradient: 'from-primary/15 to-sand' },
  { name: 'Sourdough Bread', sub: '500 g · fresh', price: 'CHF 4.50', emoji: '🍞', badge: <Badge tone="fresh">Fresh</Badge>, gradient: 'from-citrus/25 to-tomato/15' },
  { name: 'Free-range Eggs', sub: '10 pcs', price: 'CHF 5.90', emoji: '🥚', gradient: 'from-sand to-citrus/20' },
  { name: 'Cherry Tomatoes', sub: '250 g', price: 'CHF 2.80', emoji: '🍅', badge: <Badge tone="sale">-20%</Badge>, gradient: 'from-tomato/25 to-berry/15' },
  { name: 'Dark Chocolate', sub: '100 g · 70%', price: 'CHF 2.40', emoji: '🍫', gradient: 'from-berry/20 to-forest/15' },
]

export default function ProductsPage() {
  const [category, setCategory] = useState('All')

  return (
    <>
      <PageTitle>Products</PageTitle>

      <FilterChips items={CATEGORIES} value={category} onChange={setCategory} />

      <div className="px-4 pt-3">
        <DeliverySlotCard />
      </div>

      <SectionLabel>Popular this week</SectionLabel>
      <div className="grid grid-cols-2 gap-3 px-4">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>

      <div className="h-28" />
    </>
  )
}
