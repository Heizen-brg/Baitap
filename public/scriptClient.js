var findData = $.ajax({
    url: 'http://192.168.0.104:8888/home/1'
});

findData.then((cards) => {
    cards.forEach(card => {
        var cardID= `<div class="card" col-md-3">
            <img src="${card.img}" class="card-img-top " alt="">
            <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Call me</a>
            </div>
        </div>`;

        $('body').append(cardID);
    })

});