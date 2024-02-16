/* eslint-disable @typescript-eslint/no-unused-vars */
import ShipmentInfo from "../Components/ShipmentInfo/ShipmentInfo";
import ShipmentInfoSkeleton from "../Components/Ui/ShipmentInfoSkeleton";
import useGetShipment from "../Hooks/useGetShipment";

const TrackingShipment = () => {
  const [shipment] = useGetShipment();

  return (
    <section className="container my-6">
      {shipment ? (
        <ShipmentInfo shipment={shipment} />
      ) : (
        <ShipmentInfoSkeleton />
      )}{" "}
    </section>
  );
};

export default TrackingShipment;
