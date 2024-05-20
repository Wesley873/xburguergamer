export default function TesteController(req, res) {
 console.log(req.params.id);  
 res.render('<h1>Teste</h1>');
}