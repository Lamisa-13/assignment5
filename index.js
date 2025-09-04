let button = document.querySelectorAll('.call-button');
let historyList = document.querySelector('.history-list');
let clearButton = document.querySelector('.clear');
let copyCounter = document.querySelector('.copy #counter-copy');
let coinCounter = document.querySelector('.coins #counter-coins');
let wishlistCounter = document.querySelector('.wishlist #counter-wishlist');
let wishListLogo = document.querySelectorAll('.wishlist-logo');
let copyButton = document.querySelectorAll('.copy-button');

copyButton.forEach(btn => {
    btn.addEventListener('click', () => {
        copyCounter.innerText = parseInt(copyCounter.innerText) + 1;
    });
});

wishListLogo.forEach(wish => {
    wish.addEventListener('click', () => {
        wishlistCounter.innerText = parseInt(wishlistCounter.innerText) + 1;
    });
});

clearButton.addEventListener('click', () => {
    historyList.innerHTML = '';
});

button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (parseInt(coinCounter.innerText) > 0) {
            coinCounter.innerText = parseInt(coinCounter.innerText) - 1;
            let number = btn.parentElement.parentElement.querySelector('.emergency-number').innerText;
            let title = btn.parentElement.parentElement.querySelector('.label-emergency-title').innerText;
            

            let historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            let firstHistory = document.createElement("div");
            firstHistory.classList.add("first-history");
            firstHistory.innerHTML = `<span class="service-name">${title}</span> <span class="service-number">${number}</span>`;
            let secondHistory = document.createElement("div");
            secondHistory.classList.add("second-history");
            secondHistory.innerHTML = `<span class="time">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>`;
            historyItem.appendChild(firstHistory);
            historyItem.appendChild(secondHistory);
            historyList.appendChild(historyItem);
        }
        else{
            btn.style.pointerEvents = 'none';
            btn.style.backgroundColor = 'gray';
        }

    });
});