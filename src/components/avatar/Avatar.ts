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
      <div class="avatar__overlay">
        <label for="avatar-upload" class="avatar__label">Поменять аватар</label>
        <input type="file" id="avatar-upload" name="avatar" class="avatar__input" accept="image/*" />
      </div>
    </div>
  `;

  return Handlebars.compile(avatarTemplate)(props);
};
