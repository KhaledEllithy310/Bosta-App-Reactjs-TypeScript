import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { IShipment } from "../../interfaces";
import {
  changeTextDirection,
  dateFormat,
  timeFormat,
} from "../../helpers/Functions";
import { langSelector } from "../../RTK/features/LangSlice/LangSlice";

interface IProps {
  shipment: IShipment | undefined;
}
const ShipmentDetails = ({ shipment }: IProps) => {
  const { t } = useTranslation("shipment");
  const { lang } = useSelector(langSelector);
  const tableHead = [t("branch"), t("date"), t("time"), t("details")];

  return (
    <>
      <h3 className={`${changeTextDirection(lang)}`}>
        {t("shipment_details")}
      </h3>
      <section className="overflow-auto outline outline-1 outline-gray-200 rounded-md">
        <table className="w-full text-xs">
          {/* Start Header */}
          <thead className="bg-gray-200 ">
            <tr
              className={`bg-gray-100 border-gray-200 border-b-[1px] text-slate-400 ${changeTextDirection(
                lang
              )} `}
            >
              {lang === "ar"
                ? tableHead.reverse().map((item) => (
                    <th key={item} className="p-4">
                      {item}
                    </th>
                  ))
                : tableHead.map((item) => (
                    <th
                      key={item}
                      className={`p-4 ${item === t("details") ? "w-1/2" : ""}`}
                    >
                      {item}
                    </th>
                  ))}
            </tr>
          </thead>
          {/* End Header */}

          {/* Start Body */}
          <tbody className="divide-y divide-gray-200">
            {shipment
              ? shipment.TransitEvents?.map((event) =>
                  lang === "en" ? (
                    <tr key={event.timestamp}>
                      <td className="p-5">مدينة نصر</td>
                      <td className="p-5">{dateFormat(event.timestamp)}</td>
                      <td className="p-5 lowercase ">
                        {timeFormat(event.timestamp)}
                      </td>
                      <td className="p-5">{t(`${event.state}`)}</td>
                    </tr>
                  ) : (
                    <tr key={event.timestamp}>
                      <td className="text-right p-5">{t(`${event.state}`)}</td>
                      <td className="text-right p-5 lowercase">
                        {timeFormat(event.timestamp)}
                      </td>
                      <td className="text-right p-5">
                        {dateFormat(event.timestamp)}
                      </td>
                      <td className="text-right p-5">مدينة نصر</td>
                    </tr>
                  )
                )
              : ""}
          </tbody>
          {/* End Body */}
        </table>
      </section>
    </>
  );
};

export default ShipmentDetails;
