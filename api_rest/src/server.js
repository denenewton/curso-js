import app from './app';

const port = process.env.APP_PORT;
const url = process.env.APP_URL;
app.listen(port, ()=>{
    console.log(`\nServidor ouvindo na porta ${port}`)
    console.log(`CTRL + Click em ${url}\n`)
});
