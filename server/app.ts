import express = require('express');
import { Company } from './company';
// app is an express Application type -> will refer
// to methods we call from express
const app: express.Application = express();

// const alexsNumber: number = 27; STRONG TYPING with :number syntax

const myDopeCompany: Company = new Company();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('myDopeCompany');
});

app.get('/api/staff/names/first', (req: express.Request, res: express.Response) => {
    res.send({
      first_names: myDopeCompany.getFirstNames(),
    })
});

app.get('/api/staff/names/last', (req: express.Request, res: express.Response) => {
    res.send({
      last_names: myDopeCompany.getLastNames(),
    });
})

app.get('/api/staff/names/full', (req: express.Request, res: express.Response) => {
    res.send({
      last_names: myDopeCompany.getFullNames(),
    });
})

app.get('/api/salary/total', (req: express.Request, res: express.Response) => {
    res.send({
      total_salaries: myDopeCompany.getTotalSalaries(),
    })
})

app.get('/api/salary/all', (req: express.Request, res: express.Response) => {
    res.send({
      all_salaries: myDopeCompany.getAllSalaries(),
    })
})

app.get('/api/history/full', (req: express.Request, res: express.Response) => {
    res.send({
      full_history: myDopeCompany.getHistoryLog(),
    })
})
app.listen(5000, () => {
  console.log(`Listening on PORT: 5000`);
});
