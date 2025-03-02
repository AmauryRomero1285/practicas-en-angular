import mongoose from 'mongoose';
mongoose.connect(`mongodb+srv://derayruama1285:230190@awidb.6wy60.mongodb.net/angularDB?retryWrites=true&w=majority&appName=AWIDB`)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log('Connection failed to MongoDB: \n',error);
});

export default mongoose;