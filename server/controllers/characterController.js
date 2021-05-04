const { urlencoded } = require("express");

let characters = [
    {
        id: 0,
        name: 'Scorpion',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/ScorpionMKXRender.png'
    },
    {
        id: 1,
        name: 'Sub Zero',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png'
    },
    {
        id: 2,
        name: 'Liu Kang',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/68950cdf-d3f7-4505-bfef-3e04b7acd895/dd7ld0t-1c99a0ce-dce2-4aa3-9a6e-a51b194458a8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4OTUwY2RmLWQzZjctNDUwNS1iZmVmLTNlMDRiN2FjZDg5NVwvZGQ3bGQwdC0xYzk5YTBjZS1kY2UyLTRhYTMtOWE2ZS1hNTFiMTk0NDU4YTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e5IdNnuJy1qhDYe2v-6DmZEMuQT59MfQRdHtMWjBpZY'
    },
    {
        id: 3,
        name: 'Lord Raiden',
        image: 'https://upload.wikimedia.org/wikipedia/en/0/06/Raidenmk11.png'
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
        image: 'https://i.pinimg.com/originals/80/40/00/8040005eab0d7a36fbd4830bdc1dbe2a.png'
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
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Shao_Kahn_2011.png'
    },
    {
        id: 11,
        name: 'Mileena',
        image: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Mileena_MK11_Design.webp'
    },
    {
        id: 12,
        name: 'Noob Saibot',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Noobsaibotmk11.png'
    },
    {
        id: 13,
        name: 'Kitana',
        image: 'https://cdn.dashfight.com/30bb6037592c0806ccad367356774279992ba775.png'
    },
    {
        id: 14,
        name: 'Goro',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22533fb0-3db2-4d45-8675-4aaf09a2027b/dbtnw3g-f2ddd0a9-c319-436c-84e7-11a07f5a19bd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNTMzZmIwLTNkYjItNGQ0NS04Njc1LTRhYWYwOWEyMDI3YlwvZGJ0bnczZy1mMmRkZDBhOS1jMzE5LTQzNmMtODRlNy0xMWEwN2Y1YTE5YmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a_8IVolT0hVIT31mrkZcceUVP8i_5unjrmJrmLF5-Ws'
    },
    {
        id: 15,
        name: 'Kabal',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Kabal_MK11.png'
    },
    {
        id: 16,
        name: 'Baraka',
        image: 'https://www.kombatakademy.com/wp-content/uploads/mortal-kombat-11/characters/baraka.png'
    },
    {
        id: 17,
        name: 'Quan Chi',
        image: 'https://i.pinimg.com/originals/8c/9f/23/8c9f2313253a016aee867236917b9c27.gif'
    },
    {
        id: 18,
        name: 'Cassie Cage',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/572b1701-7bcb-425b-a8c9-bf43cdf7c03d/dd9642l-d3fe70e2-0adf-448e-a94d-8942572b3b67.png/v1/fill/w_1280,h_1485,strp/mortal_kombat_11_cassie_cage_by_eveniz_dd9642l-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ4NSIsInBhdGgiOiJcL2ZcLzU3MmIxNzAxLTdiY2ItNDI1Yi1hOGM5LWJmNDNjZGY3YzAzZFwvZGQ5NjQybC1kM2ZlNzBlMi0wYWRmLTQ0OGUtYTk0ZC04OTQyNTcyYjNiNjcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.j4QlZkuIC4bRDFDIWhO_4BVE_RPJKRq8Y8--HI7pHl4'
    },
    {
        id: 19,
        name: 'Nightwolf',
        image: 'https://www.kombatakademy.com/wp-content/uploads/mortal-kombat-11/characters/nightwolf.png'
    },
    {
        id: 20,
        name: 'Reptile',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/ReptileMKXrender.png/220px-ReptileMKXrender.png'
    },
    {
        id: 21,
        name: 'Cyrax',
        image: 'https://images2.wikia.nocookie.net/__cb20110720213722/mortalkombat/es/images/4/44/Versus_Cyrax_(MK9).png'
    },
    {
        id: 22,
        name: 'Kotal Kahn',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dd2t385-60cda138-ef60-4c93-a3be-41b0b838c501.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGQydDM4NS02MGNkYTEzOC1lZjYwLTRjOTMtYTNiZS00MWIwYjgzOGM1MDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LlwDps_TynBSiWRMZ3Vhjs_wwOI_LWJ8w7CZW_hFw7I'
    },
    {
        id: 23,
        name: 'Sheeva',
        image: 'https://pbs.twimg.com/media/Eijp73jXYAA8j7J.png'
    },
    {
        id: 24,
        name: 'Skarlet',
        image: 'https://mk11moves.com/img/characters/crops/skarlet.png'
    },
    {
        id: 25,
        name: 'Kenshi',
        image: 'https://upload.wikimedia.org/wikipedia/en/7/70/KenshiMKXrender.png'
    },
    {
        id: 26,
        name: 'Sektor',
        image: 'https://upload.wikimedia.org/wikipedia/en/3/37/Sektor_mk11.png'
    },
    {
        id: 27,
        name: 'Erron Black',
        image: 'https://cdn-prod.mortalkombat.com/roster/erron-black/body.png'
    },
    {
        id: 28,
        name: 'Nitara',
        image: 'http://images4.fanpop.com/image/photos/19600000/NItara-the-ladies-of-mortal-kombat-19656016-254-425.png'
    },
    {
        id: 29,
        name: 'Jacqui Briggs',
        image: 'https://i.redd.it/6bkzzfrv2vi41.png'
    },
    {
        id: 30,
        name: 'Jade',
        image: 'https://www.fightersgeneration.com/nf7/char/jade-mk9-arcade-ladder.png'
    },
    {
        id: 31,
        name: 'D’Vorah',
        image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e30824-3c9a-4957-b6ab-394cb783aa20/dd3b2au-98729c8d-3c1c-4184-90da-e7d7f97ea7a4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGQzYjJhdS05ODcyOWM4ZC0zYzFjLTQxODQtOTBkYS1lN2Q3Zjk3ZWE3YTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.oqlm_jV3qVOv3Pi8AoRyllA6b3yaR5fdL1q6XYGVt6Y'
    },
    {
        id: 32,
        name: 'Fu Jin',
        image: 'https://cdn.dashfight.com/33b2eb8134662397bc2ce9a6f67719388a90f8ab.png'
    },
    {
        id: 33,
        name: 'Kollector',
        image: 'https://cdn-prod.mortalkombat.com/roster/kollector/thumb-p.png'
    },
    {
        id: 34,
        name: 'Geras',
        image: 'https://static.wikia.nocookie.net/0aa52f0c-d3c0-42e6-91d4-1bfa715c090e'
    },
    {
        id: 35,
        name: 'Cetrion',
        image: 'https://cdn.dashfight.com/0cc78bca7ef468211d13348d14a04729d7713e50.png'
    },
    {
        id: 36,
        name: 'kronika',
        image: 'https://i.pinimg.com/originals/9e/e4/07/9ee407181bd65904adaec18aa26d96c5.png'
    },
    {
        id: 37,
        name: 'Rambo',
        image: 'https://cdn-prod.mortalkombat.com/roster/rambo/thumb-p.png'
    },
    {
        id: 38,
        name: 'Terminator',
        image: 'https://cdn01.x-plarium.com/browser/content/company/Our_Games/Terminator/T_main_hero.png'
    },
    {
        id: 39,
        name: 'Robocop',
        image: 'http://pngimg.com/uploads/robocop/robocop_PNG13.png'
    },
    {
        id: 40,
        name: 'Jason Voorhees',
        image: 'https://i.pinimg.com/originals/84/43/86/844386cb9edfe7f648f6daa251924733.png'
    },

];
let team = [];
let teamName = ''
let id = 0;


module.exports = {
    getCharacter: (req, res) => {
        res.status(200).send(characters)
    },

    getTeam: (req, res) => {
        res.status(200).send(team)
    },
    addCharacter: (req, res) => {
        let { name, image } = req.body
        const character = {
            id,
            name,
            image,
        }
        team.push({ character })
        id++;
        console.log(image)
        res.status(200).send(team)

    },
    deleteCharacter: (req, res) => {
        const { id } = req.params

        let index;
        for (let i = 0; i < team.length; i++) {
            if (team[i].id === parseInt(id)) {
                index = i;
                break;
            }
        }
        console.log(index);
        team.splice(index, 1)
        res.status(200).send(team)
        console.log(index)
    },
    editTeamName: (req, res) => {
        teamName = req.body.teamName
        res.status(200).send(teamName)
    }
}