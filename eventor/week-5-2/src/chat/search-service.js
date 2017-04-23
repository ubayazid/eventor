var EventEmitter = require('../lib/event-emitter');
var Thread = require('./thread/thread');

class SearchService extends EventEmitter {
    constructor(SearchRepository) {
        super();
        this.searchs = [];
        this.searchRepository = SearchRepository;
    };
    getMaps() {
        this.searchRepository.getMaps().then(response => {
            this.searchs = response.data;
            this.trigger('new searchs');
        });
    }
    sentWord(word){
        this.searchRepository.sentWord(word);
    }
}
angular.module('chat-app').service('SearchService', SearchService);