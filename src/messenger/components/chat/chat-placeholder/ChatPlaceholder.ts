import Handlebars from "handlebars";
import "./ChatPlaceholder.pcss";

const chatPlaceholderTemplate = `<div class="chat-placeholder">
  Выберите чат, чтобы отправить сообщение
</div>`;

export const ChatPlaceholder = Handlebars.compile(chatPlaceholderTemplate);
