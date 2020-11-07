import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";



interface Props {
    checkboxName: string;
    labelText: string;
    clickHandler: () => void;
    checkboxValue: boolean;
}

const Container = styled.div`
  width: 100%;
  align-content: center;
  max-width: 1170px;
  padding: 10px;
  text-align: center;
  margin: auto;
`;

const Logo = styled.img`
  max-width: 300px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;

const Loader = styled.img`
  max-width: 100px;
  width: 70%;
  height: 70%;
  object-fit: contain;
  object-position: center;
`;

const CheckboxRectangle = styled.div`
    width: 340px;
    height: 80px;
    left: 18px;
    top: 142px;

    background: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: left;
`;


const CheckboxCard: React.FC<Props> = ({ checkboxName, checkboxValue, labelText, clickHandler }) => {

    const [state, setState] = React.useState({
        value: checkboxValue,
        errors: []
    });

    const handleChange = (event: any) => {
        state.value= !state.value;
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <CheckboxRectangle className={`checkboxWrapper ${state.value ? "activeCheckboxBackground" : ""}`}>
            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={state.value} name={checkboxName} color="primary" onChange={handleChange} />}
                        label={labelText}
                    />
                </FormGroup>
            </FormControl>
        </CheckboxRectangle>
    );
};

export default CheckboxCard;