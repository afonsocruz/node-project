import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' })
})

app.listen(3838, () => {
    console.log('💚 Server stated on port 3838')
});
