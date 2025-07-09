const express = require('express');
const app = express();
const { adminAuth } = require('./Middleware/auth');
const connectDB=require('./Config/database')

const User = require('./Model/user');

app.use(express.json()); // Middleware to parse JSON request bodies
const PORT = 7777;

connectDB()
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
})


app.post('/signup', async (req, res) => {
    const user = new User (req.body)
   
    try {
        user.save(user);
        res.send('User added successfully');
    } catch (error) {
        res.status(500).send('Error adding user: ' + error.message);
    }
})

app.get('/userData', async (req, res) => {
    try {
        const userEmail = req.body.email;
        const userData = await User.find({ email: userEmail });
        if (userData.length === 0) {
            return res.status(404).send('No user data found');
        }
        res.send(userData);

    }catch (error) {
        res.status(500).send('Error fetching user data: ' + error.message);
    }
})

app.get('/feed', async (req, res) => {
    try {
        const feedData = await User.find({});
        if (feedData.length === 0) {
            return res.status(404).send('No feed data found');
        }
        res.send(feedData);
        
    } catch (error) {
        res.status(500).send('Error fetching feed: ' + error.message);
    }
})

/*
/*
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
*/
/*
app.use('/user', [(req, res, next) => {
    console.log('user rout access');
    // res.send('Response!!!!!!!');
    next();// it will call the next middleware in the stack
}, (req, res, next) => {
    console.log('This is a second middleware for user route');
    //res.send('This is a second middleware for user route');
    next()
//when we use next() in the first middleware, it will call the second middleware and we are using same url and already sent the response in the first middleware, so it will throw an error 
}], (req, res, next) => {
    console.log('This is a third middleware for user route');
 
    res.send('This is a third middleware for user route');
    //next();
}, (req, res, next) => {
    console.log('This is a fourth middleware for user route')
    res.send('This is a fourth middleware for user route');
   // next();
});
*/


//Middlerware to handle all requests
// app.use('/admin', (req, res, next) => {
//     const TOKEN = 'XYZ'
//     const Authorization = TOKEN === 'XYZ';
//     if (!Authorization) {
//         return res.status(401).send('Unauthorized access');
//     } else {
//         console.log('Admin route accessed');
//         next();
//     }

// })

app.use('/admin', adminAuth);

app.get('/admin/getAllData', (req, res) => {
    console.log('Admin GET route accessed');
    res.send('Admin GET ALl USER Data');
})

app.delete('/admin/deleteUser', (req, res) => {
    console.log('Admin DELETE route accessed');
    res.send('Admin DELETE User Data');
});


