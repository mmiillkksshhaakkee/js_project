window.addEventListener('DOMContentLoaded', () => {
    
    const tabsAll = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            //скрываем контент
            item.classList.add('hide');
            item.classList.remove('show', 'fade');

            //убираем класс активности у самого таба
            tabsAll.forEach(tab => {
                tab.classList.remove('tabheader__item_active');
            });
        });
    }

    // показываем необходимый таб и добавляем ему класс активности
    function showTabContent(i = 0){
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');

        tabsAll[i].classList.add('tabheader__item_active');
    }

    tabsParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')){
            tabsAll.forEach((item, i) => {
                if(e.target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
});
