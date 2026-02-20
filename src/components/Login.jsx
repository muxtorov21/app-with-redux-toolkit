import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import registerLogo from '../constants/assets/i (1).webp'
import AuthService from '../service/auth'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import Input from '../ui/Input'
import ValidationsError from './ValidationsError'
const Login = () => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(signUserStart())
		const user = { email, password }
		try {
			const response = await AuthService.userLogin(user)
			dispatch(signUserSuccess(response.user))
		} catch (error) {
			dispatch(signUserFailure(error.response.data.errors))
		}
	}
	return (
		<div className='text-center mt-5'>
			<main className='form-signin w-25 m-auto'>
				<form>
					<img
						src={registerLogo}
						alt='rgister logo'
						className='mb-2'
						width={80}
						height={80}
					/>
					<h1 className='h3 mb-3 fw-normal'>Please login</h1>
					<ValidationsError />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input label={'Password'} state={password} setState={setPassword} />

					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						disabled={isLoading}
						type='submit'
						onClick={loginHandler}
					>
						{isLoading ? 'loading...' : 'Login'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
