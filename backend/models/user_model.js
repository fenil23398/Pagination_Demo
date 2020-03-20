const db=require('../connection');
const userSchema=db.Schema({
    id : {
        type : Number
    },
    first_name : {
        type : String
    },
    last_name : {
        type : String
    },
    email : {
        type : String
    },
    gender : {
        type : String
    },
    ip_address : {
        type : String
    }
})

module.exports = db.model('user_details',userSchema);