let observer = null

const Scroll = {
    toggle: (entry, filter, keep) => {
        const cssSelector = `[${filter}]`
        const elements = Array.from(entry.target.querySelectorAll(cssSelector))
        if (entry.target.getAttribute('filter')) {
            elements.push(entry.target)
        }
        elements.forEach(element => {
            const classes = element.getAttribute(filter).split(' ')
            classes.forEach(cls => {
                if (keep) {
                    element.classList.add(cls)
                }
                else {
                    element.classList.remove(cls)
                }
            })
        })
    },
    watchScroll: () => {
        const elements = document.querySelectorAll('.scroll, .scroll-once')
        elements.forEach(element => {
            const on = (element.getAttribute('on') || '100') / 100
            observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const isOnce = entry.target.className.indexOf('scroll-once') > -1
                        const isDone = entry.target.hasAttribute('done') && entry.target.getAttribute('done') == true
                        if (isOnce) {
                            if (!isDone) {
                                Scroll.toggle(entry, 'in', true)
                                Scroll.toggle(entry, 'out', false)
                                entry.target.setAttribute('done', true)
                            }
                        }
                        else {
                            Scroll.toggle(entry, 'in', true)
                            Scroll.toggle(entry, 'out', false)

                        }
                    }
                    else {
                        const isOnce = entry.target.className.indexOf('scroll-once') > -1
                        const isDone = entry.target.hasAttribute('done') && entry.target.getAttribute('done') == true
                        if (!isOnce) {
                            Scroll.toggle(entry, 'in', false)
                            Scroll.toggle(entry, 'out', true)
                        }
                    }
                })
            }, {
                root: null,
                rootMargin: '0px',
                threshold: on > 0 && on < 1 ? on : 1
            })
            observer.observe(element)
        })
    }
}

Scroll.watchScroll()
