import { Section } from 'Blog'

const Latest = ({ latest }) => {

    return <Section title='Latest posts'>
        {
            latest?.map(i => <div
                key={i.id}
            >
                {i.title}
            </div>)
        }
    </Section>
}

export default Latest
