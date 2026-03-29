export default function MapLegend() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-md border border-[#E2E8F0] text-xs">
      <h4 className="font-semibold text-[#1A202C] mb-2">Zone Legend</h4>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-4 h-3 rounded-sm bg-[#EF4444] opacity-60" />
          <span className="text-[#64748B]">Total No-Fly</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-3 rounded-sm bg-[#F59E0B] opacity-50" />
          <span className="text-[#64748B]">High Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-3 rounded-sm bg-[#EAB308] opacity-40" />
          <span className="text-[#64748B]">Caution</span>
        </div>
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#E2E8F0]">
          <span className="w-3 h-3 rounded-full bg-[#3B82F6]" />
          <span className="text-[#64748B]">Low Alt</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-[#64748B]">Mid Alt</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
          <span className="text-[#64748B]">High Alt</span>
        </div>
      </div>
    </div>
  );
}
