import axios from "axios";
import { useEffect, useState } from "react";
import { IShipment } from "../interfaces";

const useGetShipment = (
  shipmentNumber: number = 67151313
): [
  IShipment | undefined,
  React.Dispatch<React.SetStateAction<IShipment | undefined>>
] => {
  //   7234258, 13737343, 67151313;6741696
  const [shipment, setShipment] = useState<IShipment | undefined>(undefined);
  const URL = `https://tracking.bosta.co/shipments/track/${shipmentNumber}`;
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
  }, [shipmentNumber]);

  return [shipment, setShipment];
};

export default useGetShipment;
