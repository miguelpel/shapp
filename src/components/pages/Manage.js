import PageContainer from './PageContainer';


class ManagePage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "manage",
            url: "",
            filters: [],
            searchWord: null,
            results: 0,
            data : null
        }
    }
}

export default ManagePage;