import { NotionRepo } from "../module/Notion/NotionRepo";
import { extractStringEnvVar } from "../env";
import { NotionService } from "../module/Notion/NotionService";

const notionService = new NotionService(
  extractStringEnvVar("NOTION_API_KEY"),
  extractStringEnvVar("NOTION_DATABASE_ID")
);
const notionRepo = new NotionRepo(notionService);

const DIProvider = {
  notionService: notionService,
  notionRepo: notionRepo,
};

export default DIProvider;
