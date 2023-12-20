import React, { useEffect, useState } from "react";
import cn from "classnames";
import { FormProvider, useForm } from 'react-hook-form'
import { BsFillCheckSquareFill } from 'react-icons/bs'

import styles from "./LoginPage.module.scss";
import { Input, Button } from "../../common/components";
import { email_validation, password_validation } from "../../utils/inputValidations";

export const LoginPage = (props) => {
	const methods = useForm();
	const { watch, formState: { errors },handleSubmit } = methods;
	const watchAllFields = watch() // when pass nothing as argument, you are watching everything
	// console.log("##methods :", methods);
	const [success, setSuccess] = useState(false);

	const onSubmit = methods.handleSubmit(data => {
		console.log(data);
		methods.reset(); /** resetting the form data after successful submission of the form :) **/
		setSuccess(true);
	});

	return (<div className={cn(styles.loginPage, "login-page")}>
		<div className={styles.formContainer}>
			<FormProvider {...methods}>
				<form
					onSubmit={e => e.preventDefault()}
					noValidate
					autoComplete="off"
					className="container"
				>
					<div className={styles.formTitle}> <h1>Login</h1></div>
					<Input {...email_validation} />
					<Input {...password_validation} />
					{success && (
						<p className={styles.successfulSubmissionMessage}>
							<BsFillCheckSquareFill /> Form has been submitted successfully
						</p>
					)}
					<div className={styles.loginButton}>
						<Button id="submit" label="Login" onClick={onSubmit} />
						<Button id="signup" label="Sign Up" onClick={() => { alert('yet to implement this feature') }} />
					</div>
				</form >
			</FormProvider >
		</div >
	</div >)
}