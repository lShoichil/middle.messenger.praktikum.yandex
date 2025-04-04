import Handlebars from "handlebars";
import "../profile-change-data/ProfileChangeData.pcss";
import { User } from "../../data";
import { Avatar, BackProfileBlock, Button, FormTitle, Input } from "../../components";

interface IProps {
  user: User;
}

export const ProfileChangePasswordPage = ({ user }: IProps) => {
  const profileChangePasswordTemplate = `
  <div>
    {{{backProfileBlock}}}
    <div class="user-profile">
      {{{avatar}}}
      {{{title}}}
      <div class="user-profile__info">
        <form>
          {{{oldPasswordInput}}}
          {{{newPasswordInput}}}
          {{{newPasswordRepeatInput}}}
        </form>
      </div>
      <div class="user-profile__actions">
        {{{saveButton}}}
      </div>
    </div>
  </div>
`;

  return Handlebars.compile(profileChangePasswordTemplate)({
    backProfileBlock: BackProfileBlock,
    avatar: Avatar({ imageUrl: user.avatarUrl }),
    title: FormTitle({ text: user.chatName }),
    oldPasswordInput: Input({
      id: "oldPasswordInput",
      name: "password",
      label: "Старый пароль",
      type: "text",
      placeholder: "Введите пароль",
      value: user.password,
    }),
    newPasswordInput: Input({
      id: "newPasswordInput",
      name: "password",
      label: "Новый пароль",
      type: "password",
      placeholder: "Введите пароль",
    }),
    newPasswordRepeatInput: Input({
      id: "newPasswordRepeatInput",
      name: "password",
      label: "Повторите новый пароль",
      type: "password",
      placeholder: "Введите пароль",
    }),
    saveButton: Button({
      text: "Сохранить",
      type: "button",
    }),
  });
};
