const express = require('express');
const getExpression = require('../utils/exp'); // Import the getExpression function
const history = require('../model/schema'); // Import the history schema
const calculator = express();
calculator.get('/:path*', async (req, res) => {
    const path = req.params.path;
    // Check if the requested path is "history"
    if (path == 'history') {
        const allhis = await history.findById('64eb4377d255691dfb95e818');
        let html = '<body style="background-color: #c1a99e; text-align: center;"><h1>Operation History</h1>';// Use CSS to set the background color
        html +=
            '<table style="border-collapse: collapse; width: 50%; margin: 0 auto; text-align: center;">';
        html +=
            '<tr style="background-color: #A9A9A9;"><th style="padding: 10px; border: 1px solid #000;">Question</th><th style="padding: 10px; border: 1px solid #000;">Answer</th></tr>'; // Use #000 for black border

        allhis.history.forEach((sample) => {
            html += `<tr><td style="padding: 8px; border: 1px solid #000;">${sample.question}</td><td style="padding: 8px; border: 1px solid #000;">${sample.answer}</td></tr>`;
        });

        html += '</table></body>';
        res.send(html);
        return;
    }
    
    const additionalPath = req.params[0];
    const fullPath = path + additionalPath;
    const expression = fullPath.split('/');
    var question = getExpression(expression);

    try {
        let response = { question: question, answer: eval(question) };
        await history.findOneAndUpdate({ _id: '64eb4377d255691dfb95e818' }, { $push: { history: response } });
        res.json(response);
    } catch {
        res.status(404);
    }
});

module.exports = calculator;
