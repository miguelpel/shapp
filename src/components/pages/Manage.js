import PageContainer from './PageContainer';


class ManagePage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "manage",
            url: "https://api.myjson.com/bins/zr1wc",
            filters: [],
            searchWord: null,
            results: 0,
            data : null
        }
    }
}

export default ManagePage;