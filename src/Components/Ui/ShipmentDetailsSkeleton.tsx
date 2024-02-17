export default function ShipmentDetailsSkeleton() {
  return (
    <div className="skeleton-container">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="skeleton-row">
          <div className="flex-1 bg-gray-200 h-6"></div>
          <div className="flex-1 bg-gray-200 h-6"></div>
          <div className="flex-1 bg-gray-200 h-6"></div>
          <div className="flex-1 bg-gray-200 h-6"></div>
        </div>
      ))}
    </div>
  );
}
