import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class RepLogCreator extends Component {


    constructor(props) {
        super(props);

        this.state = {
            selectedItemId: '',
            quantityValue: 0,
            quantityInputError: ""};

        this.itemOptions = [
            { id:"cat", value:"Cat" },
            { id:"fat_cat", value:"Big Fat Cat" },
                { id:"laptop", value:"My Laptop" },
                { id:"coffee_cup", value:"Coffee Cup" },
            {id: "invalid_item", value:"some thing"},
    ];

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
        return (
            <form onSubmit={this.handleFormSubmit}>
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
                        { this.itemOptions.map( (item) =>
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

                <button type="submit" className="btn btn-primary">I Lifted it!</button>
            </form>
        )
    }
}

RepLogCreator.propTypes = {
    onAddRepLog: PropTypes.func.isRequired
}