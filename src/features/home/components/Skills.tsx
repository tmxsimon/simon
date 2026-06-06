import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import Icon from "../../../components/Icon";
import type { iconsType } from "../../../types";

type SkillProps = {
  name: string;
  iconName: iconsType;
};

const Skill = ({ name, iconName }: SkillProps) => {
  return (
    <div className="flex-1 h-12 flex gap-2 items-center p-2 border-gray-neutral-300 border backdrop-blur-base rounded-base-sm">
      <Icon name={iconName} className="size-6 text-transparent" />
      <div>{name}</div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id="skills">
      <Title>🛠️ {t("skills.skills")}</Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-base-sm w-full">
        <Skill name="TypeScript" iconName="typescript" />
        <Skill name="React" iconName="react" />
        <Skill name="React Native" iconName="reactNative" />
        <Skill name="Tailwind" iconName="tailwind" />
        <Skill name="Python" iconName="python" />
        <Skill name="FastAPI" iconName="fastapi" />
        <Skill name="HTML" iconName="html" />
        <Skill name="CSS" iconName="css" />
        <Skill name="Git" iconName="git" />
        <Skill name="PostgreSQL" iconName="postgresql" />
        <Skill name="Figma" iconName="figma" />
        <Skill name="WordPress" iconName="wordpress" />
      </div>
    </div>
  );
};

export default Skills;
