import axios from "axios";
import { useEffect, useState } from "react";
import { IShipment } from "../interfaces";

const useGetShipment = (
  shipmentNumber: number | undefined
): [
  IShipment | undefined,
  React.Dispatch<React.SetStateAction<IShipment | undefined>>
] => {
  //   7234258, 13737343, 67151313;6741696 1892811
  // 6751226; create
  //13737343 cancellation

  const [shipment, setShipment] = useState<IShipment | undefined>(undefined);
  const URL = `https://tracking.bosta.co/shipments/track/${
    shipmentNumber ? shipmentNumber : ""
  }`;
  useEffect(() => {
    const getShipment = async () => {
      try {
        const response = await axios.get(URL);
        setShipment(response.data);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    getShipment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shipmentNumber]);

  return [shipment, setShipment];
};

export default useGetShipment;
