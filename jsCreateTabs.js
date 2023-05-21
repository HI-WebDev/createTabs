let lis = document.querySelectorAll('.tabs li');
let lisArray = Array.from(lis);
let ps = document.querySelectorAll('.content div');
let psArray = Array.from(ps);

lisArray.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        //f1:remove the classe active 
        lisArray.forEach((ele) => {
            ele.classList.remove("active")
            // this.classList.add('active') method1
        })
        //method2
        e.currentTarget.classList.add('active')

        //f2:manage the paragraphs
        psArray.forEach((p) => {
            p.style.display = 'none';
        })
        // get the ele we clicked and theirs 
        // paragraphs linkink by datasaet and class //hadchy elach kndiro .smytclass d div
        //ele.dataset.tab) hadi knjibo biha li fyh .p w li hya div p or hadi li ltht
        document.querySelector((e.currentTarget.dataset.tab)).style.display = 'block'
    })

})



