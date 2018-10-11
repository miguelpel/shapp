import PageContainer from './PageContainer';

class TrainingsPage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "trainings",
            url: "https://api.myjson.com/bins/zr1wc",
            filters: [],
            searchWord: null,
            results: 0,
            data : null
        }
    }
}

export default TrainingsPage;