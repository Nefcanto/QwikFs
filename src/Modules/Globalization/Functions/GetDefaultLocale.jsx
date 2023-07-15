const getDefaultLocale = (locales) => {

    let defaultLocale = locales.find(i => i.isDefault);

    return defaultLocale

}

export default getDefaultLocale