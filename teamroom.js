function createTeamRoom(data, chatId, bot) {
  console.log(data, chatId, bot);
  switch (data) {
    case "stop_create_teamroom":
      bot.sendMessage(chatId, "Process stopped.");
      break;
    case "all_steps_create_teamroom":
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
              ],
            },
          })
        );
      break;
    case "next_step_create_teamroom":
      bot
        .sendMessage(
          chatId,
          'Step 1: To create a teamroom, you can use the widget "DMS" on your homescreen. Simply click on the title “DMS” to open the widget and access all its features.'
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_1.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_teamroom",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step2_create_teamroom",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step2_create_teamroom":
      bot
        .sendMessage(
          chatId,
          'Step 2: Inside the DMS space, you can see all of your teamrooms. To create a new one, you can either click on “+ NEU" sign on the left handside of the screen or you can also click the option "Eintrag Hinzufügen" in the middle of the screen.'
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_2.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_teamroom",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step3_create_teamroom",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step3_create_teamroom":
      bot
        .sendMessage(
          chatId,
          "Step 3:A box to create a new room appears on your screen. Under “Name”, type the name you want to assign to your teamroom and click “Weiter” when you are done."
        )
        .then(() => bot.sendPhoto(chatId, `${__dirname}/Photo_3.jpg`))
        .then(() =>
          bot.sendMessage(chatId, "Next", {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Stop",
                    callback_data: "stop_create_teamroom",
                  },
                  {
                    text: "Next",
                    callback_data: "next_step4_create_teamroom",
                  },
                ],
              ],
            },
          })
        );
      break;
    case "next_step4_create_teamroom":
      bot
        .sendMessage(
          chatId,
          "Voilá! Your teamroom has been created and you can now see it within your DMS space."
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
              ],
            },
          })
        );
      break;
    default:
      bot.sendMessage(chatId, "Invalid command.");
  }
}

module.exports = createTeamRoom;
