import express, { Request, Response} from 'express';
const path = require('path');

const app = express();
const port = 3005;

app.listen(port, () => {
  console.log(`Сервер запущено http://localhost:${port}`);
});

enum Buttons {
  Plus = "plus",
  Minus = "minus"
}

let countClick = {
  [Buttons.Plus]: 0,
  [Buttons.Minus]: 0 
}
app.use(express.static('public'));
app.use(express.static('dist'));

app.get(`/${Buttons.Plus}`, (req: Request, res: Response) =>{
  countClick[Buttons.Plus]++;
  res.send(JSON.stringify(countClick));
});

app.get(`/${Buttons.Minus}`, (req: Request, res: Response) =>{
  countClick[Buttons.Minus]++;
  res.send(JSON.stringify(countClick));
});