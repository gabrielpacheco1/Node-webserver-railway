const http= require('http')

http.createServer((req, res) => {
    
    //console.log(req);

    /*
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'})
    
    
    const persona = {
        id: 1,
        nombre: 'Gabriel'
    }

    res.write('id; nombre\n');
    res.write('1; Gabriel\n');
    res.write('2; Fernando\n');
    res.write('3; Maria\n');
    res.write('4; Carla\n');
    res.write('5; Roberto\n');

    res.write(JSON.stringify(persona));
    */
    res.write('Hola mundo')
    res.end();

})
.listen(8080); //puerto

console.log('Escuchando el puerto ', 8080);