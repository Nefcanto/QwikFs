const Versions = () => {
    return <div id='versions' style={{ display: 'none' }}>
        <div>{`Qwik: ${import.meta.env.Qwik}`}</div>
        <div>{`Qwik City: ${import.meta.env.QwikCity}`}</div>
        <div>{`Tailwind: ${import.meta.env.Tailwind}`}</div>
    </div>
}

export default Versions
