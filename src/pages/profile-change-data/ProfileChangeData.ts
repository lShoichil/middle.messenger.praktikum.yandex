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
      id: "email",
      name: "email",
      value: user.email,
    }),
    loginInput: Input({
      label: "Логин",
      type: "text",
      id: "login",
      name: "login",
      value: user.login,
    }),
    firstNameInput: Input({
      label: "Имя",
      type: "text",
      id: "first_name",
      name: "first_name",
      value: user.firstName,
    }),
    lastNameInput: Input({
      label: "Фамилия",
      type: "text",
      id: "second_name",
      name: "second_name",
      value: user.lastName,
    }),
    chatNameInput: Input({
      label: "Имя в чате",
      type: "text",
      id: "chat_name",
      name: "chat_name",
      value: user.chatName,
    }),
    phoneInput: Input({
      label: "Телефон",
      type: "tel",
      id: "phone",
      name: "phone",
      value: user.phone,
    }),
    saveButton: Button({
      text: "Сохранить",
      type: "button",
    }),
  });
};
