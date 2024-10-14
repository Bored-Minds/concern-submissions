import { InputAdornment, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
    const [stateIdNumber, setStateIdNumber] = useState('');
    const [social, setSocial] = useState('');

    return (
        <div className="App">
            <Tooltip title="This can be a Driver's License Number or State Issued Identification Number.">
                <TextField
                    label="State Issued ID Number"
                    value={stateIdNumber}
                    onChange={(e) => {
                        const cleansedInput = e.target.value.replace(/[^a-z\d]/gi, "");
                        setStateIdNumber(cleansedInput);
                    }}
                />
            </Tooltip>
            <Tooltip title="The last 4 (four) digits of your Social Security Number.">
                <TextField
                    label="Last 4 of SSN"
                    onChange={(e) => {
                        const cleansedInput = e.target.value.replace(/\D/g, "");
                        setSocial(cleansedInput);
                    }}
                    value={social}
                    type="password"
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end"><VisibilityIcon/></InputAdornment>
                        },
                        htmlInput: {
                            minLength: 4,
                            maxLength: 4
                        }
                    }}
                />
            </Tooltip>
        </div>
    );
}

export default App;
