import { useTranslation } from "react-i18next";
import Icon from "../../../components/Icon";
import Title from "../../../components/Title";
import type { iconsType } from "../../../types";

type ContactLinkProps = {
  url: string;
  iconName: iconsType;
  iconFill?: string;
};

const ContactLink = ({ url, iconName, iconFill }: ContactLinkProps) => {
  return (
    <a href={url} target="_blank">
      <Icon
        name={iconName}
        className={`size-8 cursor-pointer text-transparent ${iconFill || ""}`}
      />
    </a>
  );
};

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <Title>💬 {t("contact.contact")}</Title>
      <div>
        <div>
          <p>
            {t("contact.text")}{" "}
            <a href="mailto:tim.simon@seznam.cz" className="underline">
              tim.simon@seznam.cz
            </a>
            .
          </p>
        </div>
        <div className="justify-between flex mt-12 gap-base">
          <div className="flex gap-base-sm">
            <ContactLink
              url="https://github.com/tmxsimon"
              iconName="github"
              iconFill="fill-text"
            />
            <ContactLink
              url="https://www.linkedin.com/in/tim-simon-42876b412/"
              iconName="linkedin"
            />
          </div>
          <div>{t("lastUpdated")}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
