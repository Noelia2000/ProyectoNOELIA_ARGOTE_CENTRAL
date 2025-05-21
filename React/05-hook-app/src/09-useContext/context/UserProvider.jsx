import { UserContext } from "./UserContext"

const user={
    id: 123,
    name: 'Noelia Argote',
    email: 'Noelia2000@gmail.com'
}
export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{hola:'Mundo', user:user}}>
            {children}

        </UserContext.Provider>
    )
}
