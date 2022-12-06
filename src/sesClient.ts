import * as dotenv from "dotenv";
import { SESClient } from "@aws-sdk/client-ses";

dotenv.config();

const REGION = "ap-northeast-1";

console.log(process.env.AWS_ACCESS_KEY_ID);
const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export { sesClient };
