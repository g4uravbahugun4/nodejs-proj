const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'userdata.json'
);

module.exports=class userdata{
    constructor(username,phoneNo,mothersName,fathersName,address){
        this.username=username
        this.phoneNo=phoneNo
        this.fathersName=fathersName
        this.mothersName=mothersName
        this.address=address
    }
    save() {       
        this.id = Math.random().toString();
        fs.readFile(p, (err, data) => {
            let userData = []
            if (!err) {
                userData = JSON.parse(data)
                
            }
            userData.push(this)
            fs.writeFile(p, JSON.stringify(userData), (err) => {
                if(err){
             console.log(err)
            }
        }
        )})     
        }

    static async fetchAll() {
        try {
            return JSON.parse(await fs.promises.readFile(p));
        }
        catch (e) {
            console.log('Error in Fetch All', e);
            return [];
        }
    }

    static async findById(id) {
        try {
            const users = JSON.parse(await fs.promises.readFile(p));
            const user = users.find(reqUser => reqUser.id == id);
            return user;
        } catch (err) {
            return [];
        }
    }

}