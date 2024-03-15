function sendDocument(data, chatId, bot) {
  console.log(data, chatId, bot);
  switch (data) {
    case "stop_send_document":
      bot.sendMessage(chatId, "Process stopped.");
      break;

    case "send_document":
      bot.sendMessage(
        chatId,
        `Hello! I can help you with that. To send a document, you can follow these steps:`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Show All the Steps",
                  callback_data: "all_steps_send_document",
                },
                {
                  text: "Show Steps One by One",
                  callback_data: "next_step_send_document",
                },
              ],
            ],
          },
        }
      );
      break;

    case "create_teamroom":
      bot.sendMessage(
        chatId,
        `Hello! I can help you with that. To send a document, you can follow these steps:`,
        {
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Show All the Steps",
                  callback_data: "all_steps_send_document",
                },
                {
                  text: "Show Steps One by One",
                  callback_data: "next_step_send_document",
                },
              ],
            ],
          },
        }
      );
      break;
    case "all_steps_send_document":
      bot
        .sendMessage(
          chatId,
          "Step 1: To create a teamroom, you can use the widget “DMS” on your homescreen. Simply click on the title “DMS” to open the widget and access all its features."
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_1.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            `Step 2: Inside the DMS space, you can see all of your teamrooms. To create a new one, you can either click on “+ NEU" sign on the left handside of the screen or you can also click the option “Eintrag Hinzufügen” in the middle of the screen.`
          )
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_2.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            "Step 3: A box to create a new room appears on your screen. Under “Name”, type the name you want to assign to your teamroom and click “Weiter” when you are done."
          )
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_3.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            "Voilá! Your teamroom has been created and you can now see it within your DMS space."
          )
        )
        .then(() =>
          bot.sendMessage(chatId, `All Right I hope you did it right!`, {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Show All Steps Again",
                    callback_data: "all_steps_create_teamroom",
                  },
                  {
                    text: "Show All Steps Again one by one",
                    callback_data: "next_step_create_teamroom",
                  },
                ],
                [
                  {
                    text: "Create a Teamroom",
                    callback_data: "create_teamroom",
                  },
                ],
                [
                  {
                    text: "Create a Word Document",
                    callback_data: "create_word_document",
                  },
                ],
                [
                  {
                    text: "Send a Document",
                    callback_data: "send_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step_send_document":
      bot
        .sendMessage(
          chatId,
          `Step 1: Open the location of the document that you want to share as a link (folder or teamroom).`
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_8.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_send_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step2_send_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step2_send_document":
      bot
        .sendMessage(
          chatId,
          `Step 2: Tick the box in front of the document you want to share, to select the document. `
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_9.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_send_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step3_send_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step3_send_document":
      bot
        .sendMessage(
          chatId,
          `Step 3: Click on the “Link Versenden” option on the left handside of your screen. Click only once. Your default email provider will be now opened.`
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_10.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_send_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step4_send_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step4_send_document":
      bot
        .sendMessage(
          chatId,
          `Step 4: Write the email address of the person you want to send the mail to, and change the subject line as needed. The link should have appeared directly into the body of the mail. You can now send the link of the document via your e-mail application regularly.        `
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_11.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            `Voilá! You have sended A DOCUMENT IN E-AKTE!`,
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "Show All Steps Again",
                      callback_data: "all_steps_send_document",
                    },
                    {
                      text: "Show All Steps Again one by one",
                      callback_data: "next_step_send_document",
                    },
                  ],
                  [
                    {
                      text: "Create a Teamroom",
                      callback_data: "create_teamroom",
                    },
                  ],
                  [
                    {
                      text: "Create a Word Document",
                      callback_data: "create_word_document",
                    },
                  ],
                  [
                    {
                      text: "Send a Document",
                      callback_data: "send_document",
                    },
                  ],
                ],
              },
            }
          )
        );
      break;
    default:
      bot.sendMessage(chatId, "Invalid command.");
  }
}

module.exports = sendDocument;
