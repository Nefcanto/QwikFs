import {
    component$,
    useSignal,
} from '@builder.io/qwik'
import { Tabs as RunnableTabs } from 'Dashboard'

const Dashboard = component$(() => {

    const tabContents = useSignal(RunnableTabs[0].contents)

    console.log(tabContents.value)

    return <>
        <div class='flex'>
            <div>
                {
                    RunnableTabs.map((item, index) => <button
                        class='p-2 bg-blue-200 m-2 block'
                        key={item.id}
                        onClick$={() => tabContents.value = RunnableTabs[index].contents}
                    >
                        {item.title}
                    </button>
                    )
                }
            </div>
            <div class='p-2 bg-yellow-200'>
                {tabContents.value.children}
            </div>
        </div>
    </>
})

export default Dashboard
