import PageContainer from './PageContainer';


class MembersPage extends PageContainer {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "member"
        }
    }
}

export default MembersPage;