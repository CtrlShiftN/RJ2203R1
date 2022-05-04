import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

const YupValidationForm = () => {
    const formSchema = Yup.object().shape({
        username: Yup.string().min(2, "Too short").max(10, 'Too long').required('Please enter username'),
        email: Yup.string().email('Invalid email').required('Please enter email'),
    });
    return (
        <Formik
            initialValues={
                { username: '', email: '' }
            }
            onSubmit={(values) => {console.log(values)}}
            validationSchema={formSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <label forHtml="username">Username: </label>
                    <Field name="username"></Field>
                    {errors.username && touched.username ? <div className="error-block">{errors.username}</div> : null}
                    <br/>
                    <label forHtml="email">Email: </label>
                    <Field type="email" name="email"></Field>
                    {errors.email && touched.email ? <div className="error-block">{errors.email}</div> : null}
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    )
}
export default YupValidationForm;