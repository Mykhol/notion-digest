import * as dotenv from "dotenv";
import { NotionService } from "./module/Notion/NotionService";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "./module/AWS/SesService";

dotenv.config();

const notionService = new NotionService(
  process.env.NOTION_KEY!,
  process.env.NOTION_DATABASE_ID!
);

const createSendEmailCommand = (toAddress: string, fromAddress: string) => {
  return new SendEmailCommand({
    Destination: {
      /* required */
      CcAddresses: [
        /* more items */
      ],
      ToAddresses: [
        toAddress,
        /* more To-email addresses */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: "HTML_FORMAT_BODY",
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "EMAIL_SUBJECT",
      },
    },
    Source: fromAddress,
    ReplyToAddresses: [
      /* more items */
    ],
  });
};

const main = async () => {
  // const results = await notionService.readDatabase();
  //
  // results.results.map((result) => {
  //   const page = result as PageObjectResponse;
  //
  //   if (page.properties.TaskName.type === "title") {
  //     console.log(page.properties.TaskName.title[0].plain_text);
  //   }
  // });

  const sendEmailCommand = createSendEmailCommand(
    "mh.michaelhowell@gmail.com",
    "mh.michaelhowell@gmail.com"
  );

  try {
    return await sesClient.send(sendEmailCommand);
  } catch (e) {
    console.log(e);
    console.error("Failed to send email.");
    return e;
  }
};

main();
