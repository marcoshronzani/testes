
// Criando servidor web e chamando uma pagina html...

var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
    fs.readFile("index.html", function(erro,conteudo){
        if(erro)
        console.log (erro);
        if(conteudo)
        response.write(conteudo);

        response.end();

    })
    
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");


// Apenas criando o servidor e mostrando a mensagem abaixo no navegador

/*var http = require("http");

http.createServer(function(request,response){
    response.write("Primeiros passos com Node.JS web...");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");*/