class Accordeon {
    static CLASSES = {
        ACCORDEON: 'container',
        BACKGROUND: 'active-color',
        BODY_CLASS: 'acc-body',
        CONTAINER_HEADER: 'acc-container-header',
        CONTAINER_BODY: 'acc-container-body',
        HEADER_CLASS: 'acc-header',
        SHOW: 'acc-show',
        CONTINER_HEADER_INDEX: 0,
        CONTAINER_BODY_INDEX: 1,
    };

    childrenEl = null;

    constructor(className) {
        this.container = Accordeon.getByClassName(className);
        this.init();
    }

    init() {
        this.setClasses();
        this.setChildrenClass(this.childrenEl[Accordeon.CLASSES.CONTINER_HEADER_INDEX].children,
            Accordeon.CLASSES.HEADER_CLASS);
        this.setChildrenClass(this.childrenEl[Accordeon.CLASSES.CONTAINER_BODY_INDEX].children,
            Accordeon.CLASSES.BODY_CLASS);
        this.setListener(this.container, 'click', this.handleClick);
    }

    setClasses() {
        this.setChildren(this.container);
        Array.prototype.forEach.call(this.childrenEl, (e, i) => {
            switch (i) {
                case Accordeon.CLASSES.CONTINER_HEADER_INDEX:
                    this.setClass(e, Accordeon.CLASSES.CONTAINER_HEADER);
                    break;
                case Accordeon.CLASSES.CONTAINER_BODY_INDEX:
                    this.setClass(e, Accordeon.CLASSES.CONTAINER_BODY);
                    break;
            }
            ++this.index;
        });
    }

    setChildrenClass(items, nameClass) {
        Array.prototype.forEach.call(items, (e) => {
            this.setClass(e, nameClass);
        });
    }

    setClass(item, className) {
        item.classList.add(className);
    }

    setChildren(element) {
        this.childrenEl = element.children;
    }

    setListener(element, event, callBeack) {
        element.addEventListener(event, callBeack);
    }

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    }

    handleClick = (e) => {
        if (e.target.classList.contains(Accordeon.CLASSES.HEADER_CLASS)) {

            const indexEl = this.fineIndex(e.target);
            this.setActive(indexEl);
        }
    }

    fineIndex(element) {
        const el = element.closest(`.${Accordeon.CLASSES.CONTAINER_HEADER}`);
        return Array.prototype.indexOf.call(el.children, element)

    }

    setActive(indexEl) {
        Array.prototype.forEach.call(this.childrenEl, (element, i) => {
            switch (i) {
                case Accordeon.CLASSES.CONTINER_HEADER_INDEX:
                    Array.prototype.forEach.call(element.children, (e, i) => {
                        const HEADER = e
                        if (i === indexEl) {
                            HEADER.classList.add(Accordeon.CLASSES.BACKGROUND);
                        } else {
                            HEADER.classList.remove(Accordeon.CLASSES.BACKGROUND);
                        }
                    });
                    break;
                case Accordeon.CLASSES.CONTAINER_BODY_INDEX:
                    Array.prototype.forEach.call(element.children, (e, i) => {
                        const BODY = e
                        if (i === indexEl) {
                            BODY.classList.add(Accordeon.CLASSES.SHOW);
                        } else {
                            BODY.classList.remove(Accordeon.CLASSES.SHOW);
                        }
                    });
                    break;
            }
        })
    }
}