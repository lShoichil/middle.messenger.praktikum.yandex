import Handlebars from "handlebars";
import "./ProfileListItem.pcss";

interface IProps {
  label: string;
  value: string;
}

const profileListItemTemplate = `
  <div class="profile-list-item">
    <span class="profile-list-item__label">{{label}}</span>
    <span class="profile-list-item__value">{{value}}</span>
  </div>
`;

export const ProfileListItem = (props: IProps) =>
  Handlebars.compile(profileListItemTemplate)(props);
