import React from "react";

class ListTodo extends React.Component{
    
    state = {
        EditTodo: {}
    }
    
    onClickDeleteButton = (id)=>{
        this.props.deleteTitle(id);
    }
    setEditTodo = (todo) =>{
        this.setState({
            EditTodo: todo
        })
        
    }


    EditListTodo = (item)=>{
        let {EditTodo} = this.state
        this.props.editTite(EditTodo)


        this.setState({
            EditTodo: item
        })
    }
    handleOnChaneEdit= (event) =>{
        let copyEditTodo = {...this.state.EditTodo}
        copyEditTodo.title = event.target.value

        this.setState({
            EditTodo: copyEditTodo
        })
    }
    z
    render(){
        let { listTodos } = this.props;
        let isEmpty = Object.entries(this.state.EditTodo).length === 0
        return(
            <div className="list-todo-content" country-info-list="true">
                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item,index) =>{
                        return(
                            <div className="todo-child" key={item.id}>
                                {
                                    isEmpty?
                                        <span>{listTodos.findIndex(index=>index.id === item.id)} - {item.title}</span>
                                    :
                                    <>
                                        {
                                            
                                            this.state.EditTodo.id === item.id  ?
                                                <span>{listTodos.findIndex(index=>index.id === item.id)} - <input
                                                                    value={this.state.EditTodo.title}
                                                                    onChange={(event)=>this.handleOnChaneEdit(event)}
                                                                /> </span>
                                            :
                                            <span>{listTodos.findIndex(index=>index.id === item.id)} - {item.title}</span>
                                        }
                                        
                                    </>
                                }   
                                {
                                    isEmpty?
                                        <button 
                                            className="edit"
                                            onClick={()=>this.setEditTodo(item)}
                                        >Edit</button>
                                    :
                                    <>
                                        {
                                            
                                            this.state.EditTodo.id === item.id  ?
                                                <button 
                                                className="edit"
                                                onClick={()=>this.EditListTodo({})}
                                                >Save</button>
                                            :
                                                <button 
                                                    className="edit"
                                                    onClick={()=>this.setEditTodo(item)}
                                                >Edit</button>
                                        }
                                        
                                    </>
                                }
                                
                                <button 
                                    className="delete" 
                                    onClick={()=> {this.onClickDeleteButton(item.id)}}
                                >Delete</button>
                                     
                             </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default ListTodo;