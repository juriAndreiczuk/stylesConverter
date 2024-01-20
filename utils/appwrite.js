import { APP_WRITE_ID, APP_WRITE_URL } from './app.constants'
import { Account, Client, Databases } from 'appwrite'

export const client = new Client();

client
    .setEndpoint(APP_WRITE_URL)
    .setProject(APP_WRITE_ID);

export const account = new Account(client)
export const DB = new Databases(client)
export { ID } from 'appwrite'
