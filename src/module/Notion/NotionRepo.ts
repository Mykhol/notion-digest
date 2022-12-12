import { NotionService } from "./NotionService";

export class NotionRepo {
  service: NotionService;
  constructor(service: NotionService) {
    this.service = service;
  }
}
