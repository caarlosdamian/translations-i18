import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <h1>{t("header.hello-world")}</h1>
      <br />
      <br />
      <div className="buttom-container">
        <button
          className="buttom primary"
          onClick={() => i18n.changeLanguage("es")}
        >
          Spanish
        </button>
        <button
          className="buttom secondary"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
      </div>
    </div>
  );
};
