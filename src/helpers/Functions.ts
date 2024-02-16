//========== LocalStorage Handlers ===========//

export const storeInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

//========== Style Handlers ===========//

export const reverseDirection = (lang: string) =>
  lang === "en" ? "flex-row" : "flex-row-reverse";

export const changeTextDirection = (lang: string) => {
  if (lang === "ar") return "text-right";
  else return "text-left";
};

export const PromisedDateHandler = (date: string, lang: string) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObj.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", options);
};

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

export const lastDateHandler = (date: string, lang: string) => {
  const dateObject = new Date(date);
  // const day = days[dateObject.toLocaleDateString().getDay()];
  const formattedDay: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };

  const formattedDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedHour: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const arabicDay = dateObject.toLocaleDateString("ar-EG", formattedDay);
  const englishDay = dateObject.toLocaleDateString("en", formattedDay);
  const englishDate = dateObject.toLocaleDateString("en", formattedDate);
  const englishHour = dateObject
    .toLocaleDateString("en", formattedHour)
    .split(",")[1]
    .trim();
  if (lang === "ar") return `at ${englishHour} ${englishDate} ${arabicDay}`;
  else return `${englishDay} ${englishDate} at ${englishHour}`;
};
