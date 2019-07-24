const helper = {

    HasEmptyJson(obj) {
        return typeof (obj) == 'undefined' || Object.keys(obj).length === 0;
    },
    isNullOrEmpty(str) {
        return str === null || new RegExp(/^ *$/).test(str);
    },
    GetRandomText() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    },
    GetTranslitArray() {
        return [
            ['А', 'a'],
            ['Б', 'b'],
            ['В', 'v'],
            ['Г', 'g'],
            ['Д', 'd'],
            ['Е', 'e'],
            ['Ё', 'jo'],
            ['Ж', 'zh'],
            ['З', 'z'],
            ['И', 'i'],
            ['Й', 'ј'],
            ['К', 'k'],
            ['Л', 'l'],
            ['М', 'm'],
            ['Н', 'n'],
            ['О', 'o'],
            ['П', 'p'],
            ['Р', 'r'],
            ['С', 's'],
            ['Т', 't'],
            ['У', 'u'],
            ['Ф', 'f'],
            ['Х', 'kh'],
            ['Ц', 'c'],
            ['Ч', 'ch'],
            ['Ш', 'sh'],
            ['Щ', 'sch'],
            ['Ы', 'y'],
            ['Э', 'e'],
            ['Ю', 'yu'],
            ['Я', 'ya'],
            ['ъ', ''],
            ['ь', ''],
            [' ', '_'],
        ];
    },
    ShowBgImages() {
        let tags=document.querySelectorAll('[data-setbg]')
        tags.forEach(function (el) {
            var text=el.getAttribute('data-setbg');
            el.style.backgroundImage = 'url(' + text  + ')';
        });
    }
}
 
export default helper

