import React from 'react';
import { reduxForm, Field } from 'redux-form';

const Form = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" component="input" type="text" />
            </div>
            <button disabled={pristine || submitting} type="submit">Submit</button>
            <button onClick={reset}>Reset</button>
        </form>
    )
}

export default reduxForm({
    form: 'register',
    initialValues: {
        firstName: 'aaaa'
    }
})(Form)
