import React, {Component} from "react"; 

export default class FilterObject extends Component {
    constructor() {
        super(); 
        
        this.state = {
            students: [
                {
                    name: "Monica", 
                    age: 34, 
                    computer: "macbook"
                },
                {
                    name: "Karen", 
                    age: 24, 
                    computer:"macbook"
                }
            ], 
            userInput: "", 
            filteredStudents: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterStudents(prop) {
        let students = this.state.students; 
        let filteredStudents = []; 

        for (let i = 0; i < students.length; i++) {
            if (students[i].hasOwnProperty(prop)) {
                filteredStudents.push(students[i])
            }
        }
        this.setState({filteredStudents: filteredStudents})
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.students, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterStudents(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredStudents, null, 10)}</span>
            </div>
        )
    }
}