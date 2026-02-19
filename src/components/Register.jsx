import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import registerLogo from '../constants/assets/i (1).webp'
import AuthService from '../service/auth'
import {
	registerUserFailure,
	registerUserStart,
	registerUserSuccess,
} from '../slice/auth'
import Input from '../ui/Input'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.auth)

	const loginHandler = async e => {
		e.preventDefault()
		dispatch(registerUserStart())
		const user = { username: name, email, password }
		try {
			const response = await AuthService.userRegister(user)
			console.log(response)
			console.log(user)

			dispatch(registerUserSuccess())
		} catch (error) {
			dispatch(registerUserFailure())
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
					<h1 className='h3 mb-3 fw-normal'>Please register</h1>
					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />
					<Input
						label={'Password'}
						type='password'
						state={password}
						setState={setPassword}
					/>
					<button
						className='w-100 btn btn-lg btn-primary mt-2'
						disabled={isLoading}
						type='submit'
						onClick={loginHandler}
					>
						{isLoading ? 'loading...' : 'Register'}
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
