class ResponseBuilder{
    constructor(StatusCode,Message,data){
        this.StatusCode = StatusCode;
        this.Message = Message;
        this.data = data;
    }

    static Create(StatusCode,Message,data){
        return new ResponseBuilder(StatusCode,Message,data);
    }
}

module.exports=ResponseBuilder;