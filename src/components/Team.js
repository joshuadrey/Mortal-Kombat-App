import React, { Component } from 'react'
import axios from 'axios'
// import TeamName from './component/TeamName'



class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamArr: []
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







    render() {

        return (
            <div>

                {/* <TeamName/> */}

                {this.props.teamArr.map((character) => {
                    console.log(character)
                    return (
                        <div class="stuff">
                            <div class>
                                {
                                    character.character.name
                                }
                                <img className='pic-container' src={character.character.image}></img>
                                <br></br>
                                <br></br>
                                <button class='btn' onClick={() => this.props.deleteCharacter(character.character)}>Fatality</button>


                            </div>
                        </div>
                    )
                })}

            </div>

        )
    }
}



export default Team