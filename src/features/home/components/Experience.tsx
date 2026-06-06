import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";

type ExperienceItemProps = {
  title: string;
  company?: string;
  duration: string;
  description: string;
};

const ExperienceItem = ({
  title,
  company,
  duration,
  description,
}: ExperienceItemProps) => {
  return (
    <div id="experience" className="grid grid-cols-4 gap-base items-center">
      <div className="text-gray-neutral-400">{duration}</div>
      <div className="col-span-3">
        <div className="gap-2 flex items-center">
          <span className="font-bold text-lg">{title}</span>
          {company && (
            <span className="text-sm text-gray-neutral-400">{company}</span>
          )}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title>💼 {t("experience.experience")}</Title>
      <div className="flex flex-col gap-base">
        <ExperienceItem
          title={t("experience.dieboldNixdorf.title")}
          company={t("experience.dieboldNixdorf.company")}
          duration={t("experience.dieboldNixdorf.duration")}
          description={t("experience.dieboldNixdorf.description")}
        />
        <ExperienceItem
          title={t("experience.vezmiFoto.title")}
          company={t("experience.vezmiFoto.company")}
          duration={t("experience.vezmiFoto.duration")}
          description={t("experience.vezmiFoto.description")}
        />
        <ExperienceItem
          title={t("experience.nightcoders.title")}
          company={t("experience.nightcoders.company")}
          duration={t("experience.nightcoders.duration")}
          description={t("experience.nightcoders.description")}
        />
      </div>
    </div>
  );
};

export default Experience;
