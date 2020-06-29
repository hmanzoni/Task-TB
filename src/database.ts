import mongoose from 'mongoose';

const database = 'mongodb://localhost/ts-app';

async function connect() {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('>>> Database connected');
  } catch (error) {
    console.log('Error: '+error);
  }
}
export default connect;