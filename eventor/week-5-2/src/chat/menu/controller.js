module.exports = class MenuController {
    constructor(SearchService) {
        this.searchService=SearchService;
    }
      setItem(item) {
        this.searchService.sentWord(item);
    }
}
