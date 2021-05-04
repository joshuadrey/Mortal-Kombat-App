const { urlencoded } = require("express");

let characters = [
    {
        id: 0,
        name: 'Scorpion',
        image: 'https://static.wikia.nocookie.net/gamingdatabase/images/a/a3/Scorpion_Profile.png/revision/latest?cb=20190501084933'
    },
    {
        id: 1,
        name: 'Sub Zero',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png'
    },
    {
        id: 2,
        name: 'Liu Kang',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/0/00/Liu_Kang_mk11.png/revision/latest?cb=20190329012026'
    },
    {
        id: 3,
        name: 'Lord Raiden',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/c/cb/Ra.png/revision/latest?cb=20200509154910'
    },
    {
        id: 4,
        name: 'Shang Tsung',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/84/MK11YoungShangTsung.png'
    },
    {
        id: 5,
        name: 'Sonya Blade',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Sonya_MK_11.png'
    },
    {
        id: 6,
        name: 'Kano',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/81/KanoMKXrender.png'
    },
    {
        id: 7,
        name: 'Jax Briggs',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/4/4c/Jax_mk11.png/revision/latest?cb=20190328005321'
    },
    {
        id: 8,
        name: 'Kung Lao',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Human_kung_laos.webp/275px-Human_kung_laos.webp.png'
    },
    {
        id: 9,
        name: 'Johnny Cage',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Johnny_Render_mk_11.png'
    },
    {
        id: 10,
        name: 'Shao Kahn',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/5/5f/Shao_Khan_mk11_default_2.png/revision/latest?cb=20190425000346'
    },
    {
        id: 11,
        name: 'Mileena',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/e/e0/MK11MileenaRender.png/revision/latest/top-crop/width/360/height/360?cb=20201008153856'
    },
    {
        id: 12,
        name: 'Noob Saibot',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/b/b0/Noob_Saibot_mk11.png/revision/latest?cb=20190322210711'
    },
    {
        id: 13,
        name: 'Kitana',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/5/59/Kitana_mk11.png/revision/latest?cb=20190413032708'
    },
    {
        id: 14,
        name: 'Goro',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/7/74/GoroRenderMKX.png/revision/latest?cb=20150506005824'
    },
    {
        id: 15,
        name: 'Kabal',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Kabal_MK11.png'
    },
    {
        id: 16,
        name: 'Baraka',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/f/fe/MK11_Baraka_Render.png/revision/latest?cb=20190117201237'
    },
    {
        id: 17,
        name: 'Quan Chi',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/4/4e/Quan_Chi_MKX_Render.png/revision/latest?cb=20170504005959'
    },
    {
        id: 18,
        name: 'Cassie Cage',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/d/d2/Cassie_mk11.png/revision/latest?cb=20190306231757'
    },
    {
        id: 19,
        name: 'Nightwolf',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/a/ad/NightwolfRenderMK11.png/revision/latest?cb=20190815003315'
    },
    {
        id: 20,
        name: 'Reptile',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/ReptileMKXrender.png/220px-ReptileMKXrender.png'
    },
    {
        id: 21,
        name: 'Cyrax',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/a/ae/Cyrax_RenderMK11.png/revision/latest?cb=20190627163350'
    },
    {
        id: 22,
        name: 'Kotal Kahn',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/f/f1/Kotal_mk11.png/revision/latest?cb=20190321025157'
    },
    {
        id: 23,
        name: 'Sheeva',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/8/84/Sheeva_Render.png/revision/latest?cb=20200508024526'
    },
    {
        id: 24,
        name: 'Skarlet',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/1/1d/MK11_Skarlet_Render.png/revision/latest?cb=20190325211819'
    },
    {
        id: 25,
        name: 'Kenshi',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/3/37/Kenshi_MKX_Render_2.png/revision/latest?cb=20150410175123'
    },
    {
        id: 26,
        name: 'Sektor',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/37/Sektor_mk11.png'
    },
    {
        id: 27,
        name: 'Erron Black',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/9/91/Erron_mk11.png/revision/latest?cb=20190313041908'
    },
    {
        id: 28,
        name: 'Nitara',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/c/c5/Nitara.png/revision/latest/top-crop/width/360/height/360?cb=20110709060859'
    },
    {
        id: 29,
        name: 'Jacqui Briggs',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/9/9f/Jacqui_mk11.png/revision/latest?cb=20190322005550'
    },
    {
        id: 30,
        name: 'Jade',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/2/26/Jade_MK11.png/revision/latest?cb=20190227220506'
    },
    {
        id: 31,
        name: 'D’Vorah',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/8/85/D%27vorah_mk11_2.png/revision/latest?cb=20190414150233'
    },
    {
        id: 32,
        name: 'Fujin',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/6/63/MK11_Fujin_render-0.png/revision/latest?cb=20200506203604'
    },
    {
        id: 33,
        name: 'Kollector',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/9/91/Kollector_MK11.png/revision/latest?cb=20190407091921'
    },
    {
        id: 34,
        name: 'Geras',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/4/47/Geras_MK11.png/revision/latest?cb=20190119130238'
    },
    {
        id: 35,
        name: 'Cetrion',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/d/d7/Cetrion_MK11.png/revision/latest?cb=20190412180127'
    },
    {
        id: 36,
        name: 'kronika',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/1/1f/MK11KronikaRender.png/revision/latest?cb=20190812124147'
    },
    {
        id: 37,
        name: 'Rambo',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/8/83/MK11JohnRamboRender.png/revision/latest?cb=20201008145819'
    },
    {
        id: 38,
        name: 'Terminator',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/5/53/MK11TerminatorRender.png/revision/latest?cb=20200129033028'
    },
    {
        id: 39,
        name: 'Robocop',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/a/a8/Robocop_MK11_render.png/revision/latest?cb=20200506203054'
    },
    {
        id: 40,
        name: 'Jason Voorhees',
        image: 'https://static.wikia.nocookie.net/mkwikia/images/5/56/Jason_Render.png/revision/latest?cb=20150722145559'
    },

];
let team = [];
let id = 0;


module.exports = {
    getCharacter: (req, res) => {
        res.status(200).send(characters)
    },

    getTeam:( req, res) => {
        res.status(200).send(team)
    },
    addCharacter: (req, res) => {
        let { name, image } = req.body
       const character = {
            id,
            name,
            image,
        }
    team.push({character})
    id++;
    console.log(image)
        res.status(200).send(team)
        
    },
    deleteCharacter: (req, res) => {
        const { id } = req.params
        const index = characters.findIndex((e) => {
            return e.id === +id
        })
        characters.splice(index, 1)
        res.status(200).send(characters)
    },
    // editTeamName: (req, res) => {
    //     const {id} = req.pramas
    //     const {teamName} = req.body
    //     const index = movies.findIndex((e) => {
    //         return e.id === +id
    //     })
    //     teamName
    // }
}