import React, { Component } from 'react';
import InputsMaximum from "./components/Input/input-max";
import InputsMinimum from "./components/Input/input-min";
import InputStep from "./components/Input/input-step";
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: Number(localStorage.getItem('count')),
            isDecreaseButtonDisabled: JSON.parse(localStorage.getItem('isDecreaseButtonDisabled')),
            isIncreaseButtonDisabled: JSON.parse(localStorage.getItem('isIncreaseButtonDisabled')),
            maximum: Number(localStorage.getItem('maximum')) || 10,
            minimum: Number(localStorage.getItem('minimum')),
            step: Number(localStorage.getItem('step')) || 1
        }

    }

    componentDidMount() {
        localStorage.setItem('isDecreaseButtonDisabled', JSON.stringify(true))
        localStorage.setItem('isIncreaseButtonDisabled', JSON.stringify(false))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const { count, step, minimum, maximum } = this.state;

        if ( prevState.count !== count ) {
            localStorage.setItem('count', count)
            if (count + step > maximum) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
                localStorage.setItem('isIncreaseButtonDisabled', JSON.stringify(true))
            }

            if ( count === minimum ) {
                this.setState({
                    isDecreaseButtonDisabled: true,
                })
                localStorage.setItem('isDecreaseButtonDisabled', JSON.stringify(true))
            }

            if ( count === maximum ) {
                this.setState({
                    isIncreaseButtonDisabled: true,
                })
                localStorage.setItem('isIncreaseButtonDisabled', JSON.stringify(true))
            }
        }
    }

    increaseCount = () => {
        const { count, step } = this.state;

        this.setState({
            count: count + step,
            isDecreaseButtonDisabled: false,
        })
        localStorage.setItem('isDecreaseButtonDisabled', JSON.stringify(false))
    }

    decreaseCount = () => {
        const { count, step } = this.state;

        this.setState({
            count: count - step,
            isIncreaseButtonDisabled: false,
        })
        localStorage.setItem('isIncreaseButtonDisabled', JSON.stringify(false))
    }

    resetCount = () => {
        this.form = document.getElementById('myForm');
        localStorage.clear();
        this.form.reset();
        this.setState({
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            maximum: Number(localStorage.getItem('maximum')) || 10,
            minimum: Number(localStorage.getItem('minimum')),
            step: Number(localStorage.getItem('step')) || 1
        })
    }

    setMaximum = (event) => {
        localStorage.setItem('maximum', event.target.value);
    }

    setMinimum = (event) => {
        localStorage.setItem('minimum', event.target.value);
    }

    setStep = (event) => {
        localStorage.setItem('step', event.target.value);
    }

    setSettings = () => {
        this.setState({
            count: Number(localStorage.getItem('minimum')),
            minimum: Number(localStorage.getItem('minimum')),
            maximum: Number(localStorage.getItem('maximum')),
            step: Number(localStorage.getItem('step')),
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