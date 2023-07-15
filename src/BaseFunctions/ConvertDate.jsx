const convertDate = (
    {
        date,
        enFont,
        locale,
        options,
    }) => {

    const localeNames = {
        "fa": "fa-ir",
        "en": "en-GB",
        "ar": "ar-eg"
    }
    const defaultLocale = locale ?? "fa"

    const prefix = enFont ? "-u-nu-latn" : ""

    return new Date(date).toLocaleDateString(localeNames[defaultLocale] + prefix, options && options)
}

export default convertDate
