import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import reportImg from "/report.webp";
import { changeTextDirection, reverseDirection } from "../../helpers/Functions";
import { langSelector } from "../../RTK/features/LangSlice/LangSlice";
const ShipmentComplain = () => {
  const { lang } = useSelector(langSelector);
  const { t } = useTranslation("shipment");

  return (
    <>
      <h3 className={`capitalize ${changeTextDirection(lang)}`}>
        {t("delivery_address")}
      </h3>

      <section className={`flex flex-col gap-2 ${changeTextDirection(lang)}`}>
        {/* Start Address */}
        <p
          className={`bg-gray-100 text-[13px] font-semibold text-gray-600 rounded-md px-5 py-6 ${
            lang === "ar" ? "text-right" : ""
          }`}
        >
          {t("address")}
        </p>
        {/* End Address */}

        {/* Start Complain */}
        <section
          className={`p-4 text-xs border rounded flex gap-[10px] justify-center items-center ${reverseDirection(
            lang
          )}`}
        >
          <div>
            <img
              src={reportImg}
              alt="Question_mark_icon"
              className="w-20 h-20"
            />
          </div>
          <p className={`flex flex-col gap-[10px]`}>
            <span className="font-bold">{t("shipment_problems")}</span>
            <button className="bg-primary font-normal text-white py-2 rounded-lg">
              {t("report")}
            </button>
          </p>
        </section>
        {/* End Complain */}
      </section>
    </>
  );
};
export default ShipmentComplain;
