"use server";
import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
require('dotenv').config();
import { ObjectId } from "mongodb";
import axios from 'axios';
import qs from 'qs';

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

export async function getRedditAccessToken() {

    const CLIENT_ID = 'p-jcoLKBynTLew';
    const CLIENT_SECRET = 'gko_LXELoV07ZBNUXrvWZfzE3aI';
    const USERNAME = 'reddit_bot';
    const PASSWORD = 'snoo';

    try {
      // Create the Basic Auth header
      const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  
      // Prepare the request payload
      const postData = {
        grant_type: 'password',
        username: USERNAME,
        password: PASSWORD,
      };
  
      // Set the headers
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
        'User-Agent': 'ChangeMeClient/0.1 by YourUsername',
      };
  
      // Make the POST request
      const response = await axios.post('https://www.reddit.com/api/v1/access_token', qs.stringify(postData), { headers });
  
      // Output the response data
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  }
  