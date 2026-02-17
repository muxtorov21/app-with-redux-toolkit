import { useState } from 'react'
import registerLogo from '../constants/assets/i (1).webp'
import Input from '../ui/Input'
const Login = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
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
					<Input label={'Username'} state={name} setState={setName} />
					<Input label={'Email address'} state={email} setState={setEmail} />

					<button className='w-100 btn btn-lg btn-primary mt-2' type='submit'>
						Log in
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
