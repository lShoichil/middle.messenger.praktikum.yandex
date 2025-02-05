import Handlebars from "handlebars";
import "./ProfileChangeData.pcss";
import { User } from "../../data";
import { Avatar, BackProfileBlock, Button, FormTitle, Input } from "../../components";

interface IProps {
  user: User;
}

export const ProfileChangeDataPage = ({ user }: IProps) => {
  const profileChangeDataTemplate = `
  <div>
    {{{backProfileBlock}}}
    <div class="user-profile">
      {{{avatar}}}
      {{{title}}}
      <div class="user-profile__info">
        <form>
          {{{emailInput}}}
          {{{loginInput}}}
          {{{firstNameInput}}}
          {{{lastNameInput}}}
          {{{chatNameInput}}}
          {{{phoneInput}}}
        </form>
      </div>
      <div class="user-profile__actions">
        {{{saveButton}}}
      </div>
    </div>
  </div>
`;

  return Handlebars.compile(profileChangeDataTemplate)({
    backProfileBlock: BackProfileBlock,
    avatar: Avatar({ imageUrl: user.avatarUrl }),
    title: FormTitle({ text: user.chatName }),
    emailInput: Input({
      label: "Почта",
      type: "email",
      name: "email",
      value: user.email,
    }),
    loginInput: Input({
      label: "Логин",
      type: "text",
      name: "login",
      value: user.login,
    }),
    firstNameInput: Input({
      label: "Имя",
      type: "text",
      name: "first_name",
      value: user.firstName,
    }),
    lastNameInput: Input({
      label: "Фамилия",
      type: "text",
      name: "last_name",
      value: user.lastName,
    }),
    chatNameInput: Input({
      label: "Имя в чате",
      type: "text",
      name: "chat_name",
      value: user.chatName,
    }),
    phoneInput: Input({
      label: "Телефон",
      type: "tel",
      name: "phone",
      value: user.phone,
    }),
    saveButton: Button({
      text: "Сохранить",
      type: "button",
    }),
  });
};
