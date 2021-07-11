const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Task1',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})