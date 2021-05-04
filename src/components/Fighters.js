import React, { Component } from 'react'
import axios from 'axios'
import FighterList from './FighterList'
// import Team from './Team'
import TeamName from './TeamName'

// import Character from './Character'


class Fighters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fightersArr: [],
            teamArr: []
        }
    }


    componentDidMount() {
        axios.get('/api/characters')
            .then((res) => {
                this.setState({ fightersArr: res.data })
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }






    addCharacter = (name, image) => {

        axios.post('/api/characters', {
            name,
            image,
        })
            .then((res) => {
                this.setState({ teamArr: res.data })
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    // handleName = (value) => {
    //     this.setState({name: value})
    // }



    // handleImage = (value) => {
    //     this.setState({image: value})

    // }



    render() {

        console.log(this.state.fightersArr)

        return (


            <div class='fighters'>
                <img alt='' src={this.props.image}></img>



                <div class='FL'>
                    <h2>Fighters:</h2>
                    {this.state.fightersArr.map((character) => {
                        return (
                            <div class="stuff">
                                <div>
                                    {
                                        character.name
                                    }
                                    <br></br>
                                    <br></br>
                                    <button onClick={() => this.addCharacter( character.name, character.image)}>🦐</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div class='teams'>
                    <p>team</p>
                </div>
                <FighterList />
                {/* <Team /> */}
                <TeamName />
                {/* <Character/> */}

            </div>
        )
    }
}

export default Fighters