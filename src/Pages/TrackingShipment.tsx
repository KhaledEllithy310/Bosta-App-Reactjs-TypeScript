/* eslint-disable @typescript-eslint/no-unused-vars */
import ShipmentInfo from "../Components/ShipmentInfo/ShipmentInfo";
import TimeLineShipment from "../Components/TimeLineShipment/TimeLineShipment";
import ShipmentInfoSkeleton from "../Components/Ui/ShipmentInfoSkeleton";
import useGetShipment from "../Hooks/useGetShipment";

const TrackingShipment = () => {
  const [shipment] = useGetShipment();
  console.log(shipment);

  return (
    <section className="container my-6">
      <section>
        {shipment ? (
          <ShipmentInfo shipment={shipment} />
        ) : (
          <ShipmentInfoSkeleton />
        )}{" "}
      </section>

      <section>
        {shipment ? (
          <TimeLineShipment shipmentStatus={shipment.CurrentStatus} />
        ) : (
          <ShipmentInfoSkeleton />
        )}{" "}
      </section>
    </section>
  );
};

export default TrackingShipment;
