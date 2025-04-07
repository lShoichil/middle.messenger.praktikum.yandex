import { User, Chat } from '../data';

export const me: User = {
  id: 0,
  chatName: 'aboba',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
  login: 'ivanivanov',
  password: 'password-strong',
  email: 'pochta@yandex.ru',
  phone: '+7 (909) 967 30 30',
  firstName: 'Иван',
  lastName: 'Иванов'
};

export const users: User[] = [
  {
    id: 0,
    chatName: 'denchik',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'denis123',
    password: 'securePass1',
    email: 'denis@example.com',
    phone: '+7 (903) 111 22 33',
    firstName: 'Денис',
    lastName: 'Петров'
  },
  {
    id: 1,
    chatName: 'andryusha',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'andrey1995',
    password: 'pass1234',
    email: 'andrey@example.com',
    phone: '+7 (904) 222 33 44',
    firstName: 'Андрей',
    lastName: 'Сидоров'
  },
  {
    id: 2,
    chatName: 'vova_best',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'vova007',
    password: 'qwerty',
    email: 'vladimir@example.com',
    phone: '+7 (905) 333 44 55',
    firstName: 'Владимир',
    lastName: 'Кузнецов'
  },
  {
    id: 3,
    chatName: 'tolyan',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'anatoliy_super',
    password: 'admin123',
    email: 'anatoliy@example.com',
    phone: '+7 (906) 444 55 66',
    firstName: 'Анатолий',
    lastName: 'Михайлов'
  },
  {
    id: 4,
    chatName: 'katya_sun',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'ekaterina88',
    password: 'helloWorld',
    email: 'ekaterina@example.com',
    phone: '+7 (907) 555 66 77',
    firstName: 'Екатерина',
    lastName: 'Алексеева'
  },
  {
    id: 5,
    chatName: 'igor_pro',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s',
    login: 'igorx',
    password: 'superSafePass',
    email: 'igor@example.com',
    phone: '+7 (908) 666 77 88',
    firstName: 'Игорь',
    lastName: 'Зайцев'
  }
];

export const chats: Chat[] = [
  {
    id: 1,
    name: users[1].chatName,
    participantIds: [users[0], users[1]],
    messages: [
      {
        id: 1,
        author: users[0],
        text: 'Привет, как дела?',
        time: new Date()
      },
      {
        id: 2,
        author: users[1],
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: new Date()
      }
    ],
    lastMessage: {
      id: 2,
      author: users[1],
      text: 'Все отлично, спасибо!',
      time: new Date()
    },
    unreadCount: 1
  },
  {
    id: 2,
    name: users[2].chatName,
    participantIds: [users[0], users[2]],
    messages: [
      {
        id: 3,
        author: users[2],
        text: 'Пришли фото',
        time: new Date()
      },
      {
        id: 4,
        author: users[0],
        text: 'Лови волка',
        imageUrl: 'https://static.tildacdn.com/tild6535-6136-4162-a361-376135343630/_01.jpg',
        time: new Date()
      }
    ],
    lastMessage: {
      id: 4,
      author: users[0],
      text: 'Лови волка',
      imageUrl: 'https://static.tildacdn.com/tild6535-6136-4162-a361-376135343630/_01.jpg',
      time: new Date()
    },
    unreadCount: 2
  },
  {
    id: 3,
    name: 'Практикум',
    participantIds: [users[0], users[1], users[3]],
    messages: [
      {
        id: 5,
        author: users[1],
        text: 'Привет всем!',
        time: new Date()
      },
      {
        id: 6,
        author: users[3],
        text: 'Привет!',
        time: new Date()
      }
    ],
    lastMessage: {
      id: 6,
      author: users[3],
      text: 'Привет!',
      time: new Date()
    },
    unreadCount: 3
  },
  {
    id: 4,
    name: 'Памагите',
    participantIds: [users[0], users[3], users[4]],
    messages: [
      {
        id: 7,
        author: users[4],
        text: 'У кого есть время на созвон?',
        time: new Date()
      },
      {
        id: 8,
        author: users[0],
        text: 'Я могу через 10 минут',
        time: new Date()
      }
    ],
    lastMessage: {
      id: 8,
      author: users[0],
      text: 'Я могу через 10 минут',
      time: new Date()
    },
    unreadCount: 0
  }
];
