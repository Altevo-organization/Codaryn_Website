interface ProgressBarProps {
  value: number
  showLabel?: boolean
  height?: 'sm' | 'md'
  color?: 'blue' | 'emerald'
}

export default function ProgressBar({
  value,
  showLabel = false,
  height = 'sm',
  color = 'blue',
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))
  const trackHeight = height === 'sm' ? 'h-1' : 'h-2'

  const fillColor =
    color === 'emerald'
      ? 'bg-emerald-500'
      : clampedValue === 100
      ? 'bg-emerald-500'
      : 'bg-[#4F7CFF]'

  return (
    <div className="flex items-center gap-3 w-full">
      <div className={`flex-1 bg-white/5 rounded-full overflow-hidden ${trackHeight}`}>
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${fillColor}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-[#8B93A0] w-8 text-right flex-shrink-0">
          {clampedValue}%
        </span>
      )}
    </div>
  )
}
