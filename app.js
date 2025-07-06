const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    console.log(req.query);
    console.log('Hello route accessed');
    res.send('Hello World');
})
//here /:id/:password is dynamic route parameter

app.get('/user/:id/:password', (req, res) => {
    console.log(req.params);
    console.log('User ID route accessed');
    res.send(`User ID: ${req.params.id}`);
});
// app.use('/hello/test',(req, res) => {
//     console.log('Test route accessed');
//     res.send('Hello Test');
// });

// app.use('/hello', (req, res) => {
//     console.log('Hello route accessed');
//     res.send('Hello World');
// });
// app.get('/ab*cd', (req, res) => {
//     console.log('Pattern matched route accessed');
//     res.send('Pattern matched');
// });

// app.get('/a(bc)?d', (req, res) => {
//     console.log('Pattern with one or more b\'s accessed');
//     res.send('Pattern with one or more b\'s matched');
// });

// app.get('/ab-c', (req, res) => {
//     console.log('Pattern with a dash accessed');
//     res.send('Pattern with a dash matched');
// });

// ...existing code...
app.get(/.*fly$/, (req, res) => {
    console.log('Pattern ending with fly accessed');    
    res.send('Pattern ending with fly matched');
});
// ...existing code...

// app.get('/ab*c', (req, res) => {
//     console.log('Pattern with zero or more b\'s accessed');
//     res.send('Pattern with zero or more b\'s matched');
// });

app.get('/helloget', (req, res) => {
    console.log('Hello GET route accessed');
    res.send('Hello GET World');
});

app.post('/hellopost', (req, res) => {
    console.log('Hello POST route accessed');   
    res.send('Hello POST World');
});
app.put('/helloput', (req, res) => {       
    console.log('Hello PUT route accessed');
    res.send('Hello PUT World');
}); 
app.delete('/hellodelete', (req, res) => {
    console.log('Hello DELETE route accessed');
    res.send('Hello DELETE World');
}); 
app.patch('/hellopatch', (req, res) => {
    console.log('Hello PATCH route accessed');
    res.send('Hello PATCH World');
});

// app.use('/', (req, res) => {
//     console.log('Server started');
//     res.send('Hello Melody');
// });

const PORT = 7777;

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})