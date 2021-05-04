import {Component} from 'react'
import axios from 'axios'


class Team extends Component {
    constructor(){
        super()
        this.state = {
            teamArr:{}
        }
    }

   
    deleteCharacter = (id) => {
        console.log(id);
        axios.delete(`/api/characters/${id}`)
        .then((res) => {
            this.setState({teamArr: res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    render(){
        return(
            <div>
                <h2>Your Team:</h2>
            </div>
            
        )
    }
}



export default Team