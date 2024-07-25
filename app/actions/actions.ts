"use server";
import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
require('dotenv').config();
import { ObjectId } from "mongodb";


export async function postthought(formData: { post : string}){

const connectionString = process.env.MONGODBURI;
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("thoughts");
let collec = await db.collection("posts");
let newDocument = formData ;
// console.log(formData);
let result = await collec.insertOne(newDocument);

revalidatePath('/me/thoughts');
redirect('/me/thoughts');
}

export async function readthoughts(){

    const connectionString = process.env.MONGODBURI;
    const client = new MongoClient(connectionString);
    
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
      console.error(e);
    }
    
    let db = conn.db("thoughts");
    let collec = await db.collection("posts");
    let results = await collec.find({})
        .toArray();

    
    return results;
}

export async function deletethought(id : string){

    const connectionString = process.env.MONGODBURI;
    const client = new MongoClient(connectionString);

    let conn;
    try {
        conn = await client.connect();
    } catch(e) {
        console.error(e);
    }

    let db = conn.db("thoughts");
    let collec = await db.collection("posts");
    const newid = new ObjectId(id);
    const query = { _id: newid };

    let result = await collec.deleteOne(query);
    
    revalidatePath('/me/thoughts');
    redirect('/me/thoughts');
}