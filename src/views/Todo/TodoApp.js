import React from "react";
import './TodoApp.scss'
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";



class TodoApp extends React.Component{
    state = {
        listTodos:[
            {id: '1', title: 'Dev' },
            {id: '2', title: 'Beg' },
            {id: '3', title: 'Best' } 
        ]
    }
    addNewTitle = (title)=>{
        this.setState({
            listTodos: [...this.state.listTodos,title]
        })
    }
    editTite = (title)=>{
        let copyListTodo = [...this.state.listTodos]
        let editTitle = this.state.listTodos.findIndex(item=>item.id === title.id)
        copyListTodo[editTitle]=title 
        console.log(copyListTodo)
        
        this.setState({
            listTodos: copyListTodo
        })
        
    }
    deleteTitle = (id)=>{
        let listTitle = this.state.listTodos
        listTitle = listTitle.filter(item => item.id !== id)
        
        this.setState({
            listTodos: listTitle
        })
    }
    handleChaneltitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }
    render(){
        
        return(
            <div className="todo-app-container">
                <AddTodo
                    addNewTitle = {this.addNewTitle}
                />
                <ListTodo
                    listTodos = {this.state.listTodos}
                    deleteTitle = {this.deleteTitle}
                    editTite = {this.editTite}
                />
            </div>
        )
    }
}


export default TodoApp;