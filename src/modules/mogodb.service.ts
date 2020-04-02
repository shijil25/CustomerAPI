var azure = require('azure');
const MongoClient = require('mongodb').MongoClient;
import { Order } from '../models/order.model';
var serviceBusService = azure.createServiceBusService(process.env.AZURE_SERVICE_BUS);

async function connectToMongoDb() {
    const client =  new MongoClient(process.env.MONGODB_CONNECTION_STRING);
    await client.connect();
    let collection = await client.db(process.env.MONGODB).collection(process.env.MONGODB_COLLECTION);
    setInterval(saveToMongoDb, 1000, collection);
}  

function saveToMongoDb(collection : any) {
    serviceBusService.receiveQueueMessage(process.env.QUEUENAME, function(error, receivedMessage){
        if(!error){
            let data : string = receivedMessage.body;
            let order : Order = JSON.parse(data);
            collection.insert(order, (error, result) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(result.result);
                }
            });            
        }
    });
}

module.exports = connectToMongoDb;