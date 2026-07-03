import { useState } from 'react'
import {
  PageTitle,
  SectionLabel,
  Card,
  Button,
  Toggle,
  Checkbox,
  QuantityStepper,
  OrderSummary,
} from '../components/ui'

type Line = { name: string; unit: number; emoji: string; qty: number }

const INITIAL: Line[] = [
  { name: 'Bio Bananas', unit: 3.2, emoji: '🍌', qty: 2 },
  { name: 'Whole Milk', unit: 1.6, emoji: '🥛', qty: 1 },
  { name: 'Free-range Eggs', unit: 5.9, emoji: '🥚', qty: 1 },
]

const chf = (n: number) => `CHF ${n.toFixed(2)}`

export default function BasketPage() {
  const [lines, setLines] = useState(INITIAL)
  const [leaveAtDoor, setLeaveAtDoor] = useState(true)
  const [addCutlery, setAddCutlery] = useState(false)

  const setQty = (i: number, qty: number) =>
    setLines((prev) => prev.map((l, idx) => (idx === i ? { ...l, qty } : l)))

  const subtotal = lines.reduce((sum, l) => sum + l.unit * l.qty, 0)
  const delivery = 5.9
  const total = subtotal + delivery

  return (
    <>
      <PageTitle>Basket</PageTitle>

      <SectionLabel>
        {lines.reduce((n, l) => n + l.qty, 0)} items
      </SectionLabel>
      <div className="space-y-3 px-4">
        {lines.map((l, i) => (
          <Card key={l.name} className="flex items-center gap-3 p-3">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[14px] bg-sand text-3xl">
              {l.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-extrabold text-ink">{l.name}</div>
              <div className="font-display text-[16px] font-bold text-forest">
                {chf(l.unit * l.qty)}
              </div>
            </div>
            <QuantityStepper
              value={l.qty}
              onChange={(q) => setQty(i, q)}
              label={`Quantity of ${l.name}`}
            />
          </Card>
        ))}
      </div>

      <SectionLabel>Delivery options</SectionLabel>
      <div className="px-4">
        <Card className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-semibold text-ink">Leave at door</span>
            <Toggle checked={leaveAtDoor} onChange={setLeaveAtDoor} label="Leave at door" />
          </div>
          <div className="border-t border-hairline" />
          <Checkbox
            checked={addCutlery}
            onChange={setAddCutlery}
            label="Add reusable cutlery (+CHF 0.50)"
          />
        </Card>
      </div>

      <SectionLabel>Summary</SectionLabel>
      <div className="px-4">
        <OrderSummary
          rows={[
            { label: 'Subtotal', value: chf(subtotal) },
            { label: 'Delivery', value: chf(delivery) },
          ]}
          total={{ label: 'Total', value: chf(total) }}
        />
      </div>

      <div className="px-4 pt-5">
        <Button variant="checkout">Checkout · {chf(total)}</Button>
      </div>

      <div className="h-28" />
    </>
  )
}
