if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Bjorns awesome site',
        url: 'http://bjornblom.com'
    });

    Posts.insert({
        title: 'NoProtocol',
        url: 'http://noprotocol.nl'
    });

    Posts.insert({
        title: 'Bike Ok',
        url: 'http://www.bikeok.nl'
    });
}