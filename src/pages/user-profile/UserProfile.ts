import Handlebars from "handlebars";
import "./UserProfile.pcss";
import { Avatar, FormTitle, Link, ProfileListItem } from "../../components";
import { User } from "data";

interface IProps {
  user: User;
}

export const UserProfilePage = ({ user }: IProps) => {
  const profileData = [
    { label: "Почта", value: "pochta@yandex.ru" },
    { label: "Логин", value: "ivanivanov" },
    { label: "Имя", value: "Иван" },
    { label: "Фамилия", value: "Иванов" },
    { label: "Имя в чате", value: "Иван" },
    { label: "Телефон", value: "+7 (909) 967 30 30" },
  ];

  const profileList = profileData.map((item) => ProfileListItem(item)).join("");

  const profileLinks = [
    { text: "Изменить данные", href: "#edit-profile" },
    { text: "Изменить пароль", href: "#edit-password" },
    { text: "Выйти", href: "#logout", className: "link--logout" },
  ];

  const profileLinksHTML = profileLinks.map((link) => Link(link)).join("");

  const userProfileTemplate = `
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
   `;

  return Handlebars.compile(userProfileTemplate)({
    avatar: Avatar({ imageUrl: user.avatarUrl }),
    title: FormTitle({ text: user.chatName }),
  });
};
