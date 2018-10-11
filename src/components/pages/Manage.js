import PageContainer from './PageContainer';


class ManagePage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "manage"
        }
    }
}

export default ManagePage;