import PageContainer from './PageContainer';


class OrganisationsPage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "organisations",
            url: "https://api.myjson.com/bins/zr1wc",
            filters: [],
            searchWord: null,
            results: 0,
            data : null
        }
    }
}

export default OrganisationsPage;