const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', 'views');

const user = require('./routes/users');
const userlist = require('./routes/userlist');
const errorController=require('./controller/error')



app.use(user.routes);
app.use(userlist)
app.use(errorController.error);

app.listen(3000);
