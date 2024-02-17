import { Search } from "@mui/icons-material";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { changeTextDirection } from "../../helpers/Functions";
import { useSelector } from "react-redux";
import { langSelector } from "../../RTK/features/LangSlice/LangSlice";

export default function ErrorShipment() {
  const inputRef = useRef<HTMLInputElement>(null);
  const Navigate = useNavigate();
  const { t } = useTranslation("navbar");
  const { lang } = useSelector(langSelector);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      Navigate(`/tracking-shipment/${+inputRef.current.value}`);
    }
    e.currentTarget.reset();
  };

  return (
    <section className="w-1/4 mx-auto my-10">
      <p
        className={`text-xl font-bold capitalize ${changeTextDirection(lang)}`}
      >
        {t("track_your_shipment")}
      </p>
      <form onSubmit={handleSubmit} className="my-2">
        <div className="relative">
          <input
            ref={inputRef}
            name="shipmentNumber"
            type="number"
            className="w-full border-2 rounded-md py-1 px-2"
          />
          <button
            className="absolute z-10 right-0 bg-primary text-white px-2 py-1 rounded-r-md"
            type="submit"
          >
            <Search />
          </button>
        </div>
      </form>
      <p className="bg-red-100 text-black-700 text-sm p-3 rounded-md">
        {t("error_message")}
      </p>
    </section>
  );
}
