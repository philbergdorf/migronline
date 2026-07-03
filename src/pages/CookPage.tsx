import { useState } from 'react'
import { Clock, Flame } from 'lucide-react'
import { PageTitle, SectionLabel, Card, Badge, FilterChips } from '../components/ui'

const FILTERS = ['All', 'Quick', 'Vegetarian', 'Swiss', 'Dessert']

const RECIPES = [
  { name: 'Zürcher Geschnetzeltes', time: '30 min', level: 'Easy', emoji: '🍽️', tag: 'Swiss', gradient: 'from-citrus/25 to-tomato/15' },
  { name: 'Rösti with fried egg', time: '25 min', level: 'Easy', emoji: '🥔', tag: 'Swiss', gradient: 'from-citrus/30 to-primary/15' },
  { name: 'Summer berry tart', time: '50 min', level: 'Medium', emoji: '🥧', tag: 'Dessert', gradient: 'from-berry/20 to-tomato/15' },
  { name: 'Tomato & basil salad', time: '10 min', level: 'Easy', emoji: '🥗', tag: 'Quick', gradient: 'from-primary/25 to-citrus/15' },
]

export default function CookPage() {
  const [filter, setFilter] = useState('All')

  return (
    <>
      <PageTitle>Cook</PageTitle>

      <FilterChips items={FILTERS} value={filter} onChange={setFilter} />

      <SectionLabel>Recipes for tonight</SectionLabel>
      <div className="space-y-3 px-4">
        {RECIPES.map((r) => (
          <Card key={r.name} className="flex items-center gap-4 p-3">
            <div
              className={`grid h-[72px] w-[72px] shrink-0 place-items-center rounded-[16px] bg-gradient-to-br ${r.gradient} text-4xl`}
            >
              {r.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Badge tone="fresh">{r.tag}</Badge>
              </div>
              <div className="mt-1.5 text-[16px] font-extrabold leading-tight text-ink">
                {r.name}
              </div>
              <div className="mt-1 flex items-center gap-4 text-[13px] font-bold text-label">
                <span className="flex items-center gap-1">
                  <Clock size={14} strokeWidth={2.2} /> {r.time}
                </span>
                <span className="flex items-center gap-1">
                  <Flame size={14} strokeWidth={2.2} /> {r.level}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="h-28" />
    </>
  )
}
