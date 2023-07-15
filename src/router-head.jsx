import { component$ } from '@builder.io/qwik'
import {
    useDocumentHead,
    useLocation,
} from '@builder.io/qwik-city'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead()
    const loc = useLocation()
    const {
        frontmatter,
        links,
        meta,
        styles,
        title,
    } = head
    const { schemas } = frontmatter
    const {
        breadcrumb,
        faqPage,
    } = schemas || {}

    return (
        <>
            <title>{title}</title>

            <link
                rel="canonical"
                href={loc.url.href}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link
                rel="icon"
                type="image/svg+xml"
                href="/favicon.svg"
            />

            {meta.map((m) => (
                <meta key={m.key} {...m} />
            ))}

            {links.map((l) => (
                <link key={l.key} {...l} />
            ))}

            {styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.style}
                />
            ))}

            {
                breadcrumb &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={breadcrumb}
                />
            }
            {
                faqPage &&
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={faqPage}
                />
            }
        </>
    )
})
