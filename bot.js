const TelegramBot = require("node-telegram-bot-api");
const token = "7141119958:AAFSjytH1I-SqkS2zAk9h55JsRzccMHkYYs";
const createTeamRoomChat = require("./teamroom");

const bot = new TelegramBot(token, { polling: true });
const createTeamRoom = [
  "create a teamroom",
  "what is a teamroom",
  "create teamroom",
  "need a teamroom",
  "make a teamroom",
  "why do I need a teamroom",
];

const createWordDocument = [
  "create word document",
  "create a word document",
  "create a new document",
  "create a document",
  "create a docx",
  "create a Microsoft Word document",
  "create a doc",
  "create docx",
  "create a file",
  "create a Microsoft doc file",
  "create a Microsoft docx file",
  "create a docx file",
  "creating a word",
  "creating a document",
  "creating a Microsoft Word",
  "creating a new document",
  "creating a docx",
  "creating a Microsoft Word document",
  "creating a docx file",
  "creating a file",
  "creating doc",
];

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  switch (true) {
    case text === "/start" ||
      text === "help" ||
      text === "hello" ||
      text === "hi" ||
      text === "hey" ||
      text === "yo" ||
      text === "sup" ||
      text === "start" ||
      text === "hola" ||
      text === "bonjour" ||
      text === "ciao" ||
      text === "hallo" ||
      text === "привет":
      bot.sendMessage(chatId, "Hello there!").then(() => {
        bot.sendMessage(
          chatId,
          `Here are all the options you can ask me about:`,
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Create a Teamroom",
                    callback_data: "create_teamroom",
                  },
                ],
              ],
            },
          }
        );
      });
      break;
    case createTeamRoom.some((el) => text.includes(el)):
      bot.sendMessage(
        chatId,
        `Hello! I can help you with that. To create a teamroom, you can follow these steps:`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Show All the Steps",
                  callback_data: "all_steps_create_teamroom",
                },
                {
                  text: "Show Steps One by One",
                  callback_data: "next_step_create_teamroom",
                },
              ],
            ],
          },
        }
      );
      break;
    case createWordDocument.some((el) => text.includes(el)):
      bot.sendMessage(
        chatId,
        `Hello! I can help you with that. To create a word document, you can follow these steps:`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Show All the Steps",
                  callback_data: "all_steps_create_word_document",
                },
                {
                  text: "Show Steps One by One",
                  callback_data: "next_step_create_word_document",
                },
              ],
            ],
          },
        }
      );
      break;
    default:
      bot.sendMessage(chatId, "Sorry, I don't understand that.");
  }
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data.toLowerCase();

  switch (true) {
    case data.includes("create_teamroom"):
      createTeamRoomChat(data, chatId, bot);
      break;
    default:
      bot.sendMessage(chatId, "Sorry, I don't understand that.");
      break;
  }
});
