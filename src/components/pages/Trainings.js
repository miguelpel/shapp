import PageContainer from './PageContainer';

class TrainingsPage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "trainings",
            url: "https://api.myjson.com/bins/19781g",
            filters: [],
            searchWord: null,
            results: 0,
            data : null
        }
    }
}

export default TrainingsPage;