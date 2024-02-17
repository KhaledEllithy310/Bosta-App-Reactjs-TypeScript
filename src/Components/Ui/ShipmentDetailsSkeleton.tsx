export default function ShipmentDetailsSkeleton() {
  return (
    <section className="flex flex-col gap-2 border py-3 px-2.5 rounded-t-md">
      <div className="animate-pulse flex justify-between items-center text-sm text-neutral-500">
        <div className="flex-1 bg-gray-200 h-8"></div>
        <div className="flex-1 bg-gray-200 h-8"></div>
        <div className="flex-1 bg-gray-200 h-8"></div>
        <div className="flex-1 bg-gray-200 h-8"></div>
      </div>
    </section>
  );
}
