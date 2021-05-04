import React, { Component } from 'react'
import axios from 'axios'
import FighterList from './FighterList'
import Team from './Team'
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

    selectFighter = (name, image) => {
        axios.post(`/api/characters/`, {name, image})
        .then((res) => {


            for (let i = 0; i < this.state.fightersArr.length; i++ ){
                if (this.state.fightersArr[i].name === name){
                    this.state.fightersArr.splice(i, 1)
                }
            }
    
            this.setState({teamArr: res.data})
            console.log(res.data)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    






    addCharacter = (name, image) => {

        axios.get('/api/team', {
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
                                        <img className='pic-container' src={character.image}></img>
                                    <br></br>
                                    <br></br>
                                    <button onClick={() => this.selectFighter( character.name, character.image)}>Finish Him</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                
                <div class='teams'>
                    <p>team</p>
                    
                    <Team
                    addCharacter={this.addCharacter}
                    teamArr={this.state.teamArr}
                    />
                    <div>
                      
                    </div>
                
                
                {/* <FighterList /> */}
                {/* <Team /> */}
                {/* <TeamName /> */}
                {/* <Character/> */}

            </div>
            </div>
        )
    }
}


export default Fighters