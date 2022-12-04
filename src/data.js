import hamza from "../src/assets/hamza.jpg";
import haris from "../src/assets/haris.jpg";
import fahad from "../src/assets/fahad.jpg";
import Arslan from "../src/assets/arslan.jpg";
import waqas from "../src/assets/waqas.jpg";
import haris1 from "../src/assets/haris1.JPG";
const messages = [
  {
    userid: 1,
    username: "Adeel Hamza",
    profileimg: hamza,
    messages: "My name is hamza",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Hamza",
      },
      {
        messageid: 13,
        message: "My name is Hamza",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
    ],
  },
  {
    userid: 2,
    username: "Arslan",
    profileimg: Arslan,
    messages: "My Name is Arslan",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Arslan",
      },
    ],
  },

  {
    userid: 3,
    username: "Waqas",
    profileimg: waqas,
    messages: "My Name is Waqas",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Waqas",
      },
    ],
  },
  {
    userid: 4,
    username: "Fahad",
    profileimg: fahad,
    messages: "My Name is Fahad",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Fahad",
      },
    ],
  },
];
const Data = [
  {
    id: 1,
    title: "Muhammad Haris Ishtiaq",
    subtitle: "Mern Stack Developer",
    profileimg: haris,
    postimg: haris1,
    postDetails: "This is my first post",
    followers: "11000",
    following: "14",
    postImages: [
      {
        postImage: haris1,
      },
      {
        postImage: haris1,
      },
      {
        postImage: haris1,
      },
      {
        postImage: haris1,
      },
      {
        postImage: haris1,
      },
      {
        postImage: haris1,
      },
    ],
    comments: [
      {
        username: "Arslan Akmal",
        userimg: Arslan,
        coment: "He is a good developer",
      },
      {
        username: "Adeel Hamza",
        userimg: hamza,
        coment: "He is a good person",
      },
      {
        username: "Waqas Khaliq",
        userimg: waqas,
        coment: "He is very straight forward person",
      },
      {
        username: "Fahad Raza",
        userimg: fahad,
        coment: "He is a my good friend",
      },
      {
        username: "Fahad Raza",
        userimg: fahad,
        coment: "He is a my good friend",
      },
    ],
  },
  {
    id: 2,
    img: haris,
    title: "Muhammad Arslan Akmal",
    subtitle: "Mean Stack Developer",
    profileimg: Arslan,
    postDetails: "I am a good developer",
    postimg: Arslan,
    posts: "10",
    followers: "800",
    following: "675",
    postImages: [
      {
        postImage: Arslan,
      },
      {
        postImage: Arslan,
      },
      {
        postImage: Arslan,
      },
      {
        postImage: Arslan,
      },
    ],
    comments: [
      {
        username: "Haris Ishtiaq",
        userimg: haris,
        coment: "He is a good developer",
      },
      {
        username: "Adeel Hamza",
        userimg: hamza,
        coment: "He is a good person",
      },
    ],
  },
  {
    id: 3,
    img: haris,
    title: "Adeel Hamza",
    subtitle: "Php Developer",
    followers: "1100",
    following: "120",
    profileimg: hamza,
    postDetails: "This is my third post",
    postimg: hamza,
    posts: "141",
    postImages: [
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      },
    ],
    comments: [
      {
        username: "Arslan Akmal",
        userimg: Arslan,
        coment: "He is a good developer",
      },
      {
        username: "Haris Ishtiaq",
        userimg: haris,
        coment: "He is a good person",
      },
      {
        username: "Waqas Khaliq",
        userimg: waqas,
        coment: "He is very straight forward person",
      },
    ],
  },
  {
    id: 4,
    img: haris,
    title: "Waqas Ahmad",
    subtitle: "Python Developer",
    posts: "124",
    profileimg: waqas,
    postimg: waqas,
    postDetails: "This is me Waqas",
    followers: "800",
    following: "657",
    postImages: [
      {
        postImage: waqas,
      },
      {
        postImage: waqas,
      },
    ],
    comments: [
      {
        username: "Arslan Akmal",
        userimg: Arslan,
        coment: "He is a good developer",
      },

      {
        username: "Fahad Raza",
        userimg: fahad,
        coment: "He is a my good friend",
      },
    ],
  },
  {
    id: 5,
    img: haris,
    title: "Fahad",
    subtitle: "Wordpress Developer",
    profileimg: fahad,
    postimg: fahad,
    postDetails: "This is myself",
    posts: "14",
    followers: "1500",
    following: "1202",
    postImages: [
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
    ],
    comments: [
      {
        username: "Arslan Akmal",
        userimg: Arslan,
        coment: "He is a good developer",
      },
      {
        username: "Adeel Hamza",
        userimg: hamza,
        coment: "He is a good person",
      },
      {
        username: "Waqas Khaliq",
        userimg: waqas,
        coment: "He is very straight forward person",
      },
      {
        username: "Haris Ishtiaq",
        userimg: fahad,
        coment: "He is a my good friend",
      },
    ],
  },
];

export { messages, Data };
