import React, { useState } from 'react'
import { UseLoading, LoadingComponet } from './useLoading'
import axios from 'axios'
import { useSnackbar } from 'notistack'
const ForgotPassword: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar()
    const [forgotEmail, setForgotEmail] = useState<string>('')
    const [mobNum, setMobNum] = useState<string>('')
    const { loading, startLoading, stopLoading } = UseLoading()

    const handleForgotPasswordSubmit = (e: React.FormEvent) => {
        startLoading()

        e.preventDefault()
        const data = {
            forgotEmail,
            mobNum
        }

        try {


    

            const respose = axios.post('/forgotPassword', data)
                .then(() => {
                    console.log(respose)
                    enqueueSnackbar('reset password link send sucessfully', { variant: "success" })
                })
                .catch((err) => {
                    console.log(err)
                    enqueueSnackbar("An error occured", { variant: "error" })
                })
                .finally(() => {
                    stopLoading()
                }

                )


        }
        catch (err) {


        } finally {

        }

    }
    return (
        <div>
            {
                loading ? (<LoadingComponet />)
                    :
                    (<form onSubmit={handleForgotPasswordSubmit}>
                        <div>
                            <label> Email id</label>
                            <input type="email" placeholder='Enter your Email id ' value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} />
                        </div>

                        <div>
                            <label> Phone number</label>
                            <input type="number" placeholder='Enter your mobile number ' value={mobNum} onChange={(e) => setMobNum(e.target.value)} />

                        </div>
                        <button type='submit'> Request Reset passeword</button>
                    </form>
                    )}

        </div>
    )
}

export default ForgotPassword