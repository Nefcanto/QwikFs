import { Resource, component$ } from '@builder.io/qwik';
import { useEndpoint } from "@builder.io/qwik-city";
import { onGet } from 'Blog'
import { Layout } from 'BlogPage'

const Loader = () => {
    const blogData = useEndpoint();

    return <Resource
        value={blogData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(data) => <Layout data={data} />}
    />
}

export default Loader

export { onGet }
