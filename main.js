let btnToggle = document.getElementById('toggle-btn');
btnToggle.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('wrapper').classList.toggle('section-active');
});
let btnToggle1 = document.getElementById('toggle-btn1');
btnToggle1.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('wrapper').classList.toggle('section-active');
});

const changeMediaQuery = (mql) => {
    if(mql.matches) {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('wrapper').classList.remove('section-active');
    } else {
        document.getElementById('sidebar').classList.add('active');
        document.getElementById('wrapper').classList.add('section-active');
    }
}
let mql = window.matchMedia("screen and (max-width: 2800px)"); // 1200px
changeMediaQuery(mql)
mql.addEventListener(changeMediaQuery);