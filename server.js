const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image': 'https://placeimg.com/64/64/any',
            'name':'gildong hong',
            'birthday':'7307231',
            'gender': 'male',
            'job':'student'
          },
          {
            'id':2,
            'image': 'https://placeimg.com/64/64/any',
            'name':'jungho park',
            'birthday':'7007231',
            'gender': 'male',
            'job':'student'
          }
          ,
          {
            'id':3,
            'image': 'https://placeimg.com/64/64/any',
            'name':'siyun park',
            'birthday':'7207231',
            'gender': 'male',
            'job':'student'
          } 
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));