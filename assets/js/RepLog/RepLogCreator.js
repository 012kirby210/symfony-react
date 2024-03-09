import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class RepLogCreator extends Component {


    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.itemOptions = [
            { id:"cat", value:"Cat" },
            { id:"fat_cat", value:"Big Fat Cat" },
                { id:"laptop", value:"My Laptop" },
                { id:"coffee_cup", value:"Coffee Cup" },
    ];

        // pour utilser le framework ref, il est nécessaire d'avoir une class
        this.quantityInput = React.createRef();
        this.itemSelect = React.createRef();
    }

    handleFormSubmit(event){

        event.preventDefault();

        const { onAddRepLog } = this.props;
        const itemSelect = this.itemSelect.current;
        const quantityInput = this.quantityInput.current;
        onAddRepLog(itemSelect.options[itemSelect.selectedIndex].value, quantityInput.value);

        // reset index and value
        quantityInput.value= '';
        itemSelect.selectedIndex = 0;
    }

    render(){

        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label className="sr-only control-label required" htmlFor="rep_log_item">
                        What did you lift?
                    </label>
                    <select id="rep_log_item"
                            ref={this.itemSelect}
                            required="required"
                            className="form-control"
                    >
                        <option value="">What did you lift?</option>
                        { this.itemOptions.map( (item) =>
                            (<option key={item.id} value={item.id}>{item.value}</option>))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label className="sr-only control-label required" htmlFor="rep_log_reps">
                        How many times?
                    </label>
                    <input type="number" id="rep_log_reps"
                           ref={this.quantityInput}
                           required="required"
                           placeholder="How many times?"
                           className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">I Lifted it!</button>
            </form>
        )
    }
}

RepLogCreator.propTypes = {
    onAddRepLog: PropTypes.func.isRequired
}