import { IOrderRepository } from '../interfaces/iorder.repository';
import { injectable } from 'inversify';
const MongoClient = require('mongodb').MongoClient;

@injectable()
export class OrderRepository implements IOrderRepository {
    collection : any;

    constructor() {
        this.connectToMongo();
    }
 
    findAll(customerId : number) {       
        const query = this.collection.find({"User.UserId" : customerId });      
        return query.toArray();         
    }

    findById(orderId : number) {
        const query = this.collection.findOne({ "OrderId" : orderId });    
        return query;    
    }

    async connectToMongo() {
        const client =  new MongoClient(process.env.MONGODB_CONNECTION_STRING);
        await client.connect();
        this.collection = await client.db(process.env.MONGODB).collection(process.env.MONGODB_COLLECTION);
    }
}