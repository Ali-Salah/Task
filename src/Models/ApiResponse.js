class APIResponse {
    constructor() {
        this.data = [];
    }

    build(result) {
        this.setData(result.data);
        this.setSuccessMsg(result.successMsg);
        this.setErrorMsg(result.errorMsg);
    }

    setData(data) {
        this.data = data;
    }

    setErrorMsg(msg) {
        this.errorMsg = msg;
    }

    setSuccessMsg(msg) {
        this.successMsg = msg;
    }
}

exports.APIResponse = APIResponse;
