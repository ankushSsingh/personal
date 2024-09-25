import { NextResponse } from 'next/server';
import axios from 'axios';
import qs from 'qs';

export async function GET() {

  console.log("hi route");
  let headers;
  let redditinfo;

  const CLIENT_ID = 'L5ZbZtFsXfFbCG4-C8s2OQ';
  const CLIENT_SECRET = 'DU8IKs1A8bjD6DtTNUYiMXvP44wtbg';
  const USERNAME = 'anksingh98';
  const PASSWORD = 'Asingh98@';

  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  console.log(auth);

  const postData = {
    grant_type: 'password',
    username: USERNAME,
    password: PASSWORD,
  };

   headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic ${auth}`,
    'User-Agent': 'ChangeMeClient/0.1 by YourUsername',
  };

  try {
    // api call to get access token first
    const access_token = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      qs.stringify(postData),
      { headers }
    );
    try{
        headers = {
            "Authorization" : `bearer ${access_token.data.access_token}`,
             "User-Agent": "ChangeMeClient/0.1 by YourUsername",
            };
    
        // api call to fetch reddit info
        // redditinfo = await axios.get( 'https://oauth.reddit.com/api/v1/me' ,{ headers });
        redditinfo = await axios.get('https://oauth.reddit.com/r/crossdressing/about', { headers });
        // let allsubreddits = redditinfo.data.data.children;
        // const subredditdata = allsubreddits.map(record => Object.values(record)[1]);
        // const subredditnames = subredditdata.map(record => record['display_name_prefixed']);
        console.log(redditinfo.json());
        return NextResponse.json({'response':redditinfo});
      }catch(error){
        return NextResponse.json({'response':'Something failed!','error' : error});
      }

  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.message);
        console.error('Response data:', error.response?.data);
      } else {
        console.error('Unexpected error:', error);
      }
      return NextResponse.json({ error: 'Failed to fetch access token' }, { status: 500 });
    }
}
