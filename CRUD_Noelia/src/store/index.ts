import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from 'sonner';
import usersReducer from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabaseMiddleware: Middleware = store => next => action => {
	const { type, payload } = action
	const previousState = store.getState() as RootState
	next(action)

	if (type === 'users/deleteUserById') { // <- eliminado un usuario
		const userIdToRemove = payload

		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: 'DELETE'
		})
			.then(res => {
				if (res.ok) {
				toast.success(`Usuario ${payload} eliminado correctamente`)
				 }
			
			})
			.catch(err => {
				
				console.log(err)
				console.log('error')
			})
	}
}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
