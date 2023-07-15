const useLocalizedDate = ({
    locale,
    utcDate,
}) => {

    if (locale === 'fa') {
        return new Date(utcDate).toLocaleDateString('fa-IR')
    }

    return new Date(utcDate).toLocaleDateString('en-US')
}

export default useLocalizedDate
