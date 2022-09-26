
window.addEventListener('load', function () {
    // 문서에서 객체추출
    const mainLi = document.querySelectorAll('.nav_list > li');
    
    // 효과1 classList.add(), classList.remove()
    // 대상.style.속성 = '속성값'
    for(let i = 0; i < mainLi.length; i++) {   // i => 인덱스
        mainLi[i].addEventListener('mouseenter', (e) => {
            const link = e.currentTarget.children[0];
            const sub = e.currentTarget.children[1];
            link.classList.add('on');
            sub.style.display = 'block'
        });
        mainLi[i].addEventListener('mouseleave', (e) => {
            const link = e.currentTarget.children[0];
            const sub = e.currentTarget.children[1];
            link.classList.remove('on');
            sub.style.display = 'none'
        });
    }
});
