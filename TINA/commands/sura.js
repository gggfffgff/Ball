module.exports.config = {
  name: "sura",
  version: "1.2.8",
  hasPermssion: 0,
  credits: "nazrul", //Don't chinge The credit
  description: "all islamick information",
  commandCategory: "Utilities",
  usages: "bani",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  } 
}

module.exports.onLoad = () => {
  let { mkdirSync, existsSync, createWriteStream } = require("fs-extra");
  let request = require("request");
  let dirMaterial = __dirname + `/noprefix/amol/`; 
  if (!existsSync(dirMaterial + "noprefix" + "amol")) mkdirSync(dirMaterial, { recursive: true });

  if (!existsSync(dirMaterial + "nazrulvd.mp4")) request("https://drive.google.com/uc?export=download&id=1AGcuPJI33uxYO7lnyPT11Ugxt066MBIs").pipe(createWriteStream(dirMaterial + "nazrulvd.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd2.mp4")) request("https://drive.google.com/uc?export=download&id=1w2gCFkmZIMFlvQk2GpEbqmJlfRpwuncP").pipe(createWriteStream(dirMaterial + "nazrulvd2.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd3.mp4")) request("https://drive.google.com/uc?export=download&id=1-hKfvNfP_gw26Fvfo9SiL6Aw64xEYE_0").pipe(createWriteStream(dirMaterial + "nazrulvd3.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd4.mp4")) request("https://drive.google.com/uc?export=download&id=1SwEwk8BRXMf33gFPcqY1CzCC0rglvjDH").pipe(createWriteStream(dirMaterial + "nazrulvd4.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd5.mp4")) request("https://drive.google.com/uc?export=download&id=1s8PqjxnN9SKY_oI9jZ9qUVwmb0dMqv7Q").pipe(createWriteStream(dirMaterial + "nazrulvd5.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd6.mp4")) request("https://drive.google.com/uc?export=download&id=1qHSrexa82fvEL-Ie2DpukWFAm4cVi-Tj").pipe(createWriteStream(dirMaterial + "nazrulvd6.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd7.mp4")) request("https://drive.google.com/uc?export=download&id=1Db9m2b1bilsLjuLrCAaazv8xPjx7YFZu").pipe(createWriteStream(dirMaterial + "nazrulvd7.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd8.mp4")) request("https://drive.google.com/uc?export=download&id=1QCKGYeEHLUkscvTw7oydhbFInQJzDNF9").pipe(createWriteStream(dirMaterial + "nazrulvd8.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd9.mp4")) request("https://drive.google.com/uc?export=download&id=10sgcWA8ZQBooPBQM_NzEJ9OrwDl7I5WX").pipe(createWriteStream(dirMaterial + "nazrulvd9.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd10.mp4")) request("https://drive.google.com/uc?export=download&id=18DOIlwqRvo1ye0vWyq6qLopVvCmfAPOE").pipe(createWriteStream(dirMaterial + "nazrulvd10.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd11.mp4")) request("https://drive.google.com/uc?export=download&id=1qVlauSd6bnAJuJ1aLdIf56QwbWEhPrDD").pipe(createWriteStream(dirMaterial + "nazrulvd11.mp4"))

  if (!existsSync(dirMaterial + "nazrulvd12.mp4")) request("https://i.imgur.com/hJ5nfUa.jpg").pipe(createWriteStream(dirMaterial + "nazrulvd12.mp4"))

}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  let { createReadStream } = require("fs-extra");
  let { threadID, messageID, senderID, body } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(body) {

          case "1":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- ফাতেহা\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd.mp4`)
      }, threadID, messageID);
      break;

    case "2":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- কুরাইস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟐\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd2.mp4`)
      },threadID, messageID);
      break;

    case "3":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- আল- লাহাব\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟑\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd3.mp4`)
      }, threadID, messageID); 
      break;

    case "4":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- সূরা হাশর\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟒\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd4.mp4`)
      }, threadID, messageID); 
      break;

    case "5":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "আত-তারিক 𝐍𝐚𝐦𝐞- আত - তারিক\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟓\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd5.mp4`)
      }, threadID, messageID); 
      break;

    case "6":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- ইখলাস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟔\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd6.mp4`)
      }, threadID, messageID); 
      break;

    case "7":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- আল ফালাক\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟕\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd7.mp4`)
      }, threadID, messageID); 
      break;

    case "8":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- নাস\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟖\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd8.mp4`)
      }, threadID, messageID); 
      break;

    case "9":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- সূরা ইয়াছিন\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟗\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd9.mp4`)
      }, threadID, messageID); 
      break;

    case "10":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "𝐍𝐚𝐦𝐞- সূরা আল রহমান\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏𝟎\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd10.mp4`)
      }, threadID, messageID); 
      break;

      case "11":
                api.unsendMessage(handleReply.messageID);
      api.sandmessage({
        body:"𝐍𝐚𝐦𝐞- আয়াতুল কুরসি\n𝐍𝐮𝐦𝐛𝐞𝐫- 𝟏𝟏\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nazrulvd11.mp4`)
      }, threadID, messageID); 
            break;

          default:
        const choose = parseInt(body);
              if (isNaN(body)) return api.sendMessage("•—»✨ Pleaser enter 1 Number ", threadID, messageID);
              if (choose > 11 || choose < 1) return api.sendMessage("•—»✨ Selections  is not in the list", threadID, messageID); 

      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
  let fs = require("fs-extra");
  let { threadID, senderID } = event;
  return api.sendMessage({ body: "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু\n\nকুরআনের ছোট ছোট সূরা দেওয়া \nপছন্দ নাম্বারে রিপ্লাই দিন\n\n𝟏.সূরা ফাতেহা\n𝟐 সূরা কুরাইস\n𝟑.সূরা আল-লহাব\n𝟒.সূরা হাশর\n𝟓.আত-তারিক\n𝟔.ইখলাস\n𝟕.আল- ফালাক\n𝟖.আল-নাস\n𝟗.সূরা ইয়াছিন\n𝟏𝟎. সূরা আল রহমান\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭"
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })  
    })
  }
