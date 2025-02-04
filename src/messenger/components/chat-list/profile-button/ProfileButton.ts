import Handlebars from "handlebars";
import "./ProfileButton.pcss";

const profileButtonTemplate = `<div class="profile-button">
  <a href="/profile">Профиль ></a>
</div>`;

export const ProfileButton = Handlebars.compile(profileButtonTemplate);
