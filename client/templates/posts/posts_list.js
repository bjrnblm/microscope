var postsData = [
    {
        title: 'Bjorn blom',
        url: 'http://bjornblom.com'
    },
    {
        title: 'NoProtocol',
        url: 'http://noprotocol.nl'
    },
    {
        title: 'Bike OK',
        url: 'http://www.bikeok.nl'
    }
];
Template.postsList.helpers({
    posts: postsData
});