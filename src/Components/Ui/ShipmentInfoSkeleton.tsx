const ShipmentInfoSkeleton = () => {
  return (
    <section className="flex flex-col gap-2 border py-3 px-2.5 rounded-t-md">
      {/* Skeleton loading for header */}
      <div className="animate-pulse flex justify-between items-center text-sm text-neutral-500">
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
      </div>
      {/* Skeleton loading for body */}
      <div className="animate-pulse flex justify-between items-center font-bold text-black text-sm">
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
        <div className="flex-1 bg-gray-200 h-4"></div>
      </div>
    </section>
  );
};

export default ShipmentInfoSkeleton;
