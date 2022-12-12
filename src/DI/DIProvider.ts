import { NotionService } from "../Notion/NotionService";

export const DIProvider = {
  notionService: new NotionService(
    process.env.NOTION_API_KEY,
    process.env.NOTION_DATABASE_ID
  ),
  sesService: null,
};
