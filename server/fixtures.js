if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Bjorns awesome site',
        url: 'http://bjornblom.com',
        author: 'bjorn'
    });

    Posts.insert({
        title: 'NoProtocol',
        url: 'http://noprotocol.nl',
        author: 'bjorn'
    });

    Posts.insert({
        title: 'Bike Ok',
        url: 'http://www.bikeok.nl',
        author: 'kees'
    });
}