import * as dotenv from "dotenv";
import { SESClient } from "@aws-sdk/client-ses";
import { extractStringEnvVar } from "../../env";

dotenv.config();

const REGION = "ap-northeast-1";

const sesClient = new SESClient({
  region: extractStringEnvVar("AWS_REGION"),
  credentials: {
    accessKeyId: extractStringEnvVar("AWS_ACCESS_KEY_ID"),
    secretAccessKey: extractStringEnvVar("AWS_SECRET_ACCESS_KEY"),
  },
});

export { sesClient };
