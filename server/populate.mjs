import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './src/db/connect.mjs'
import Product from './src/models/Product.mjs'

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany()
        const jsonProducts = JSON.parse(
            await readFile(new URL('./mock-data.json',import.meta.url))
        )
        await Product.create(jsonProducts)
        console.log('Success!!!')
        process.exit(0)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()