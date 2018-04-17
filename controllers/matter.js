'use strict'
const Matter = require('../models/matter')

function postMatter(req,res) {
    console.log(req.body)
    let matter = new Matter({
        code:req.body.code,
        mattername:req.body.namem,
        alumns:[],
        descriptions:req.body.descrip
    })

    Matter.save((err,matterStored)=>{
        if(err) res.status(500).send({message:`error al insertar materia ${err}`})

        res.status(200).send({matter:matterStored})
    })
}


module.exports ={
    postMatter,
    
}