import { useState } from 'react'
import registerLogo from '../constants/assets/i (1).webp'
import Input from '../ui/Input'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
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
					<button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
						Register
					</button>
				</form>
			</main>
		</div>
	)
}

export default Register
