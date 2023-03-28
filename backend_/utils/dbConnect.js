const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const Connection=()=>{
mongoose.connect('mongodb+srv://Bhupendrasharma:iO6PDcTqbhklVqF0@movie-booking.ytqzpza.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB CONNECTED!'))
.catch(err => console.log(err));
}
module.exports=Connection;