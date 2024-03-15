function createWordDoc(data, chatId, bot) {
  switch (data) {
    case "stop_create_word_docx":
      bot.sendMessage(chatId, "Process stopped.");
      break;
    case "create_word_document":
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
    case "all_steps_create_word_document":
      bot
        .sendMessage(
          chatId,
          "Step 1: To create a document inside a teamroom, open the selected team room by clicking it once."
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_4.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            `Step 2: Once inside the team room, you can now create a new document by selecting one of the following ways: by clicking "+ Neu" on the left hand side, or clicking "Eintrag hinzufügen" in the middle of the screen and select "Neu" from the menu, or by clicking "+" sign on the top right corner.`
          )
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_5.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            "Step 3: In the box that appears on your screen, choose the document type you want to create (e.g.: Microsoft Word) by clicking on it once."
          )
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_6.jpg`))
        .then(() =>
          bot.sendMessage(
            chatId,
            `Step 4: Name your document in the "Name" section  and click "Weiter" to proceed.`
          )
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_7.jpg`))
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
                    callback_data: "all_steps_create_word_document",
                  },
                  {
                    text: "Show All Steps Again one by one",
                    callback_data: "next_step1_create_word_document",
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
    case "next_step_create_word_document":
      bot
        .sendMessage(
          chatId,
          `Step 1: To create a document inside a teamroom, open the selected team room by clicking it once.`
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_4.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_word_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step2_create_word_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step2_create_word_document":
      bot
        .sendMessage(
          chatId,
          `Step 2: Once inside the team room, you can now create a new document by selecting one of the following ways: by clicking "+ Neu" on the left hand side, or clicking "Eintrag hinzufügen" in the middle of the screen and select "Neu" from the menu, or by clicking "+" sign on the top right corner.`
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_5.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_word_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step3_create_word_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step3_create_word_document":
      bot
        .sendMessage(
          chatId,
          "Step 3: In the box that appears on your screen, choose the document type you want to create (e.g.: Microsoft Word) by clicking on it once."
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_6.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_word_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step4_create_word_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step4_create_word_document":
      bot
        .sendMessage(
          chatId,
          `Step 4: Name your document in the "Name" section  and click "Weiter" to proceed`
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_6.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_word_document",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step5_create_word_document",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step5_create_word_document":
      bot
        .sendMessage(chatId, "Voilá! You have created a new empty document.")
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
    default:
      bot.sendMessage(chatId, "Invalid command.");
  }
}
module.exports = createWordDoc;
