import { ref } from "@vue/reactivity"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logout = async () => {
    error.value = null

    try {
        await projectAuth.signOut()
    } catch(err) {
        console(error.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout