class Accordeon {


    static ACCORDEON = 'accordeon-component';
    static BACKGROUND = 'acc-background';
    static BACGROUND_BLUE = 'acc-header acc-background'
    static BODY_CLASS = 'acc-body';
    static BODYCLASS_INDEX = 1;
    static CONTAINER_HEADER = 'acc-container-header';
    static CONTAINER_BODY = 'acc-container-body';
    static DISPLAY = 'acc-body acc-show'
    static HEADER_CLASS = 'acc-header';
    static HIDE = 'acc-hide';
    static SHOW = 'acc-show';



    isShow = false;

    constructor(el) {

        this.el = el;
        el.addEventListener('click', this.handleClick.bind(this));
        Array.prototype.forEach.call(el.children, (element, i) => {
            switch (i) {
                case 0:
                    this.setClasses(element, Accordeon.HEADER_CLASS, Accordeon.CONTAINER_HEADER);
                    break;
                case 1:
                    this.setClasses(element, Accordeon.BODY_CLASS, Accordeon.CONTAINER_BODY);
                    break;
            }
        });
    }

    handleClick(e) {

        const container = (e.target.closest(`.${Accordeon.ACCORDEON}`));
        const containerChildrens = (e.target.closest(`.${Accordeon.ACCORDEON}`).children[Accordeon.BODYCLASS_INDEX]);
        if (e.target.classList.value === Accordeon.HEADER_CLASS ||
            e.target.classList.value === Accordeon.BACGROUND_BLUE) {
            if (!this.isShow) {
                this.isShow = true;
                containerChildrens.classList.toggle(Accordeon.SHOW);
                for (let i = 0; i < containerChildrens.children.length; ++i) {
                    containerChildrens.children[i].classList.toggle(Accordeon.HIDE);
                }
            }

            for (let i = 0; i < container.children[0].children.length; ++i) {
                if (container.children[0].children[i] === e.target) {
                    if (containerChildrens.children[i].classList.value != Accordeon.DISPLAY) {
                        containerChildrens.children[i].classList.toggle(Accordeon.HIDE);
                        containerChildrens.children[i].classList.toggle(Accordeon.SHOW);
                        e.target.classList.toggle(Accordeon.BACKGROUND)
                    }
                } else if (containerChildrens.children[i].classList.value === Accordeon.DISPLAY) {
                    containerChildrens.children[i].classList.toggle(Accordeon.SHOW);
                    containerChildrens.children[i].classList.toggle(Accordeon.HIDE);
                    if (container.children[0].children[i].classList.value === Accordeon.BACGROUND_BLUE) {
                        container.children[0].children[i].classList.toggle(Accordeon.BACKGROUND)
                    }
                }
            }
        }
    }

    setClasses(element, classChildren, classContainer) {
        for (let i = 0; i < element.children.length; ++i)
            element.children[i].classList = classChildren;
        element.classList = classContainer;
    }
}



// class Accordeon {
//     static HEADER_CLASS = 'acc-header';
//     static BODY_CLASS = "acc-body";
//     static CONTAINER = 'acc-container';
//     static SHOW = 'acc-show';
//     // static COLOR = 'active-color';
//     children = null;
//     constructor(el) {
//         this.el = el;
//         el.addEventListener('click', this.handleClick.bind(this));
//         // el.addEventListener('click', (e) => this.handleClick(e));
//         el.addEventListener('click', this.handleClick.bind(this));

//         this.getChildren(this.el);
//         Array.prototype.forEach.call(this.children, (element) => {
//             this.setClassaes(element);
//         });
//     }
//     handleClick(e){
//         if(e.target.classList.contains(Accordeon.HEADER_CLASS)) {
//             const container = e.target.closest(`.${Accordeon.CONTAINER}`);
//             const body = container.querySelector(`.${Accordeon.BODY_CLASS}`);

//             const bodys = this.el.querySelectorAll(`.${Accordeon.BODY_CLASS}`);

//             Array.prototype.forEach.call(bodys, (child) => {
//                 if(child.classList.contains(Accordeon.SHOW)){
//                     child.classList.remove(Accordeon.SHOW)
//                 }
//             });
//         body.classList.toggle(Accordeon.SHOW);
//         }
//     }    
//     getChildren(el){
//         this.children = [...el.children];
//     }
//     setClassaes(el) {
//         const [header, body] = el.children;
//         el.classList.add(Accordeon.CONTAINER);
//         header.classList.add(Accordeon.HEADER_CLASS);
//         body.classList.add(Accordeon.BODY_CLASS);
//         // header.toggle.add(Accordeon.COLOR)
//     }


// }