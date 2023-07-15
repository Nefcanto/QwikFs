// https://www.corewebvitals.io/pagespeed/fix-slow-hero-images-core-web-vitals
import { getPixel } from 'Base'

const Image = ({
    alt,
    containerClass,
    imageClass,
    priority,
    src,
}) => {

    const id = Date.now()
    let xsWidth
    let smWidth
    let mdWidth
    let lgWidth
    let xlWidth
    let xxlWidth

    const getWidth = (tailwindWidth) => {
        const values = tailwindWidth.match(/\d+/g)
        if (values && values.length > 0) {
            if (tailwindWidth.indexOf('px') > -1) {
                return values[0]
            } else if (tailwindWidth.indexOf('%') > -1) {
                return null
            } else {
                return getPixel(values[0])
            }
        }
        return null
    }

    const getContainerSizeBasedOnTailwindClassesToPreventCls = () => {
        if (!containerClass) {
            return
        }
        const matches = containerClass.match(/[^ ]*w-[^ ]*/g)
        if (!matches) {
            return
        }
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i]
            if (match.startsWith('sm')) {
                smWidth = getWidth(match)
            }
            else if (match.startsWith('md')) {
                mdWidth = getWidth(match)
            }
            else if (match.startsWith('lg')) {
                lgWidth = getWidth(match)
            }
            else if (match.startsWith('xl')) {
                xlWidth = getWidth(match)
            }
            else if (match.startsWith('xxl')) {
                xxlWidth = getWidth(match)
            }
            else {
                xsWidth = getWidth(match)
            }
        }

        smWidth = smWidth || xsWidth
        mdWidth = mdWidth || smWidth
        lgWidth = lgWidth || mdWidth
        xlWidth = xlWidth || lgWidth
        xxlWidth = xxlWidth || xlWidth

        xsWidth = xsWidth || '360'
        smWidth = smWidth || '640'
        mdWidth = mdWidth || '768'
        lgWidth = lgWidth || '1024'
        xlWidth = xlWidth || '1280'
        xxlWidth = xxlWidth || '1536'
    }
    getContainerSizeBasedOnTailwindClassesToPreventCls()

    const dynamicProps = {}
    if (priority) {
    } else {
        dynamicProps.loading = "lazy"
    }
    if (!src?.endsWith('.webp')) {

        dynamicProps.srcset =
            `${src}/${xsWidth} 360w, ` +
            `${src}/${smWidth} 640w, ` +
            `${src}/${mdWidth} 768w, ` +
            `${src}/${lgWidth} 1024w, ` +
            `${src}/${xlWidth} 1280w, ` +
            `${src}/${xxlWidth} 1536w`
    }

    return <div
        class={containerClass || ""}
    >
        <img
            id={id}
            src={src}
            class={(
                (imageClass?.indexOf('object-') > -1 || imageClass?.indexOf('bg-') > -1)
                    ?
                    ''
                    : ' w-full h-full object-cover ') +
                (imageClass || "")
            }
            alt={alt || ''}
            {...dynamicProps}

        />
    </div>
}

export default Image
