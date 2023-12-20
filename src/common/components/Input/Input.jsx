/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import cn from 'classnames'
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

import styles from "./Input.module.scss";
import { findInputError, isFormInvalid } from '../../../utils';


export const Input = ({ label, type, id, placeholder, onChange, validation, name, multiline }) => {
  const {
    register,
    formState: { errors },
    watch
  } = useFormContext();

  const inputError = findInputError(errors, id)
  const isInvalid = isFormInvalid(inputError)
  return (
    <div className={styles.customInput} id={`${id}_div`}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={styles.textArea}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          {...register(name, validation)}
          onChange={onChange}
        />
      )}
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className={styles.errorMessage}
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}