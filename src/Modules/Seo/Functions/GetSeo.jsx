const GetSeo = (getData, resolveValue) => {
    const {
        schemas,
        seo,
        socialTags,
    } = resolveValue(getData)

    return {
        title: seo?.metaTitle || seo?.pageTitle,
        meta: [
            {
                name: seo?.metaDescription && 'description',
                content: seo?.metaDescription,
            },
            {
                name: seo?.keywords && 'keywords',
                content: seo?.keywords,
            },
            {
                name: seo?.metaRobots && 'robots',
                content: seo?.metaRobots,
            },
            {
                property: socialTags?.locale && 'og:locale',
                content: socialTags?.locale,
            },
            {
                property: socialTags?.type && 'og:type',
                content: socialTags?.type,
            },
            {
                property: socialTags?.title && 'og:title',
                content: socialTags?.title,
            },
            {
                property: socialTags?.description && 'og:description',
                content: socialTags?.description,
            },
            {
                property: socialTags?.url && 'og:url',
                content: socialTags?.url,
            },
            {
                property: socialTags?.name && 'og:site_name',
                content: socialTags?.name,
            },
            {
                property: socialTags?.image && 'og:image',
                content: socialTags?.image,
            },
            {
                property: socialTags?.title && socialTags?.image && 'og:image:alt',
                content: socialTags?.title,
            },
            {
                name: socialTags?.title && socialTags?.image && 'twitter:card',
                content: 'summary_large_image',
            },
            {
                name: socialTags?.title && 'twitter:title',
                content: socialTags?.title,
            },
            {
                name: socialTags?.description && 'twitter:description',
                content: socialTags?.description,
            },
            {
                name: socialTags?.image && 'twitter:image',
                content: socialTags?.image,
            },
            {
                name: socialTags?.title && socialTags?.image && 'twitter:image:alt',
                content: socialTags?.title,
            },
            {
                name: socialTags?.twitterUsername && 'twitter:site',
                content: socialTags?.twitterUsername,
            },
            {
                name: socialTags?.twitterUsername && 'twitter:creator',
                content: socialTags?.twitterUsername,
            },
        ],
        link: [
            {
                rel: seo?.canonical && 'canonical',
                href: seo?.canonical
            },
        ],
        frontmatter: {
            schemas
        }
    }
}

export default GetSeo
