const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, {
    dbName:'nodeprojectdb',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Veritabanına Başarıyla Bağlandı");
    })
    .catch((err) => {
        console.log("Veritabanına bağlanırken hata çıktı : ", err);
    })

