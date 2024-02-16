import { useTranslation } from "react-i18next";
import { IShipment } from "../../interfaces";
import { useSelector } from "react-redux";
import { langSelector } from "../../RTK/shipment/shipment";
import {
  PromisedDateHandler,
  changeTextDirection,
  lastDateHandler,
  reverseDirection,
  shipmentStatusHandler,
} from "../../helpers/Functions";
interface IProps {
  shipment: IShipment;
}
const ShipmentInfo = ({ shipment }: IProps) => {
  const { t } = useTranslation("shipment");
  const { lang } = useSelector(langSelector);

  return shipment ? (
    <section className="flex flex-col gap-2 border py-3 px-2.5 rounded-t-md">
      {/* Start Shipment Info Header */}
      <div
        className={`shipment-info-header flex flex-col gap-5 sm:${reverseDirection(
          lang
        )} ${changeTextDirection(
          lang
        )} justify-between items-center text-sm text-neutral-500`}
      >
        <div className="flex flex-col gap-2">
          <p className="flex-1 gap-1">
            <span>{t("shipment_number")}</span>
            <span className="text-xs"> {shipment?.TrackingNumber}</span>
          </p>
          <p
            className="flex-1 font-bold"
            style={{
              color: shipment?.CurrentStatus
                ? shipmentStatusHandler(shipment?.CurrentStatus.state)?.color
                : "red",
            }}
          >
            {t(shipment?.CurrentStatus.state)}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex-1 text-center">{t("last_update")}</p>
          <p className="flex-1 font-bold text-black">
            {lastDateHandler(
              shipment.TransitEvents[shipment.TransitEvents.length - 1]
                .timestamp,
              lang
            )}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex-1 text-center">{t("provider")}</p>
          <p className="flex-1 font-bold text-black text-center">
            {shipment?.provider}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex-1 text-center">{t("Promised_date")}</p>
          <p className="flex-1 font-bold text-black text-center">
            {shipment?.PromisedDate
              ? PromisedDateHandler(shipment?.PromisedDate, lang)
              : PromisedDateHandler("2024-04-20T15:55:30.867Z", lang)}
          </p>
        </div>
      </div>
      {/* End Shipment Info Header */}
      {/* Start Shipment Info Body */}

      {/* <div
        className={`flex ${reverseDirection(lang)} ${changeTextDirection(
          lang
        )} justify-between items-center font-bold text-black text-sm`}
      ></div> */}
      {/* End Shipment Info Body */}
    </section>
  ) : (
    ""
  );
};

export default ShipmentInfo;
