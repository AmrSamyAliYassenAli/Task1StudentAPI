i = 20;
class AutoIncrementID{
    
    static autoIncrement = ()=>{
        console.log(`#i=${i}#`);
        return i++;
    }
}

module.exports = AutoIncrementID;