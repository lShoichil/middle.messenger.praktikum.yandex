import Handlebars from "handlebars";
import "./UserProfile.pcss";
import {
  Avatar,
  BackProfileBlock,
  FormTitle,
  Link,
  ProfileListItem,
} from "../../components";
import { User } from "data";

interface IProps {
  user: User;
}

export const UserProfilePage = ({ user }: IProps) => {
  const profileData = [
    { label: "Почта", value: user.email },
    { label: "Логин", value: user.login },
    { label: "Имя", value: user.firstName },
    { label: "Фамилия", value: user.lastName },
    { label: "Имя в чате", value: user.chatName },
    { label: "Телефон", value: user.phone },
  ];

  const profileList = profileData.map((item) => ProfileListItem(item)).join("");

  const profileLinks = [
    { text: "Изменить данные", href: "#edit-profile" },
    { text: "Изменить пароль", href: "#edit-password" },
    { text: "Выйти", href: "#logout", className: "link--logout" },
  ];

  const profileLinksHTML = profileLinks.map((link) => Link(link)).join("");

  const userProfileTemplate = `
  <div>
      {{{backProfileBlock}}}
      <div class="user-profile">
        {{{avatar}}}
        {{{title}}}
      <div class="profile-info-list">
        ${profileList}
      </div>
      <div class="profile-actions">
        ${profileLinksHTML}
      </div>
    </div>
  </div>
`;

  return Handlebars.compile(userProfileTemplate)({
    backProfileBlock: BackProfileBlock,
    avatar: Avatar({ imageUrl: user.avatarUrl }),
    title: FormTitle({ text: user.chatName }),
  });
};
