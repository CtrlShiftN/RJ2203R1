import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function LoginForm() {
    const formSchema = Yup.object().shape({
        username: Yup.string().email('Invalid username as an email').required('Username is required'),
        password: Yup.string().required('Please enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    });
    return (
        <Formik
            initialValues={
                { username: '', password: '' }
            }
            onSubmit={(values) => { console.log(values) }}
            validationSchema={formSchema}
        >
            {({ errors, touched }) => (
                <Form>
                    <label>Username</label>
                    <Field type="email" name="username"></Field>
                    {errors.username && touched.username ? <div className="error-block">{errors.username}</div> : null}
                    <br />
                    <label>Password</label>
                    <Field type="password" name="password"></Field>
                    {errors.password && touched.password ? <div className="error-block">{errors.password}</div> : null}
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}