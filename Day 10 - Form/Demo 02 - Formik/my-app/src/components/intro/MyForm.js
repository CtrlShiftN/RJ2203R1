import { Formik, Form, Field } from "formik"

const MyForm = () => {
    return (
        <Formik
            initialValues={
                { username: '', email: '' }
            }
            onSubmit={(values) => {console.log(values)}}
            validationSchema={null}
        >
            {() => (
                <Form>
                    <Field name="username"></Field>
                    <Field type="email" name="email"></Field>
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    )
}
export default MyForm;