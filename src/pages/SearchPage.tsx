import { useState } from 'react'
import { PageTitle, SectionLabel, SearchField, FilterChips, Badge, ProductCard } from '../components/ui'

const RECENT = ['Bananas', 'Oat milk', 'Rösti', 'Sparkling water']

const SUGGESTED = [
  { name: 'Fresh berries', sub: 'Mixed · 300 g', price: 'CHF 4.90', emoji: '🍓', badge: <Badge tone="fresh">Fresh</Badge>, gradient: 'from-berry/20 to-tomato/15' },
  { name: 'Swiss cheese', sub: 'Gruyère · 200 g', price: 'CHF 6.20', emoji: '🧀', gradient: 'from-citrus/25 to-primary/15' },
  { name: 'Pasta', sub: 'Penne · 500 g', price: 'CHF 1.80', emoji: '🍝', gradient: 'from-citrus/30 to-sand' },
  { name: 'Dark chocolate', sub: '100 g · 70%', price: 'CHF 2.40', emoji: '🍫', badge: <Badge tone="sale">-15%</Badge>, gradient: 'from-berry/20 to-forest/15' },
]

export default function SearchPage() {
  const [query, setQuery] = useState('')

  return (
    <>
      <PageTitle>Search</PageTitle>

      <div className="px-4">
        <SearchField
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products & recipes"
        />
      </div>

      <SectionLabel>Recent</SectionLabel>
      <FilterChips items={RECENT} value="" onChange={setQuery} />

      <SectionLabel>Suggested</SectionLabel>
      <div className="grid grid-cols-2 gap-3 px-4">
        {SUGGESTED.map((s) => (
          <ProductCard key={s.name} {...s} />
        ))}
      </div>

      <div className="h-28" />
    </>
  )
}
