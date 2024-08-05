const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5001;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const answers = req.body;
    console.log('Полученные ответы:', answers);

    const filePath = path.join(__dirname, 'answers.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Ошибка чтения файла:', err);
            return res.status(500).send('Ошибка сервера при чтении файла');
        }

        let jsonData = [];
        if (data) {
            try {
                jsonData = JSON.parse(data);
            } catch (e) {
                console.error('Ошибка парсинга JSON:', e);
                return res.status(500).send('Ошибка сервера при парсинге JSON');
            }
        }

        jsonData.push(answers);

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
                return res.status(500).send('Ошибка сервера при записи файла');
            }

            res.status(200).send('Данные получены и сохранены');
        });
    });
});

// Создание файла answers.json, если он не существует
const initFilePath = path.join(__dirname, 'answers.json');
if (!fs.existsSync(initFilePath)) {
    fs.writeFileSync(initFilePath, JSON.stringify([], null, 2), 'utf8');
}

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
