import React from 'react';
import Button from '../components/Button';
import ColorPicker from '../components/ColorPicker';
import DropDownButton from '../components/DropDownButton';
import TextInput from '../components/TextInput';
import Axios from "axios";
import "./AddBox.css"
import Backend from "../backend/Backend"
export class AddBox extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            displayColorPicker: false,
            name: '',
            weight: 0,
            country: 'Sweden',
            background: "#ddddddd"
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.onChangeDropButton = this.onChangeDropButton.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeWeight(event) {
        this.setState({ weight: event.target.value });
    }

    onChangeDropButton(event) {
        this.setState({ country: event.target.value });
    }
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.setState({ displayColorPicker: false });
    };

    colorButtonClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ display: false })
    };


    saveClick(event) {
        if (this.state.weight < 0)
            return alert("Negative values are not permitted");

        if (this.state.name == "")
            return alert("Please fill name field");

        var rgb = new Backend().hexToRgb(this.state.background);
        var color = "rgb(" + rgb.r + ", " + rgb.g + "," + rgb.b + ")"
        Axios.post("http://localhost:3001/addbox", {
            name: this.state.name,
            weight: parseInt(this.state.weight),
            country: this.state.country,
            color: color,
        }).then(() => {
            console.log("sucess");
        });
    }



    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        return (
            <div className="AddBox">
                <TextInput labelTitle="Name"
                    type="text"
                    name="name"
                    min=""
                    onChange={this.handleChangeName}
                />
                <TextInput labelTitle="Weight"
                    type="number"
                    min="0"
                    name="weight"
                    onChange={this.handleChangeWeight}
                />
                <label>Colour</label>
                <div>
                    <button className="colorButton"
                        onClick={this.colorButtonClick}
                        style={{
                            backgroundColor: this.state.background,
                        }}> {
                            this.state.background == "#ddddddd" ?
                                "Click to show colour picker" :
                                "Click again to change colour"

                        } </button>
                    {this.state.displayColorPicker ? <div style={popover}>
                        <ColorPicker
                            color={this.state.color}
                            onChangeComplete={this.handleChangeComplete}
                        />
                    </div> : null}
                </div>
                <DropDownButton
                    datatestid="select"
                    label="Country"
                    options={['Sweden', 'China', 'Brazil', 'Australia']}
                    value={this.setState.country}
                    onChange={this.onChangeDropButton}
                />
                <Button
                    children="Save"
                    onClick={this.saveClick}
                    className="saveButton"
                />
            </div>
        )
    }
}
export default AddBox;
