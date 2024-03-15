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

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  switch (true) {
    case text.includes("hi") ||
      text.includes("hello") ||
      text.includes("hey") ||
      text.includes("yo") ||
      text.includes("sup") ||
      text.includes("howdy") ||
      text.includes("hola") ||
      text.includes("/start"):
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
    default:
      bot.sendMessage(chatId, "Sorry, I don't understand that.");
  }
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  switch (true) {
    case data.includes("create_teamroom"):
      console.log("create_teamroom");
      createTeamRoomChat(data, chatId, bot);
      break;
    default:
      bot.sendMessage(chatId, "Sorry, I don't understand that.");
      break;
  }
});
