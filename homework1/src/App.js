import React, { Component } from 'react';
import InputsMaximum from "./components/Input/input-max";
import InputsMinimum from "./components/Input/input-min";
import InputStep from "./components/Input/input-step";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            maximum: 10,
            minimum: 0,
            step: 1,
        }

        this.Settings = {
            maximum: 10,
            minimum: 0,
            step: 1
        }


    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        const { count, maximum, minimum, step } = this.state;

        if ( prevState.count !== count ) {
            if (count + step > maximum) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
            }

            if ( count === minimum ) {
                this.setState({
                    isDecreaseButtonDisabled: true,
                })
            }

            if ( count === maximum ) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
            }
        }
    }

    increaseCount = () => {
        const { count, step } = this.state;

        this.setState({
            count: count + step,
            isDecreaseButtonDisabled: false,
        })
    }

    decreaseCount = () => {
        const { count, step } = this.state;

        this.setState({
            count: count - step,
            isIncreaseButtonDisabled: false,
        })
    }

    resetCount = () => {
        this.form = document.getElementById('myForm');
        this.form.reset();
        this.Settings = {
            maximum: 10,
            minimum: 0,
            step: 1
        }
        this.setState({
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            settings: {
                maximum: -1,
            }
        })
    }

    setMaximum = (event) => {
        this.Settings.maximum = Number(event.target.value);
    }

    setMinimum = (event) => {
        this.Settings.minimum = Number(event.target.value);
    }

    setStep = (event) => {
        this.Settings.step = Number(event.target.value);
    }

    setSettings = () => {
        const { minimum, maximum, step } = this.Settings;
        this.setState({
            count: minimum,
            minimum,
            maximum,
            step,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
        })
    }

    render() {
        const { count, isDecreaseButtonDisabled, isIncreaseButtonDisabled } = this.state;
        const { increaseCount, decreaseCount, resetCount, setMaximum, setMinimum, setStep, setSettings } = this;

        return (
            <div className={'count-container'}>
                <button disabled={ isIncreaseButtonDisabled }
                        onClick={ increaseCount }>+</button>
                <h1 className={ 'count-container_count' }>{ count }</h1>
                <button disabled={ isDecreaseButtonDisabled }
                        onClick={ decreaseCount }>-</button>
                <br/>

                <form id={'myForm'} action="">
                    <div className={'input-container'}>
                        <InputsMaximum  setMaximum = { setMaximum }/>
                        <InputsMinimum setMinimum = { setMinimum }/>
                        <InputStep setStep = { setStep } />
                    </div>
                    <br/>
                        <button type={'button'} onClick={ setSettings } >Set Settings</button>
                        <button type={'button'} className={'reset-button'} onClick={ resetCount }>Reset</button>
                </form>

            </div>
        );
    }
}

export default App;