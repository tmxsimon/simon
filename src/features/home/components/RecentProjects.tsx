import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import LinkButton from "../../../components/LinkButton";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
  website?: string;
  source?: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tools,
  website,
  source,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="w-full border border-gray-neutral-300 backdrop-blur-base flex flex-col items-center rounded-base-sm p-base">
      <div className="flex flex-col gap-base-sm h-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-68 h-42 ratio-16:9 object-cover rounded-base-sm"
        />
        <div>
          <div className="text-lg font-bold">{title}</div>
          <p>{description}</p>
        </div>
        <div>
          {tools && (
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span key={index} className="text-xs">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {website && (
            <LinkButton size="small" href={website} target="_blank">
              {t("website")}
            </LinkButton>
          )}
          {source && (
            <LinkButton size="small" href={source} target="_blank">
              {t("source")}
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const { t } = useTranslation();

  return (
    <div id="recent-projects">
      <Title>🎯 {t("recentProjects.recentProjects")}</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-base-sm w-full">
        <ProjectCard
          title={t("recentProjects.simon.title")}
          description={t("recentProjects.simon.description")}
          imageUrl="/src/assets/projects/simon.png"
          tools={["Typescript", "React", "Tailwind"]}
          source="https://github.com/tmxsimon/simon"
        />
        <ProjectCard
          title={t("recentProjects.lingvo.title")}
          description={t("recentProjects.lingvo.description")}
          imageUrl="/src/assets/projects/lingvo.png"
          tools={[
            "Typescript",
            "React",
            "Python",
            "FastAPI",
            "Tailwind",
            "SQLite",
          ]}
          source="https://github.com/tmxsimon/lingvo"
        />
      </div>
    </div>
  );
};

export default RecentProjects;
