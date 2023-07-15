
import { post } from 'Base'

const useIncreaseViewCount = (entityType, entityGuid) => {

    post(`/viewConunt/increaseViewCount?entityType=${entityType}&entityGuid=${entityGuid}`)
}

export default useIncreaseViewCount
