const express = require('express');
const app = express();
const cors = require('cors');

const axios = require('axios');

const apiUrl = 'https://epg-api.video.globo.com/programmes/1337?date=';
const moment = require('moment');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/programacao", (req, res) => {

    let url = apiUrl + req.query.date;
    axios.get(url).then(response => {

        let programas = response.data.programme.entries;

        let arrProgramas = [];

        for (let prog of programas) {
            let programa = {
                title: prog.title,
                description: prog.description,
                start: moment.unix(prog.start_time),
                end: moment.unix(prog.end_time),
                mainImg: prog.custom_info.Graficos.ImagemURL,
                logoImg: prog.custom_info.Graficos.LogoURL,
                duration: prog.duration_in_minutes
            };

            arrProgramas.push(programa);
        }

        console.log(arrProgramas)
        res.send(arrProgramas);
    });

});

app.listen(2000);