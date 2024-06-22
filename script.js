var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function(response) {
    var btc = document.getElementById("bitcoin");
    var eth = document.getElementById("ethereum");
    var dc = document.getElementById("dogecoin");

    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    dc.innerHTML = response.dogecoin.usd;
});
