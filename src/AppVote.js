class AppVote {
    constructor({ $target }) {
        this.$target = $target;
        this.init();
    }
    init() {
        console.log('vote')
    }
};

export default AppVote;
