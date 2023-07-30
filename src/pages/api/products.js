const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://pc-builder:YZCd04crSWAkixpR@cluster0.v0ciw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      if (req.query.productId) {
        const productId = req.query?.productId;
        //const porductObjectId = ObjectId(productId);

        const product = await productCollection.findOne({
          _id: new ObjectId(productId),
        });

        res.send({
          message: "success",
          status: 200,
          data: product,
        });
      } else if (req.query.category) {
        const category = req.query.category;

        const categoryRegex = new RegExp(category, "i");
        const productCursor = productCollection.find({
          Category: categoryRegex,
        });
        const product = await productCursor.toArray();
        res.send({
          message: "success",
          status: 200,
          data: product,
        });
      } else {
        const products = await productCollection.find({}).toArray();
        res.send({
          message: "success",
          status: 200,
          data: products,
        });
      }
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;
