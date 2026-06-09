import { useTranslation } from "react-i18next";
import LinkButton from "../../../components/LinkButton";

const BasicInfo = () => {
  const { t } = useTranslation();

  return (
    <div
      id="about-me"
      className="gap-base-sm flex w-full h-full flex-col sm:flex-row"
    >
      <div className="w-full rounded-base p-base-sm border border-gray-neutral-300 backdrop-blur-base ">
        <div className="h-full flex flex-col justify-between gap-base">
          <h1 className="text-4xl">{t("basicInfo.title")} 👋</h1>
          <div className="space-y-1 text-xl ">
            <p>{t("basicInfo.description.1")} 🇨🇿</p>
            <p>{t("basicInfo.description.2")}</p>
          </div>
          <LinkButton href="mailto:tim.simon@seznam.cz">
            {t("contactMe")}
          </LinkButton>
        </div>
      </div>
      {/* <div>
        <img
          src="https://artist-production.de/de/wp-content/uploads/sites/4/2026/02/anton-tschernjak-krovostok.jpg"
          className="h-full rounded-base object-cover border border-gray-neutral-300 w-full max-h-120 sm:max-h-none"
        />
      </div> */}
    </div>
  );
};

export default BasicInfo;
