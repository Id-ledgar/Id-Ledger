import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Połączono z MongoDB (lib/db.js)');
  } catch (error) {
    console.error('Błąd podczas łączenia z MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectToDatabase;