import styles from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const ContactForm = ({ handleSubmit }) => {
    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Too short!").max(50, "Too long").required('Required'),
        number: Yup.string().min(3, "Too short!").max(50, "Too long").required('Required'),
    });

    return <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        <Form className={styles.contactForm}>
            <div className={styles.contactFormItem}>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" placeholder="Taras Shevchenko" />
                <ErrorMessage name="name" component="div" className={styles.contactFormError} />
            </div>
            <div className={styles.contactFormItem}>
                <label htmlFor="number">Number</label>
                <Field type="text" id="number" name="number" placeholder="459-12-56" />
                <ErrorMessage name="number" component="div" className={styles.contactFormError} />
            </div>
            <button type="submit" className={styles.contactFormButton}>Add contact</button>
        </Form>
    </Formik>
}

export default ContactForm;