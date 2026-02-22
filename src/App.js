import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Login, Main, Navbar, Register } from './components'
import { getItem } from './helpers/persistanse-storage'
import AuthService from './service/auth'
import { signUserSuccess } from './slice/auth'
const App = () => {
	const dispatch = useDispatch()
	const getUser = async () => {
		try {
			const reseponse = await AuthService.getUser()
			dispatch(signUserSuccess(reseponse.user))
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		const token = getItem('token')
		if (token) {
			getUser()
		}
	}, [])
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</div>
	)
}

export default App
