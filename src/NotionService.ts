import { Client } from "@notionhq/client";

export class NotionService {
  notionClient: Client;
  database_id: string;

  constructor(apiKey: string, databaseId: string) {
    this.database_id = databaseId;

    try {
      this.notionClient = new Client({ auth: apiKey });
    } catch (error: unknown) {
      throw new Error("An unkown error occured " + error);
    }
  }

  /**
   * Reads the database for things.
   */
  async readDatabase() {
    return await this.notionClient.databases.query({
      database_id: this.database_id,
      filter: {
        or: [
          {
            property: "Priority",
            select: {
              equals: "This Week",
            },
          },
        ],
      },
    });
  }
}
