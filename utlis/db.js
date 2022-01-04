import mongoose from 'mongoose';

const connection = {}

//this checks if you are actively conected to the data base
async function connect(){
    if(connection.isConnected){
        console.log("already connetcted ");
        return;
    }
//if there is previous connection saved on the data base so it can refer you to use it
    if(mongoose.connections.length > 0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log("use previous connection")
            return;
        }
        await mongoose.disconnect();
    }
    //if there was no previous connection signing up for the first time
    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        userUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('new connection');
    connection.isConnected = db.connection[0].readyState;
}

async function disconnect(){
    if(connection.isConnected){
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect()
            connection.isConnected = false;
        }else{
            console.log('not disconnected')
        }
    }
}

const db = {connect , disconnect }

export default db;