import { useSelector } from "react-redux";
import ShipmentComplain from "../Components/ShipmentComplain/ShipmentComplain";
import ShipmentDetails from "../Components/ShipmentDetails/ShipmentDetails";
import ShipmentInfo from "../Components/ShipmentInfo/ShipmentInfo";
import TimeLineShipment from "../Components/TimeLineShipment/TimeLineShipment";
import ShipmentInfoSkeleton from "../Components/Ui/ShipmentInfoSkeleton";
import { shipmentSelector } from "../RTK/shipment/shipment";
import ShipmentDetailsSkeleton from "../Components/Ui/ShipmentDetailsSkeleton";

const TrackingShipment = () => {
  const { shipment } = useSelector(shipmentSelector);
  return (
    <section className="container my-6">
      <section>
        {Object.keys(shipment).length ? (
          <ShipmentInfo shipment={shipment} />
        ) : (
          <ShipmentInfoSkeleton />
        )}{" "}
      </section>

      <section>
        {Object.keys(shipment).length ? (
          <TimeLineShipment shipment={shipment} />
        ) : (
          <ShipmentInfoSkeleton />
        )}{" "}
      </section>
      
        <section
          className={`shipment-container flex flex-col md:flex-wrap gap-2 mt-6`}
        >
          <section className="flex-grow space-y-3">
            {Object.keys(shipment).length ? (
              <ShipmentDetails shipment={shipment} />
            ) : (
              <ShipmentDetailsSkeleton />
            )}
          </section>
          <section className="flex-1 space-y-3">
            <ShipmentComplain />
          </section>
        </section>
    </section>
  );
};

export default TrackingShipment;
