"use server";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import content from '../../public/content';
require('dotenv').config();
const nodemailer = require('nodemailer');

export async function HandleMessage(formData: { name : string , email : string, message : string }){

    const name = formData.name;
    const email = formData.email;
    const message = formData.message;

    let transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail'
        auth: {
          user: process.env.EMAILUSER,
          pass: process.env.APPPASS
        }
      });

    let finalMessage = 'Hi Ankush,\nYou have a new message from ' + name + '.\n Their email id is ' + email + '.\n The message is "' + message + '".';
    let finalHtml =   'Hi Ankush,<br><br>You have a new message from ' + name +
     '.<br> Their email id is ' + email + '.<br> The message is "' + message + '"<br><br>'
    + ' your personal website service :)' ;

    // Set up email data
      let mailOptions = {
        from: process.env.EMAILUSER,
        to: process.env.MYEMAIL,
        subject: 'New message from personal website!',
        text: finalMessage,
        html: finalHtml
      };
      console.log(mailOptions);
      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
      console.log('Message sent: %s', info.messageId);
      });

      revalidatePath('/me/contact/');
      redirect('/me/contact/');

      
}