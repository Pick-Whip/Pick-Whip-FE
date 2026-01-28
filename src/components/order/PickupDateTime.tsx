import { useState } from 'react'
import { Calendar } from 'lucide-react'

const times = ['10:00', '11:00', '12:00', '13:00', '14:00']

export default function PickupDateTime() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  return (
    <section className="mb-6 border-b border-[var(--color-main-pink-30)] pb-6">
      <span className="block pb-3 text-[17px] font-semibold text-[#364153]">픽업 날짜 및 시간</span>

      <span className="block mb-1 text-[12px] text-[#4A5565]">날짜 선택</span>
      <button className="mb-4 w-full rounded-xl bg-white px-4 py-3 text-left flex items-center">
        <Calendar size={20} className="mr-2" />
        <span className="text-[14px]">2025.12.24 (수)</span>
      </button>

      <span className="block mb-1 text-[12px] text-[#4A5565]">시간 선택</span>
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {times.map((time) => {
          const isSelected = selectedTime === time

          return (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`
                flex-shrink-0 rounded-xl px-4 py-2 !text-[12px] transition
                ${
                  isSelected
                    ? 'bg-white border border-[#FF9886] text-[#364153]'
                    : 'bg-[#EFEFEF] text-[#364153]'
                }
              `}
            >
              {time}
            </button>
          )
        })}
      </div>
    </section>
  )
}
