import { MongoClient } from 'mongodb';

// URI MongoDB Anda
const uri = "mongodb+srv://mnrs:qoV3rR8k1cHuv4BP@cluster0.e0wyk.mongodb.net/web?retryWrites=true&w=majority&appName=Cluster0";

// Membuat instance MongoClient
const client = new MongoClient(uri);

async function testConnection() {
  try {
    // Coba sambungkan ke MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Akses database dan collection
    const database = client.db("web"); // Ganti dengan nama database Anda
    const collection = database.collection("test"); // Ganti dengan nama collection Anda

    // Coba lakukan query
    const result = await collection.findOne({});
    console.log(result);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  } finally {
    // Pastikan koneksi ditutup setelah selesai
    await client.close();
  }
}

testConnection();
