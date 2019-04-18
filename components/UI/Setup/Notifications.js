import React from "react"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
function Notifications() {
  return (
    <Paper className="zulu">
      <form> 
        <h2>
        Configure Notifications
        </h2>
        <input 
          name="Description"
          value=""
          placeholder="Description"
        />     
        <br/> 
        <input 
          name="Subject"
          cols="50"
          value=""
          placeholder="Subject"
        />     
        <br/> 
        <textarea 
          name="Message"
          value=""
          placeholder="Email Message.."
        />      
        <br/> 
        <Button variant="outlined" color="primary" >
          <SaveOutlinedIcon>save</SaveOutlinedIcon>
          Save
        </Button>
        <br/>
      </form>
    </Paper>      
  )
}

export default Notifications