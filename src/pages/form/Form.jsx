
import { Input, Button} from "@mui/joy"
import styles from "./Form.module.css"


const Form = () => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <Input variant="outlined" size="md" color="primary" placeholder="username" />
                <Input color="primary" placeholder="password" type='password' />
                <Input color="primary" placeholder="email" type='e-mail' />
                <div className='btn-submit'>
                    <Button>Send</Button>
                </div>
            </div>
        </div>

    )
}

export default Form