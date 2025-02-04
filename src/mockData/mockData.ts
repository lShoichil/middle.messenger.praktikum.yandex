import { User, Chat } from "data";

export const users: User[] = [
  { id: 0, name: "Денис" },
  { id: 1, name: "Андрей" },
  { id: 2, name: "Владимир" },
  { id: 3, name: "Анатолий" },
  { id: 4, name: "Екатерина" },
  { id: 5, name: "Игорь" },
];

export const chats: Chat[] = [
  {
    id: 1,
    name: users[1].name,
    participantIds: [users[0], users[1]],
    messages: [
      {
        id: 1,
        author: users[0],
        text: "Привет, как дела?",
        time: new Date(),
      },
      {
        id: 2,
        author: users[1],
        text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
        time: new Date(),
      },
    ],
    lastMessage: {
      id: 2,
      author: users[1],
      text: "Все отлично, спасибо!",
      time: new Date(),
    },
    unreadCount: 1,
  },
  {
    id: 2,
    name: users[2].name,
    participantIds: [users[0], users[2]],
    messages: [
      {
        id: 3,
        author: users[2],
        text: "Пришли фото",
        time: new Date(),
      },
      {
        id: 4,
        author: users[0],
        imageUrl: "https://static.tildacdn.com/tild6535-6136-4162-a361-376135343630/_01.jpg",
        time: new Date(),
      },
    ],
    lastMessage: {
      id: 4,
      author: users[0],
      imageUrl: "https://static.tildacdn.com/tild6535-6136-4162-a361-376135343630/_01.jpg",
      time: new Date(),
    },
    unreadCount: 2,
  },
  {
    id: 3,
    name: "Практикум",
    participantIds: [users[0], users[1], users[3]],
    messages: [
      {
        id: 5,
        author: users[1],
        text: "Привет всем!",
        time: new Date(),
      },
      {
        id: 6,
        author: users[3],
        text: "Привет!",
        time: new Date(),
      },
    ],
    lastMessage: {
      id: 6,
      author: users[3],
      text: "Привет!",
      time: new Date(),
    },
    unreadCount: 3,
  },
  {
    id: 4,
    name: "Памагите",
    participantIds: [users[0], users[3], users[4]],
    messages: [
      {
        id: 7,
        author: users[4],
        text: "У кого есть время на созвон?",
        time: new Date(),
      },
      {
        id: 8,
        author: users[0],
        text: "Я могу через 10 минут",
        time: new Date(),
      },
    ],
    lastMessage: {
      id: 8,
      author: users[0],
      text: "Я могу через 10 минут",
      time: new Date(),
    },
    unreadCount: 0,
  },
];
