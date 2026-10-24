//console.log('May node be with you')
/*
Create (post) make something

Read(get) get soemthing

Uupdate(put) change something

Delete (delete) remove something


*/
require('dotenv').config()

const express = require('express')
const app = express()
const { MongoClient, ObjectId } = require('mongodb')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const client = new MongoClient(process.env.mongodblink)

client.connect()
    .then(() => {
        console.log('Connected to Database')

        const db = client.db('professor-do-little')
        const reviewsCollection = db.collection('reviews')

        // reading the content 
        app.get('/', (req, res) => {
            reviewsCollection.find().toArray()
                .then(results => {
                    res.render('index.ejs', { reviews: results })
                })
                .catch(error => console.error(error))
        })

        // instead of star wars quote create prof reviews based on uni 
        app.post('/reviews', (req, res) => {
            const review = {
                university: req.body.university,
                professor: req.body.professor,
                review: req.body.review,
                stars: Number(req.body.stars)
            }

            reviewsCollection.insertOne(review)
                .then(() => res.redirect('/'))
                .catch(error => console.error(error))
        })

        // once user submits the professor and review it updates 
        app.put('/reviews/:id', (req, res) => {
            reviewsCollection.updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: req.body }
            )
                .then(() => res.json({ message: 'Review updated!' }))
                .catch(error => res.status(400).json({ error: error.message }))
        })

        // user can remove the whole review box 
        app.delete('/reviews/:id', (req, res) => {
            reviewsCollection.deleteOne({
                
                _id: new ObjectId(req.params.id)
            })
                .then(() => res.json({ message: 'Review deleted!' }))
                .catch(error => res.status(400).json({ error: error.message }))
        })

        app.listen(3000, () => console.log('Listening on 3000'))
    })
    .catch(error => console.error(error))
