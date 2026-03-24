'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'

interface SpendData {
  month: string
  amount: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: { value: number }[]
  label?: string
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#16191f] border border-white/[0.08] rounded-xl px-3.5 py-2.5 shadow-xl">
      <p className="text-[11px] text-[#555E6B] mb-1">{label}</p>
      <p className="text-sm font-semibold text-[#F0F2F5]">
        {payload[0].value.toLocaleString('fr-FR')} €
      </p>
    </div>
  )
}

export default function SpendChart({ data }: { data: SpendData[] }) {
  const max = Math.max(...data.map((d) => d.amount))

  return (
    <ResponsiveContainer width="100%" height={140}>
      <BarChart data={data} barCategoryGap="30%" margin={{ top: 0, right: 0, left: -24, bottom: 0 }}>
        <XAxis
          dataKey="month"
          tick={{ fill: '#555E6B', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: '#555E6B', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.amount === max ? '#4F7CFF' : 'rgba(79,124,255,0.25)'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
