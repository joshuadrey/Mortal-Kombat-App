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
        console.log(name, image)
        axios.post(`/api/characters/`, {name, image})
        .then((res) => {
               console.log(res.data)
                const fightersArr = [...this.state.fightersArr]
            for (let i = 0; i < fightersArr.length; i++ ){
                if (fightersArr[i].name === name){
                    fightersArr.splice(i, 1)
                }
            }
    
            this.setState({teamArr: res.data, fightersArr})
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


    deleteCharacter = (char) => {
        // console.log(id);
        axios.delete(`/api/characters/${char.id}`)
        .then((res) => {

            this.state.fightersArr.unshift(char)

            this.setState({teamArr: res.data})
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


  

    render() {

        console.log(this.state)

        return (
      

            <div class='fighters'>
                <img alt='' src={this.props.image}></img>



                <div class='FL'>
                    <div  class= 'title1'>
                    <h2>Fighters:</h2>
                    </div>
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
                                    <button class = 'btn' onClick={() => this.selectFighter( character.name, character.image)}>Finish Him</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
                
                <div class='teams'>
                    <h1 class = 'title2'>Your Team:</h1>
                    
                    <Team
                    addCharacter={this.addCharacter}
                    teamArr={this.state.teamArr}
                    deleteCharacter={this.deleteCharacter}
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