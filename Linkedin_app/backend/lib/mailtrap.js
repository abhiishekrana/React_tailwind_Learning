import {MailtrapClient} from "mailtrap";
import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.MAIL_TRAP;

export const mailtrapClient = new MailtrapClient({
    token:TOKEN
})

export const sender = {
    email:process.env.EMAIL_FROM,
    name:process.env.EMAIL_FROM_NAME
}