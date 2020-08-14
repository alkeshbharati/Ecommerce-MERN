const { LabelDetail } = require("semantic-ui-react");

function formatDate(date){
    return new Date(date).toLocaleDateString('en-US')
}

export default formatDate