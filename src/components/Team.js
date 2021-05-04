import React, {Component} from 'react'
import axios from 'axios'


class Team extends Component {
    constructor(props){
        super(props)
        this.state = {
            teamArr:[]
        }
    }


    componentDidMount() {
        axios.get('/api/team')
            .then((res) => {
                this.setState({ teamArr: res.data })
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
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
                
                {this.state.teamArr.map((character) => {
                        return (
                            <div class="stuff">
                                <div>
                                    {
                                        character.name
                                    }
                                        <img className='team-container' src={character.image}></img>
                                    <br></br>
                                    <br></br>
                                <button onClick= {() => this.deleteCharacter}>Fatality</button>
                                    
                                </div>
                            </div>
                        )
                    })}

            </div>
            
        )
    }
}



export default Team