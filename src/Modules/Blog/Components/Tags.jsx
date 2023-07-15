import { Section } from 'Blog'

const Tags = ({ tags }) => {

    return <Section title='Tags'>
        {
            tags?.map(i => <div key={i.id}>{i.name}</div>)
        }
    </Section>
}

export default Tags
