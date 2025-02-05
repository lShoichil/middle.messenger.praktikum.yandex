import Handlebars from "handlebars";
import "./BackProfileBlock.pcss";
import { BackButton } from "./../../components";

export const BackProfileBlock = () => {
  const backProfileBlockTemplate = `
  <div class="back-profile-block">
    {{{backButton}}}
  </div>
`;

  return Handlebars.compile(backProfileBlockTemplate)({
    backButton: BackButton,
  });
};
