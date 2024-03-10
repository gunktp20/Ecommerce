import dotenv from "dotenv"
dotenv.config()
import connectDB from './src/db/connect.mjs'
import { Cart } from './src/models/Cart.mjs'

const deleteAllCart = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Cart.deleteMany()
        // const jsonProducts = JSON.parse(
        //     await readFile(new URL('./mock-data.json',import.meta.url))
        // )
        // await Product.create(jsonProducts)
        // console.log('Success!!!')
        // process.exit(0)
    }catch(err){
        console.log(err)
        // process.exit(1)
    }
}

deleteAllCart()