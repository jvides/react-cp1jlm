import React from "react"
import SimpleTable from "./DataTable"
import data from "./data.json"
import GuttersGrid from "./TileNavigation"
import TileConfig from "./TileNavConfig.json"
import Category from "./Category"
import DataModel from "./DataModel"
import Notifications from "./Notifications"
import Validations from "./Validations"

class DataModel extends React.Component {
  constructor() {
    super()
    this.state = {
      attributeName: null,
      dataType: null,
      length: null,
      order: null,
      content: null
    }
    this.handleTileOnClick = this.handleTileOnClick.bind(this) 
  }

  //TODO: Wire up what is in the return of the switch statement, so it renders the resepective screen components below
  //      It will require setting upa state variable too.
  handleTileOnClick(param, event) {
    switch(param) {
      case 'Categories': 
        return this.setState({content: <Category attributeName={this.state.attributeName} dataType={this.state.dataType} length={this.state.length} order={this.state.order} />})
      case 'Data Model':
        const objSimpleTable = <SimpleTable data={data} />
        return this.setState({content: objSimpleTable})
      case 'Validations':
        return this.setState({content: <Validations />})
      case 'Notifications':
        return this.setState({content: <Notifications />})
    }             
  }

  render() {

    return(
      <div>
      {
        //TODO: Gridview or something to make clickable tile Navigation
        <GuttersGrid 
        data = {TileConfig} 
        handleTileNav = {this.handleTileOnClick}
        />
      }       
      {this.state.content}       
      </div>
    )
  }
}

export default DataModel