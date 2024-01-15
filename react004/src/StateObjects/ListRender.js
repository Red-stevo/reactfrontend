import {Component} from "react";

class ListRender extends Component
{
    render() {

        const list = [{regNo:921, name : "Brenda", hostel : "Catholic Hostels"},
            {regNo: 931, name : "Stephen", hostel: "Greens Hostels"},
            {regNo:920,name: "Mirowe",hostel: "Greens Hostels"}];

        const elementList = list.map( (student) => {
            return(
                <div key={student.regNo}>
                    <h1>{student.regNo}  {student.name}   {student.hostel}</h1>
                </div>
            );
        })
        return(<div>
            {elementList}
        </div>);
    }
}

export default ListRender;