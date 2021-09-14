import React from 'react'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitData: [],
            formProps: {
                userName: '',
                orgName: '',
                designation: '',
                emailId: '',
                contactNo: '',
                wayToCall: '',
                message: ''
            },
            error: {
                userName: '',
                orgName: '',
                designation: '',
                emailId: '',
                contactNo: '',
                wayToCall: '',
                message: ''
            },

            allError: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelOnBlur = this.handelOnBlur.bind(this);
    }

    handelOnBlur(e) {
        let name = e.target.name;
        // console.log(e.target.name);
        let throwError = "";
        const alphaAlgo = RegExp(/^[a-zA-Z]$/);
        const numericAlgo = RegExp(/^[0-9]{10}$/);
        const emailAlgo = RegExp(/^[a-zA-Z0-9_]+[@][a-z]+[.][a-z]{2,3}$/);

        switch (name) {
            case 'userName':
                if (this.state.formProps.userName.length === 0 && this.state.formProps.userName !== alphaAlgo) {
                    throwError = "*Invalid Username."
                }
                break;
            case 'orgName':
                if (this.state.formProps.orgName.length === 0 && this.state.formProps.orgName !== alphaAlgo) {
                    throwError = "*Invalid Organization."
                }
                break;
            case 'designation':
                if (this.state.formProps.designation.length === 0 && this.state.formProps.designation !== alphaAlgo) {
                    throwError = "*Invalid Designation."
                }
                break;
            case 'emailId':
                if (this.state.formProps.emailId.length === 0 && this.state.formProps.emailId !== emailAlgo) {
                    throwError = "*Invalid Email."
                }
                break;
            case 'contactNo':
                if (this.state.formProps.contactNo.length === 0 && this.state.formProps.contactNo !== numericAlgo) {
                    throwError = "*Invalid Phone no."
                }
                break;
            case 'wayToCall':
                if (!this.state.formProps.wayToCall) {
                    throwError = "*Check atleast one."
                }
                break;
            case 'message':
                if (this.state.formProps.message.length === 0 && this.state.formProps.message !== alphaAlgo) {
                    throwError = "*Requierd Field."
                }
                break;
            default:
                break;
        }

        this.setState({
            error: {
                ...this.state.error,
                [name]: throwError
            }
        })
    }

    handleChange(e) {
        // console.log(e, e.target, "value,", e.target.text);
        let name = e.target.name;
        this.setState({
            formProps: {
                ...this.state.formProps,
                [name]: e.target.value
            }
        });
    }

    isFill(obj) {
        for (const prop in obj) {
            if (obj[prop] === "") {
                return false;
            }
            return true;
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = this.state.submitData;
        if (this.isFill(this.state.formProps)) {
            formData.push(this.state.formProps);
        }

        let showError = '';
        if (!this.isFill(this.state.formProps)) {
            showError = "All fields are Required."
        }

        this.setState({
            submitData: formData,
            formProps: {
                userName: '',
                orgName: '',
                designation: '',
                emailId: '',
                contactNo: '',
                wayToCall: '',
                message: ''
            },
            allError: showError
        })
    }

    render() {
        console.log(this.state.submitData);

        return (
            <div className='main-container'>
                <div className='form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <h1>CONTACT US</h1>
                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="userName"> NAME </label>
                                </div>
                                <div className='half-right'>
                                    <input name='userName' type='text' value={this.state.formProps.userName}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} placeholder='Name' />
                                    {this.state.error.userName && <div className='error-label'>
                                        <span >{this.state.error.userName}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="orgName">ORGANIZATION NAME </label>
                                </div>
                                <div className='half-right'>
                                    <input name='orgName' type='text' value={this.state.formProps.orgName}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} placeholder='Organization Name' />
                                    {this.state.error.orgName && <div className='error-label'>
                                        <span >{this.state.error.orgName}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="designation">DESIGNATION </label>
                                </div>
                                <div className='half-right'>
                                    <input name='designation' type='text' value={this.state.formProps.designation}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} placeholder='Designation' />
                                    {this.state.error.designation && <div className='error-label'>
                                        <span >{this.state.error.designation}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="emailId">EMAIL</label>
                                </div>
                                <div className='half-right'>
                                    <input name='emailId' type="email" value={this.state.formProps.emailId}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} placeholder='Email' />
                                    {this.state.error.emailId && <div className='error-label'>
                                        <span >{this.state.error.emailId}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="contactNo">PHONE NUMBER</label>
                                </div>
                                <div className='half-right'>
                                    <input name='contactNo' type="number" value={this.state.formProps.contactNo}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} placeholder=' Phone no.' />
                                    {this.state.error.contactNo && <div className='error-label'>
                                        <span >{this.state.error.contactNo}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label>PREFERRED WAY TO BE CONTACT </label>
                                </div>
                                <div className='half-right' onBlur={this.handelOnBlur} onChange={this.handleChange}>
                                    <div className='radio-row'>
                                        <div className='radio-check'>
                                            <input name="wayToCall" type="radio" value="email" />
                                            <label>EMAIL</label>
                                        </div>
                                        <div className='radio-check'>
                                            <input name="wayToCall" type="radio" value="phone" />
                                            <label >PHONE NO.</label>
                                        </div>
                                    </div>
                                    {this.state.error.wayToCall && <div className='error-label'>
                                        <span >{this.state.error.wayToCall}</span>
                                    </div>}

                                </div>
                            </div>
                        </div>

                        <div className='head-row'>
                            <div className='rows'>
                                <div className='half-left'>
                                    <label htmlFor="message">MESSAGE</label>
                                </div>
                                <div className='half-right'>
                                    <textarea name='message' maxLength="250" placeholder="Message" value={this.state.formProps.message}
                                        onBlur={this.handelOnBlur} onChange={this.handleChange} />
                                    {this.state.error.message && <div className='error-label'>
                                        <span >{this.state.error.message}</span>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className='footer'>
                            <div className='submit-box'>
                                <button >SUBMIT</button>
                                {this.state.allError && <div className='error-label'>
                                    <span >{this.state.allError}</span>
                                </div>}
                            </div>
                        </div>
                    </form >
                </div>

                <div className='table-container'>
                    {this.state.submitData.length > 0 &&
                        <table className='form-data'>
                            <thead>
                                <tr>
                                    <td>Name</td><td>Organization Name</td><td>Designation</td><td>Email</td><td>Phone No.</td><td>Preferred Way</td><td>Message</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.submitData.map(
                                    (item, index) =>
                                        <tr key={index}>
                                            <th>
                                                {item.userName}
                                            </th>
                                            <th>
                                                {item.orgName}
                                            </th>
                                            <th>
                                                {item.designation}
                                            </th>
                                            <th>
                                                {item.emailId}
                                            </th>
                                            <th>
                                                {item.contactNo}
                                            </th>
                                            <th>
                                                {item.wayToCall}
                                            </th>
                                            <th>
                                                {item.message}
                                            </th>
                                        </tr>
                                )
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div >
        )
    }
}

export default RegisterForm;

