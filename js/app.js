// I take the idea from codrops





// this function for get the mouse position 
// from http://www.quirksmode.org/js/events_properties.html#position
getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.Event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy }
}



// Effect 1 
class startEvent {
    constructor(element) {
        // create the new DOM to hold the image 
        this.element = element;
        this.reveal = document.createElement('div');
        this.reveal.className = 'hover';
        this.reveal.innerHTML = `<div class="hover_inner"><div class="hover_img" style="background-image:url(${element.dataset.img})"></div></div>`;
        this.element.appendChild(this.reveal);
        this.revealInner = this.reveal.querySelector('.hover_inner');
        this.revealInner.style.overflow = 'hidden';
        this.revealImg = this.reveal.querySelector('.hover_img');

        this.eventInit();

    }

    eventInit() {
        this.getPositionElement = (ev) => {
            const mouseP = getMousePos(ev);
            const getDocPos = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop,
            }
            this.reveal.style.top = `${mouseP.y + 20 - getDocPos.top}px`;
            this.reveal.style.left = `${mouseP.x + 20 - getDocPos.left}px`;
        }

        this.element.addEventListener('mouseenter', this.mouseEnter);
        this.element.addEventListener('mousemove', this.mouseMove);
        this.element.addEventListener('mouseleave', this.mouseLeave);
    }

    mouseEnter = (ev) => {
        this.getPositionElement(ev);
        this.showImage();
    }
    mouseMove = event => requestAnimationFrame(() => {
        this.getPositionElement(event)
    });

    mouseLeave = () => {
        this.hideImage();
    };

    showImage = () => {
        TweenMax.killTweensOf(this.revealInner);
        TweenMax.killTweensOf(this.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                this.reveal.style.opacity = 1;
                TweenMax.set(this.element, { zIndex: 1000 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.revealInner, 0.2, {
                ease: Sine.easeOut,
                startAt: { x: '-100%' },
                x: '0%'
            }), 'begin')
            .add(new TweenMax(this.revealImg, 0.2, {
                ease: Sine.easeOut,
                startAt: { x: '100%' },
                x: '0%'
            }), 'begin');
    }

    hideImage = () => {
        TweenMax.killTweensOf(this.revealInner);
        TweenMax.killTweensOf(this.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                TweenMax.set(this.element, { zIndex: 999 });
            },
            onComplete: () => {
                TweenMax.set(this.element, { zIndex: '' });
                TweenMax.set(this.reveal, { opacity: 0 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.revealInner, 0.2, {
                ease: Sine.easeOut,
                x: '100%'
            }), 'begin')

            .add(new TweenMax(this.revealImg, 0.2, {
                ease: Sine.easeOut,
                x: '-100%'
            }), 'begin');
    }

}

// Effect 1 
class Effect2 {
    constructor(element) {
        // create the new DOM to hold the image 
        this.element = element;
        this.reveal = document.createElement('div');
        this.reveal.className = 'hover';
        this.reveal.innerHTML = `<div class="hover_inner"><div class="hover_img" style="background-image:url(${element.dataset.img})"></div></div>`;
        this.element.appendChild(this.reveal);
        this.revealInner = this.reveal.querySelector('.hover_inner');
        this.revealInner.style.overflow = 'hidden';
        this.revealImg = this.reveal.querySelector('.hover_img');

        this.eventInit();

    }

    eventInit() {
        this.getPositionElement = (ev) => {
            const mouseP = getMousePos(ev);
            const getDocPos = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop,
            }
            this.reveal.style.top = `${mouseP.y + 20 - getDocPos.top}px`;
            this.reveal.style.left = `${mouseP.x + 20 - getDocPos.left}px`;
        }

        this.element.addEventListener('mouseenter', this.mouseEnter);
        this.element.addEventListener('mousemove', this.mouseMove);
        this.element.addEventListener('mouseleave', this.mouseLeave);
    }

    mouseEnter = (ev) => {
        this.getPositionElement(ev);
        this.showImage();
    }
    mouseMove = event => requestAnimationFrame(() => {
        this.getPositionElement(event)
    });

    mouseLeave = () => {
        this.hideImage();
    };

    showImage() {
        TweenMax.killTweensOf(this.revealInner);
        TweenMax.killTweensOf(this.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                this.reveal.style.opacity = 1;
                TweenMax.set(this.element, { zIndex: 1000 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.revealInner, 0.4, {
                ease: Quint.easeOut,
                startAt: { x: '-100%', y: '-100%' },
                x: '0%',
                y: '0%'
            }), 'begin')
            .add(new TweenMax(this.revealImg, 0.4, {
                ease: Quint.easeOut,
                startAt: { x: '100%', y: '100%' },
                x: '0%',
                y: '0%'
            }), 'begin');
    }
    hideImage() {
        TweenMax.killTweensOf(this.revealInner);
        TweenMax.killTweensOf(this.revealImg);

        this.tl = new TimelineMax({
            onStart: () => {
                TweenMax.set(this.element, { zIndex: 999 });
            },
            onComplete: () => {
                TweenMax.set(this.element, { zIndex: '' });
                TweenMax.set(this.reveal, { opacity: 0 });
            }
        })
            .add('begin')
            .add(new TweenMax(this.revealInner, 0.3, {
                ease: Quint.easeOut,
                x: '100%',
                y: '100%'
            }), 'begin')

            .add(new TweenMax(this.revealImg, 0.3, {
                ease: Quint.easeOut,
                x: '-100%',
                y: '-100%'
            }), 'begin');
    }

}

[...document.querySelectorAll('[data-fix="1"] > a , a[data-fix="1"]')].forEach(element => { new startEvent(element) });
[...document.querySelectorAll('[data-fix="2"] > a , a[data-fix="2"]')].forEach(element => { new Effect2(element) });