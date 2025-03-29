import mongoose  from "mongoose";

//mongoose.connect('mongodb://localhost:27017/incubadoraDB')
mongoose.connect('mongodb+srv://derayruama1285:230190@awidb.6wy60.mongodb.net/incubadoraDB?retryWrites=true&w=majority&appName=AWIDB')


.then((db)=> console.log("MongoDB atlas conenected"))
.catch((error)=>console.error(error));

export default mongoose;