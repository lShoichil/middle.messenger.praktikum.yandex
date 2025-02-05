import Handlebars from "handlebars";
import "./Avatar.pcss";

interface IProps {
  imageUrl?: string;
}

export const Avatar = (props: IProps) => {
  const avatarTemplate = `
    <div class="avatar">
      {{#if imageUrl}}
        <img src="{{imageUrl}}" alt="Avatar" class="avatar__image" />
      {{/if}}
      <div class="avatar__overlay">Поменять аватар</div>
    </div>
  `;

  return Handlebars.compile(avatarTemplate)(props);
};
