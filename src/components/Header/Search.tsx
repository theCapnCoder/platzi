import {useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Popover, TextField } from "@mui/material";

export default function PopperPopupState() {
   const [inputValue, setInputValue] = useState('');
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setPopoverOpen(event.target.value.trim() !== '');
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <div>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
      />
      <Popover
        open={isPopoverOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        <div style={{ padding: 16 }}>
          <TextField label="Last Name" variant="outlined" fullWidth />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePopoverClose}
            style={{ marginTop: 16 }}
          >
            Save
          </Button>
        </div>
      </Popover>
    </div>
  );
}
