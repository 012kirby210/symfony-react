import React, {Component} from 'react';
import PropTypes from "prop-types";
import Button from "../Elements/Button";


export default class RepLogCreator extends Component {


    constructor(props) {
        super(props);

        this.state = {
            selectedItemId: '',
            quantityValue: 0,
            quantityInputError: ""};

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSelectedItemChange = this.handleSelectedItemChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);

        // pour utilser le framework ref, il est nécessaire d'avoir une class
    }

    handleFormSubmit(event){

        event.preventDefault();

        const { onAddRepLog } = this.props;
        const { quantityValue, selectedItemId } = this.state;

        if (quantityValue<=0){
            // ! TODO
            this.setState( {quantityInputError: "la quantité ne peut pas être négative."});
            // no submit
            return ;
        }

        // const itemLabel = this.itemOptions.find( (option) => option.id === selectedItemId).value;
        const itemValue = selectedItemId;

        onAddRepLog(itemValue, quantityValue);

        // reset index and value
        this.setState( {
            quantityInputError: "",
            quantityValue: 0,
            selectedItemId: ''
        });
    }

    handleSelectedItemChange(event) {
        this.setState({
            selectedItemId: event.target.value
        });
    }

    handleQuantityChange(event) {
        this.setState({
            quantityValue: event.target.value
        });
    }

    render(){
        const { quantityInputError, quantityValue, selectedItemId } = this.state;
        const { validationErrorMessage, itemOptions } = this.props;

        return (
            <form onSubmit={this.handleFormSubmit}>
                {validationErrorMessage &&
                    (<div className={`alert alert-danger`}>
                        {validationErrorMessage}
                    </div> )}
                <div className="form-group">
                    <label className="sr-only control-label required" htmlFor="rep_log_item">
                        What did you lift?
                    </label>
                    <select id="rep_log_item"
                            value={selectedItemId}
                            onChange={this.handleSelectedItemChange}
                            required="required"
                            className="form-control"
                    >
                        <option value="">What did you lift?</option>
                        { itemOptions.map( (item) =>
                            (<option key={item.id} value={item.id}>{item.value}</option>))
                        }
                    </select>
                </div>

                <div className={`form-group ${quantityInputError ? 'has-error' : ''}`}>
                    <label className="sr-only control-label required" htmlFor="rep_log_reps">
                        How many times?
                    </label>
                    <input type="number" id="rep_log_reps"
                           value={quantityValue}
                           onChange={this.handleQuantityChange}
                           required="required"
                           placeholder="How many times?"
                           className="form-control"/>
                    {quantityInputError && <span className="help-block">{quantityInputError}</span>}
                </div>
                <Button type="submit" className="btn-primary">I lifted it ! <span className="fa fa-plus-circle"></span></Button>
            </form>
        )
    }
}

RepLogCreator.propTypes = {
    onAddRepLog: PropTypes.func.isRequired,
    validationErrorMessage: PropTypes.string.isRequired,
    itemOptions: PropTypes.array.isRequired,
}