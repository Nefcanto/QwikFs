import { Section } from 'Blog'

const Categories = ({ categories }) => {

    return <Section title="Categories">
        {
            categories?.map(i => <div key={i.id}>{i.title}</div>)
        }
    </Section>
}

export default Categories
