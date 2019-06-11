import React, { Component } from 'react'

class index extends Component {
    constructor(props){
        super(props);
        this.state={
            textData:this.props.text,
            editMode:false,
            maxChar:250,
            textLength:props.text.length
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        
        if(this.props.maxChar === undefined){
            this.setState({ maxChar:250, textLength:0});
        }
        else{
        
            this.setState({ maxChar:this.props.maxChar,textLength:0});
        }
    }

    handleChange(e){
        
        if(e.target.value.length <= this.state.maxChar){
            this.setState({[e.target.name]:e.target.value});
            this.setState({ textLength:e.target.value.length });
        }

    }

    handleEdit(e){
        this.setState({ editMode:true });
    }

    handleSave(e){
        this.setState({ editMode:false });
    }
    render() {
        const {maxChar, textLength, textData} = this.state;
        const editPanel=<div>
                        <textarea name="textData" onChange={this.handleChange} value={textData}/>
                        <button type='button' onClick={this.handleSave}>Save</button>
                        </div>;

        const textPanel=<div>
                           <p>{textData}</p> 
                           <button type='button' onClick={this.handleEdit}>Edit</button>
                        </div>;

        return (
            <div>
                {this.state.editMode?editPanel:textPanel}
                <p>{maxChar - textLength}</p>       
            </div>
        )
    }
}

export default index
