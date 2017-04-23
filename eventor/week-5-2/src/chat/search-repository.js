class SearchRepository {
    constructor($http) {
        this.$http = $http;
    }
    getSearchs() {
        return this.$http.get('http://localhost:3000/searchs');
    }
    sentWord(word){
        return this.$http.post('http://localhost:3000/searchs',word);
    }
}

angular.module('chat-app').service('SearchRepository', SearchRepository);